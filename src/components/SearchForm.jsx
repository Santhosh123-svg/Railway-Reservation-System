
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  CalendarDays,
  ArrowLeftRight,
  Search,
  Sparkles,
  TrainFront,
  Clock3,
} from "lucide-react";

import { useSearch } from "../context/SearchContext";
import { validateSearch } from "../utils/validation";
import { locations, cityStates } from "../data/trains";

export default function SearchForm() {
  const navigate = useNavigate();
  const { setSearchCriteria } = useSearch();

  const [form, setForm] = useState({
    from: "",
    to: "",
    date: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  // ----------------------------------------------------------
  // Available destination cities
  // ----------------------------------------------------------

  const destinationCities = useMemo(() => {
    return locations.filter((city) => city !== form.from);
  }, [form.from]);

  // ----------------------------------------------------------
  // Update form field
  // ----------------------------------------------------------

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

  // ----------------------------------------------------------
  // Swap FROM / TO
  // ----------------------------------------------------------

  const handleSwap = () => {
    if (!form.from && !form.to) return;

    setForm((previous) => ({
      ...previous,
      from: previous.to,
      to: previous.from,
    }));

    setErrors({});
  };

  // ----------------------------------------------------------
  // Search trains
  // ----------------------------------------------------------

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateSearch(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setSearchCriteria(form);
      setLoading(false);
      navigate("/trains");
    }, 900);
  };

  // ----------------------------------------------------------
  // Today's date
  // ----------------------------------------------------------

  const today = new Date().toISOString().split("T")[0];

  // ----------------------------------------------------------
  // Route selected?
  // ----------------------------------------------------------

  const routeReady = form.from && form.to;

  return (
    <section className="search-section">

      {/* =====================================================
          Background decoration
      ====================================================== */}

      <div className="search-orb search-orb-one" />
      <div className="search-orb search-orb-two" />

      <div className="search-card">

        {/* ===================================================
            Top decorative line
        ==================================================== */}

        <div className="search-card-glow" />

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="search-heading">

          <div className="search-heading-content">

            <div className="search-eyebrow">
              <span className="eyebrow-line" />
              <Sparkles size={14} />
              PLAN YOUR JOURNEY
            </div>

            <h2>
              Find your
              <span> perfect train.</span>
            </h2>

            <p>
              Choose your route, pick your date,
              and let the journey begin.
            </p>

          </div>

          <div className="search-number-wrapper">
            <div className="search-number">01</div>
            <span>SEARCH</span>
          </div>

        </div>


        {/* ===================================================
            ROUTE PREVIEW
        ==================================================== */}

        {routeReady && (
          <div className="route-preview">

            <div className="route-preview-left">

              <div className="route-icon">
                <TrainFront size={17} />
              </div>

              <div>
                <span>Your journey</span>

                <strong>
                  {form.from}
                  <b> → </b>
                  {form.to}
                </strong>
              </div>

            </div>

            <div className="route-preview-state">

              <span>
                {cityStates?.[form.from] || "India"}
              </span>

              <ArrowLeftRight size={15} />

              <span>
                {cityStates?.[form.to] || "India"}
              </span>

            </div>

          </div>
        )}


        {/* ===================================================
            SEARCH FORM
        ==================================================== */}

        <form
          onSubmit={handleSubmit}
          className="search-form"
        >

          {/* =================================================
              FROM
          ================================================== */}

          <div
            className={`field ${
              errors.from ? "field-error" : ""
            } ${
              focusedField === "from"
                ? "field-focused"
                : ""
            }`}
          >

            <label htmlFor="from">
              <span className="field-index">01</span>
              FROM
            </label>

            <div className="input-wrapper">

              <div className="input-icon">
                <MapPin size={19} />
              </div>

              <select
                id="from"
                value={form.from}
                onChange={(event) =>
                  updateField(
                    "from",
                    event.target.value
                  )
                }
                onFocus={() => setFocusedField("from")}
                onBlur={() => setFocusedField("")}
              >
                <option value="">
                  Departure city
                </option>

                {locations.map((city) => (
                  <option
                    key={city}
                    value={city}
                  >
                    {city}
                    {cityStates?.[city]
                      ? ` — ${cityStates[city]}`
                      : ""}
                  </option>
                ))}
              </select>

            </div>

            {form.from && (
              <div className="field-hint">
                <span className="status-dot" />
                {cityStates?.[form.from] || "India"}
              </div>
            )}

            {errors.from && (
              <small className="error-message">
                {errors.from}
              </small>
            )}

          </div>


          {/* =================================================
              SWAP BUTTON
          ================================================== */}

          <button
            type="button"
            className={`swap-button ${
              form.from && form.to
                ? "swap-active"
                : ""
            }`}
            onClick={handleSwap}
            aria-label="Swap departure and destination"
            title="Swap cities"
          >
            <ArrowLeftRight size={18} />
          </button>


          {/* =================================================
              TO
          ================================================== */}

          <div
            className={`field ${
              errors.to ? "field-error" : ""
            } ${
              focusedField === "to"
                ? "field-focused"
                : ""
            }`}
          >

            <label htmlFor="to">
              <span className="field-index">02</span>
              TO
            </label>

            <div className="input-wrapper">

              <div className="input-icon">
                <MapPin size={19} />
              </div>

              <select
                id="to"
                value={form.to}
                onChange={(event) =>
                  updateField(
                    "to",
                    event.target.value
                  )
                }
                onFocus={() => setFocusedField("to")}
                onBlur={() => setFocusedField("")}
              >
                <option value="">
                  Destination city
                </option>

                {destinationCities.map((city) => (
                  <option
                    key={city}
                    value={city}
                  >
                    {city}
                    {cityStates?.[city]
                      ? ` — ${cityStates[city]}`
                      : ""}
                  </option>
                ))}
              </select>

            </div>

            {form.to && (
              <div className="field-hint">
                <span className="status-dot" />
                {cityStates?.[form.to] || "India"}
              </div>
            )}

            {errors.to && (
              <small className="error-message">
                {errors.to}
              </small>
            )}

          </div>


          {/* =================================================
              DATE
          ================================================== */}

          <div
            className={`field ${
              errors.date ? "field-error" : ""
            } ${
              focusedField === "date"
                ? "field-focused"
                : ""
            }`}
          >

            <label htmlFor="travel-date">
              <span className="field-index">03</span>
              TRAVEL DATE
            </label>

            <div className="input-wrapper">

              <div className="input-icon">
                <CalendarDays size={19} />
              </div>

              <input
                id="travel-date"
                type="date"
                value={form.date}
                min={today}
                onChange={(event) =>
                  updateField(
                    "date",
                    event.target.value
                  )
                }
                onFocus={() => setFocusedField("date")}
                onBlur={() => setFocusedField("")}
              />

            </div>

            <div className="field-hint date-hint">
              <Clock3 size={12} />
              Select your departure date
            </div>

            {errors.date && (
              <small className="error-message">
                {errors.date}
              </small>
            )}

          </div>


          {/* =================================================
              SEARCH BUTTON
          ================================================== */}

          <button
            type="submit"
            className={`primary-button search-button ${
              loading ? "button-loading" : ""
            }`}
            disabled={loading}
          >

            {loading ? (
              <>
                <span className="spinner" />
                <span>Finding trains...</span>
              </>
            ) : (
              <>
                <span>Search Trains</span>

                <span className="search-button-icon">
                  <Search size={18} />
                </span>
              </>
            )}

          </button>

        </form>


        {/* ===================================================
            BOTTOM TRUST INFO
        ==================================================== */}

        <div className="search-footer">

          <div className="search-footer-item">
            <span className="footer-dot" />
            Real-time style search experience
          </div>

          <div className="search-footer-divider" />

          <div className="search-footer-item">
            <TrainFront size={14} />
            Multiple routes available
          </div>

          <div className="search-footer-divider" />

          <div className="search-footer-item">
            <Sparkles size={14} />
            Simple & effortless booking
          </div>

        </div>

      </div>

    </section>
  );
}

