import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, SlidersHorizontal } from "lucide-react";

import Navbar from "../components/Navbar";
import TrainCard from "../components/TrainCard";
import Toast from "../components/Toast";

import { trains } from "../data/trains";
import { useSearch } from "../context/SearchContext";

export default function Trains() {
  const navigate = useNavigate();

  const {
    searchCriteria,
    setSelectedTrain,
  } = useSearch();

  const [toast, setToast] = useState(null);

  const filteredTrains = searchCriteria
    ? trains.filter(
        (train) =>
          train.from === searchCriteria.from &&
          train.to === searchCriteria.to
      )
    : trains;

  const handleBook = (train) => {
    setSelectedTrain(train);

    setToast({
      type: "success",
      title: "Train selected",
      message: `${train.name} is ready for booking.`,
    });

    setTimeout(() => {
      navigate("/booking");
    }, 600);
  };

  return (
    <>
      <Navbar />

      <main className="trains-page">
        <div className="page-container">
          <button className="back-button" onClick={() => navigate("/")}>
            <ArrowLeft size={17} />
            Modify Search
          </button>

          <div className="results-heading">
            <div>
              <span className="section-label">AVAILABLE TRAINS</span>

              <h1>
                {searchCriteria
                  ? `${searchCriteria.from} → ${searchCriteria.to}`
                  : "Explore available trains"}
              </h1>

              {searchCriteria && (
                <p>
                  Travel date:{" "}
                  {new Date(
                    `${searchCriteria.date}T00:00:00`
                  ).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              )}
            </div>

            <div className="result-count">
              <SlidersHorizontal size={17} />
              {filteredTrains.length} trains
            </div>
          </div>

          {filteredTrains.length > 0 ? (
            <div className="train-list">
              {filteredTrains.map((train, index) => (
                <div
                  className="train-card-animation"
                  style={{ "--delay": `${index * 80}ms` }}
                  key={train.id}
                >
                  <TrainCard train={train} onBook={handleBook} />
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">🚆</div>

              <h2>No Trains Found</h2>

              <p>No trains are available for the selected route.</p>

              <button className="primary-button" onClick={() => navigate("/")}>
                Modify Search
              </button>
            </div>
          )}
        </div>
      </main>

      <Toast toast={toast} onClose={() => setToast(null)} />
    </>
  );
}