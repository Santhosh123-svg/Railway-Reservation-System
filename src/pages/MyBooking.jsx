import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Ticket, AlertTriangle } from "lucide-react";

import Navbar from "../components/Navbar";
import BookingCard from "../components/BookingCard";
import Toast from "../components/Toast";

import { getBooking, cancelBooking } from "../utils/bookingUtils";

export default function MyBooking() {
  const navigate = useNavigate();

  const [booking, setBooking] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    setBooking(getBooking());
  }, []);

  const handleCancel = () => {
    const cancelled = cancelBooking();

    setBooking(cancelled);
    setShowModal(false);

    setToast({
      type: "success",
      title: "Ticket cancelled",
      message: "Your railway booking has been cancelled successfully.",
    });

    setTimeout(() => {
      navigate("/cancellation-success", {
        state: { booking: cancelled },
      });
    }, 800);
  };

  return (
    <>
      <Navbar />

      <main className="my-booking-page">
        <div className="page-container narrow-container">
          <button className="back-button" onClick={() => navigate("/")}>
            <ArrowLeft size={17} />
            Back Home
          </button>

          <div className="booking-heading">
            <div>
              <span className="section-label">YOUR JOURNEY</span>
              <h1>My Booking</h1>
              <p>Manage your active railway reservation.</p>
            </div>

            <Ticket size={36} />
          </div>

          {booking ? (
            <BookingCard
              booking={booking}
              onCancel={() => setShowModal(true)}
            />
          ) : (
            <div className="empty-state">
              <div className="empty-icon">🎫</div>

              <h2>No Active Booking</h2>

              <p>You don't have any railway booking yet.</p>

              <button
                className="primary-button"
                onClick={() => navigate("/")}
              >
                Search Trains
              </button>
            </div>
          )}
        </div>
      </main>

      {showModal && (
        <div className="modal-backdrop">
          <div className="confirm-modal">
            <div className="modal-icon">
              <AlertTriangle size={25} />
            </div>

            <span className="section-label">CANCEL RESERVATION</span>

            <h2>Cancel this ticket?</h2>

            <p>
              Are you sure you want to cancel your booking? This action cannot
              be undone.
            </p>

            <div className="modal-pnr">
              PNR <strong>{booking?.pnr}</strong>
            </div>

            <div className="modal-actions">
              <button
                className="secondary-button"
                onClick={() => setShowModal(false)}
              >
                Keep Booking
              </button>

              <button className="danger-button" onClick={handleCancel}>
                Yes, Cancel Ticket
              </button>
            </div>
          </div>
        </div>
      )}

      <Toast toast={toast} onClose={() => setToast(null)} />
    </>
  );
}