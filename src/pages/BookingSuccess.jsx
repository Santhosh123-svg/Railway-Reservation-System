import { useLocation, useNavigate } from "react-router-dom";
import { Check, ArrowRight, Home, TrainFront } from "lucide-react";

import Navbar from "../components/Navbar";

export default function BookingSuccess() {
  const navigate = useNavigate();
  const location = useLocation();

  const booking = location.state?.booking;

  if (!booking) {
    return (
      <>
        <Navbar />

        <main className="empty-page">
          <div className="empty-state">
            <h2>Booking not found</h2>

            <button
              className="primary-button"
              onClick={() => navigate("/my-booking")}
            >
              View My Booking
            </button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="success-page">
        <div className="success-glow" />

        <div className="success-content">
          <div className="success-check">
            <Check size={44} strokeWidth={2.5} />
          </div>

          <span className="section-label">RESERVATION CONFIRMED</span>

          <h1>
            Ticket booked
            <br />
            <span>successfully.</span>
          </h1>

          <p>
            Your journey has been confirmed. Your PNR has been generated
            successfully.
          </p>

          <div className="pnr-card">
            <span>YOUR PNR</span>
            <strong>{booking.pnr}</strong>
          </div>

          <div className="success-ticket">
            <div className="ticket-header">
              <div className="brand-mini">
                <TrainFront size={19} />
                RailReserve
              </div>

              <span>CONFIRMED</span>
            </div>

            <div className="ticket-route">
              <div>
                <strong>{booking.train.from}</strong>
                <span>{booking.train.departure}</span>
              </div>

              <div className="ticket-route-line">
                <div />
                <TrainFront size={19} />
                <div />
              </div>

              <div>
                <strong>{booking.train.to}</strong>
                <span>{booking.train.arrival}</span>
              </div>
            </div>

            <div className="ticket-info">
              <div>
                <span>PASSENGER</span>
                <strong>{booking.name}</strong>
              </div>

              <div>
                <span>TRAIN</span>
                <strong>
                  {booking.train.number} · {booking.train.name}
                </strong>
              </div>

              <div>
                <span>CLASS</span>
                <strong>{booking.travelClass}</strong>
              </div>

              <div>
                <span>FARE</span>
                <strong>₹{booking.train.fare}</strong>
              </div>
            </div>
          </div>

          <div className="success-actions">
            <button
              className="primary-button"
              onClick={() => navigate("/my-booking")}
            >
              View My Booking
              <ArrowRight size={18} />
            </button>

            <button className="secondary-button" onClick={() => navigate("/")}>
              <Home size={17} />
              Back Home
            </button>
          </div>
        </div>
      </main>
    </>
  );
}