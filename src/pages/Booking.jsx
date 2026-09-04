import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  TrainFront,
  UserRound,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Toast from "../components/Toast";

import { useSearch } from "../context/SearchContext";
import { validateBooking } from "../utils/validation";
import { generatePNR, saveBooking } from "../utils/bookingUtils";

export default function Booking() {
  const navigate = useNavigate();

  const { selectedTrain } = useSearch();

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    travelClass: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [toast, setToast] = useState(null);

  if (!selectedTrain) {
    return (
      <>
        <Navbar />

        <main className="empty-page">
          <div className="empty-state">
            <div className="empty-icon">🎫</div>

            <h2>No Train Selected</h2>

            <p>Please select a train before continuing.</p>

            <button
              className="primary-button"
              onClick={() => navigate("/trains")}
            >
              Search Trains
            </button>
          </div>
        </main>
      </>
    );
  }

  const updateField = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: "",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateBooking(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      setToast({
        type: "error",
        title: "Check your details",
        message: "Please correct the highlighted fields.",
      });

      return;
    }

    setProcessing(true);

    setToast({
      type: "info",
      title: "Confirming your booking",
      message: "Please wait...",
    });

    setTimeout(() => {
      const pnr = generatePNR();

      const booking = {
        ...form,
        pnr,
        train: selectedTrain,
        status: "CONFIRMED",
        bookedAt: new Date().toISOString(),
      };

      saveBooking(booking);

      setProcessing(false);

      navigate("/booking-success", {
        state: { booking },
      });
    }, 1200);
  };

  return (
    <>
      <Navbar />

      <main className="booking-page">
        <div className="page-container narrow-container">
          <button className="back-button" onClick={() => navigate("/trains")}>
            <ArrowLeft size={17} />
            Back to trains
          </button>

          <div className="booking-layout">
            <section className="selected-train">
              <span className="section-label">YOUR JOURNEY</span>

              <h1>Selected train</h1>

              <div className="selected-train-card">
                <div className="selected-header">
                  <div className="train-icon">
                    <TrainFront size={22} />
                  </div>

                  <div>
                    <span>{selectedTrain.number}</span>
                    <h3>{selectedTrain.name}</h3>
                  </div>
                </div>

                <div className="selected-route">
                  <div>
                    <strong>{selectedTrain.departure}</strong>
                    <span>{selectedTrain.from}</span>
                  </div>

                  <div className="selected-route-line">
                    <div />
                    <TrainFront size={17} />
                    <div />
                  </div>

                  <div>
                    <strong>{selectedTrain.arrival}</strong>
                    <span>{selectedTrain.to}</span>
                  </div>
                </div>

                <div className="selected-meta">
                  <span>{selectedTrain.duration}</span>
                  <span>{selectedTrain.class}</span>
                  <strong>₹{selectedTrain.fare}</strong>
                </div>
              </div>
            </section>

            <section className="booking-form-card">
              <div className="form-heading">
                <div className="form-icon">
                  <UserRound size={20} />
                </div>

                <div>
                  <span className="section-label">PASSENGER DETAILS</span>
                  <h2>Who is travelling?</h2>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div
                  className={`form-field ${
                    errors.name ? "form-field-error" : ""
                  }`}
                >
                  <label>FULL NAME</label>

                  <input
                    type="text"
                    placeholder="Enter passenger name"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                  />

                  {errors.name && <small>{errors.name}</small>}
                </div>

                <div className="two-fields">
                  <div
                    className={`form-field ${
                      errors.age ? "form-field-error" : ""
                    }`}
                  >
                    <label>AGE</label>

                    <input
                      type="number"
                      min="5"
                      max="100"
                      placeholder="Age"
                      value={form.age}
                      onChange={(e) => updateField("age", e.target.value)}
                    />

                    {errors.age && <small>{errors.age}</small>}
                  </div>

                  <div
                    className={`form-field ${
                      errors.gender ? "form-field-error" : ""
                    }`}
                  >
                    <label>GENDER</label>

                    <select
                      value={form.gender}
                      onChange={(e) =>
                        updateField("gender", e.target.value)
                      }
                    >
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>

                    {errors.gender && <small>{errors.gender}</small>}
                  </div>
                </div>

                <div
                  className={`form-field ${
                    errors.travelClass ? "form-field-error" : ""
                  }`}
                >
                  <label>TRAVEL CLASS</label>

                  <select
                    value={form.travelClass}
                    onChange={(e) =>
                      updateField("travelClass", e.target.value)
                    }
                  >
                    <option value="">Select travel class</option>
                    <option value="Sleeper">Sleeper</option>
                    <option value="Chair Car">Chair Car</option>
                    <option value="AC Chair Car">AC Chair Car</option>
                    <option value="AC 3 Tier">AC 3 Tier</option>
                    <option value="AC 2 Tier">AC 2 Tier</option>
                    <option value="Executive Chair">Executive Chair</option>
                  </select>

                  {errors.travelClass && (
                    <small>{errors.travelClass}</small>
                  )}
                </div>

                <div
                  className={`form-field ${
                    errors.mobile ? "form-field-error" : ""
                  }`}
                >
                  <label>MOBILE NUMBER</label>

                  <div className="mobile-input">
                    <Smartphone size={18} />

                    <input
                      type="tel"
                      inputMode="numeric"
                      maxLength="10"
                      placeholder="10-digit mobile number"
                      value={form.mobile}
                      onChange={(e) =>
                        updateField(
                          "mobile",
                          e.target.value.replace(/\D/g, "")
                        )
                      }
                    />
                  </div>

                  {errors.mobile && <small>{errors.mobile}</small>}
                </div>

                <div className="secure-note">
                  <CheckCircle2 size={17} />
                  Your booking details are stored securely in this browser.
                </div>

                <button
                  type="submit"
                  className="primary-button confirm-button"
                  disabled={processing}
                >
                  {processing ? (
                    <>
                      <span className="spinner" />
                      Confirming Booking...
                    </>
                  ) : (
                    "Confirm Booking"
                  )}
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>

      <Toast toast={toast} onClose={() => setToast(null)} />
    </>
  );
}