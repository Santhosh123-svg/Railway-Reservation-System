import { TrainFront, Clock3, Users, IndianRupee, ArrowRight } from "lucide-react";

export default function TrainCard({ train, onBook }) {
  const soldOut = train.availableSeats === 0;
  const lowSeats = train.availableSeats > 0 && train.availableSeats <= 5;

  return (
    <article className="train-card">
      <div className="train-top">
        <div className="train-title">
          <div className="train-icon">
            <TrainFront size={22} />
          </div>

          <div>
            <span>{train.number}</span>
            <h3>{train.name}</h3>
          </div>
        </div>

        <span className="train-type">{train.type}</span>
      </div>

      <div className="journey-row">
        <div className="station">
          <strong>{train.departure}</strong>
          <span>{train.from}</span>
        </div>

        <div className="journey-line">
          <span className="line-dot" />
          <div className="journey-dash" />
          <TrainFront size={18} />
          <div className="journey-dash" />
          <span className="line-dot" />
        </div>

        <div className="station station-right">
          <strong>{train.arrival}</strong>
          <span>{train.to}</span>
        </div>
      </div>

      <div className="train-details">
        <div>
          <Clock3 size={16} />
          <span>{train.duration}</span>
        </div>

        <div>
          <Users size={16} />
          <span>{train.class}</span>
        </div>

        <div className={lowSeats ? "low-seat" : ""}>
          <Users size={16} />
          <span>
            {soldOut
              ? "Sold Out"
              : lowSeats
              ? `Only ${train.availableSeats} left`
              : `${train.availableSeats} seats`}
          </span>
        </div>
      </div>

      <div className="train-bottom">
        <div className="fare">
          <span>FARE FROM</span>
          <strong>
            <IndianRupee size={17} />
            {train.fare}
          </strong>
        </div>

        <button
          className={`book-button ${soldOut ? "disabled" : ""}`}
          disabled={soldOut}
          onClick={() => onBook(train)}
        >
          {soldOut ? "Sold Out" : "Book Now"}
          {!soldOut && <ArrowRight size={17} />}
        </button>
      </div>
    </article>
  );
}