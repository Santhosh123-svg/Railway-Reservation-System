import { useLocation, useNavigate } from "react-router-dom";
import { Check, Home, ArrowRight, TrainFront } from "lucide-react";

import Navbar from "../components/Navbar";

export default function CancellationSuccess() {
  const navigate = useNavigate();
  const location = useLocation();

  const booking = location.state?.booking;

  if (!booking) {
    return (
      <>
        <Navbar />

        <main className="empty-page">
          <div className="empty-state">
            <h2>Cancellation information unavailable</h2>

            <button
              className="primary-button"
              onClick={() => navigate("/my-booking")}
            >
              My Booking
            </button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="cancel-success-page">
        <div className="cancel-success-content">
          <div className="cancel-check">
            <Check size={40} />
          </div>

          <span className="section-label">CANCELLATION COMPLETE</span>

          <h1>
            Ticket cancelled
            <br />
            <span>successfully.</span>
          </h1>

          <p>Your railway reservation has been cancelled.</p>

          <div className="cancelled-ticket">
            <div className="ticket-header">
              <div className="brand-mini">
                <TrainFront size={18} />
                RailReserve
              </div>

              <span className="cancelled-status">CANCELLED</span>
            </div>

            <div className="cancel-pnr">
              <span>PNR</span>
              <strong>{booking.pnr}</strong>
            </div>

            <div className="cancel-info">
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
                <span>JOURNEY</span>
                <strong>
                  {booking.train.from} → {booking.train.to}
                </strong>
              </div>
            </div>
          </div>

          <div className="success-actions">
            <button className="primary-button" onClick={() => navigate("/")}>
              Book Another Journey
              <ArrowRight size={18} />
            </button>

            <button
              className="secondary-button"
              onClick={() => navigate("/my-booking")}
            >
              <Home size={17} />
              My Booking
            </button>
          </div>
        </div>
      </main>
    </>
  );
}