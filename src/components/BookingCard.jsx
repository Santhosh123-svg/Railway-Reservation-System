import { TrainFront, XCircle } from "lucide-react";

export default function BookingCard({ booking, onCancel }) {
  const cancelled = booking.status === "CANCELLED";

  return (
    <article className={`booking-card ${cancelled ? "cancelled" : ""}`}>
      <div className="booking-card-top">
        <div className="brand-mini">
          <TrainFront size={19} />
          RailReserve
        </div>

        <span className={`status ${cancelled ? "cancelled-status" : ""}`}>
          {booking.status}
        </span>
      </div>

      <div className="pnr-section">
        <span>PNR</span>
        <strong>{booking.pnr}</strong>
      </div>

      <div className="booking-route">
        <div>
          <strong>{booking.train.from}</strong>
          <span>{booking.train.departure}</span>
        </div>

        <div className="booking-route-line">
          <div />
          <TrainFront size={18} />
          <div />
        </div>

        <div>
          <strong>{booking.train.to}</strong>
          <span>{booking.train.arrival}</span>
        </div>
      </div>

      <div className="booking-details-grid">
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
          <span>TRAVEL CLASS</span>
          <strong>{booking.travelClass}</strong>
        </div>

        <div>
          <span>FARE</span>
          <strong>₹{booking.train.fare}</strong>
        </div>
      </div>

      {!cancelled && (
        <button className="cancel-button" onClick={onCancel}>
          <XCircle size={17} />
          Cancel Ticket
        </button>
      )}
    </article>
  );
}