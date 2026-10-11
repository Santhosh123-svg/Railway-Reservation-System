
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  TrainFront,
  ArrowLeft,
  ArrowRight,
  CreditCard,
  Smartphone,
  Wallet,
  ShieldCheck,
  CheckCircle2,
  Ticket,
} from "lucide-react";
import { saveBooking } from "../utils/bookingUtils";
import "./Payment.css";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state?.booking;

  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!booking) {
      navigate("/trains", { replace: true });
    }
  }, [booking, navigate]);

  if (!booking) {
    return null;
  }

  const train = booking.train || {};

  const trainName =
    train.name || train.trainName || booking.trainName || "Selected Train";

  const trainNumber =
    train.number || train.trainNumber || booking.trainNumber || "N/A";

  const from =
    booking.from || booking.fromStation || train.from || "Departure";

  const to =
    booking.to || booking.toStation || train.to || "Destination";

  const travelDate = booking.travelDate || booking.date || "As selected";

  const passengerName =
    booking.passengerName ||
    booking.name ||
    booking.fullName ||
    "Passenger";

  const fare = Number(
    booking.fare ??
      booking.price ??
      booking.totalFare ??
      train.price ??
      0
  );

  const handlePayment = () => {
    if (processing) return;

    setError("");
    setProcessing(true);

    try {
      const confirmedBooking = {
        ...booking,
        status: "CONFIRMED",
        paymentStatus: "PAID",
        paymentMethod:
          paymentMethod === "upi"
            ? "UPI"
            : paymentMethod === "card"
              ? "Card"
              : "Wallet",
        paymentId: `DEMO${Date.now()}`,
        paidAt: new Date().toISOString(),
      };

      // Demo payment only: no real money is charged.
      saveBooking(confirmedBooking);

      navigate("/booking-success", {
        replace: true,
        state: { booking: confirmedBooking },
      });
    } catch {
      setProcessing(false);
      setError("Payment could not be completed. Please try again.");
    }
  };

  return (
    <main className="payment-page">
      <header className="payment-header">
        <Link to="/home" className="payment-brand">
          <span className="payment-brand-icon">
            <TrainFront size={23} />
          </span>
          Rail<span>Reserve</span>
        </Link>

        <div className="payment-secure-label">
          <ShieldCheck size={17} />
          Secure Checkout
        </div>
      </header>

      <section className="payment-container">
        <Link
          to="/booking"
          state={{ booking }}
          className="payment-back-link"
          onClick={(event) => {
            event.preventDefault();
            navigate(-1);
          }}
        >
          <ArrowLeft size={17} />
          Back to booking
        </Link>

        <div className="payment-heading">
          <span className="payment-eyebrow">FINAL STEP</span>
          <h1>Complete your payment</h1>
          <p>Review your journey and choose a payment method.</p>
        </div>

        <div className="payment-layout">
          <section className="payment-main-card">
            <div className="payment-section-title">
              <span className="payment-title-icon">
                <CreditCard size={21} />
              </span>
              <div>
                <h2>Payment method</h2>
                <p>Select how you would like to pay.</p>
              </div>
            </div>

            <div className="payment-methods">
              <button
                type="button"
                className={`payment-method ${
                  paymentMethod === "upi" ? "selected" : ""
                }`}
                onClick={() => setPaymentMethod("upi")}
                aria-pressed={paymentMethod === "upi"}
              >
                <Smartphone size={22} />
                <span>
                  <strong>UPI</strong>
                  <small>GPay, PhonePe, etc.</small>
                </span>
                <span className="payment-radio" />
              </button>

              <button
                type="button"
                className={`payment-method ${
                  paymentMethod === "card" ? "selected" : ""
                }`}
                onClick={() => setPaymentMethod("card")}
                aria-pressed={paymentMethod === "card"}
              >
                <CreditCard size={22} />
                <span>
                  <strong>Credit / Debit Card</strong>
                  <small>Demo card payment</small>
                </span>
                <span className="payment-radio" />
              </button>

              <button
                type="button"
                className={`payment-method ${
                  paymentMethod === "wallet" ? "selected" : ""
                }`}
                onClick={() => setPaymentMethod("wallet")}
                aria-pressed={paymentMethod === "wallet"}
              >
                <Wallet size={22} />
                <span>
                  <strong>Wallet</strong>
                  <small>Demo wallet payment</small>
                </span>
                <span className="payment-radio" />
              </button>
            </div>

            <div className="payment-demo-notice">
              <ShieldCheck size={18} />
              <p>
                This is a demonstration checkout. No real payment,
                card details, or bank credentials are required.
              </p>
            </div>

            {error && (
              <p className="payment-error" role="alert">
                {error}
              </p>
            )}

            <button
              type="button"
              className="payment-confirm-button"
              onClick={handlePayment}
              disabled={processing}
            >
              {processing ? (
                "Processing..."
              ) : (
                <>
                  Confirm Demo Payment
                  <ArrowRight size={18} />
                </>
              )}
            </button>

            <p className="payment-footer-note">
              <CheckCircle2 size={15} />
              Booking confirmation appears after you continue.
            </p>
          </section>

          <aside className="payment-summary-card">
            <div className="payment-summary-heading">
              <Ticket size={21} />
              <h2>Booking summary</h2>
            </div>

            <div className="payment-train-name">
              <strong>{trainName}</strong>
              <span>Train No: {trainNumber}</span>
            </div>

            <div className="payment-route">
              <div>
                <span>FROM</span>
                <strong>{from}</strong>
              </div>

              <div className="payment-route-line">
                <span />
                <ArrowRight size={17} />
              </div>

              <div className="payment-destination">
                <span>TO</span>
                <strong>{to}</strong>
              </div>
            </div>

            <div className="payment-summary-row">
              <span>Passenger</span>
              <strong>{passengerName}</strong>
            </div>

            <div className="payment-summary-row">
              <span>Travel date</span>
              <strong>{String(travelDate)}</strong>
            </div>

            <div className="payment-summary-row">
              <span>Class</span>
              <strong>
                {booking.travelClass ||
                  booking.class ||
                  booking.coach ||
                  "As selected"}
              </strong>
            </div>

            <div className="payment-total">
              <span>Total payable</span>
              <strong>₹{fare.toLocaleString("en-IN")}</strong>
            </div>

            <p className="payment-summary-note">
              Demo payment only. No actual amount will be deducted.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
