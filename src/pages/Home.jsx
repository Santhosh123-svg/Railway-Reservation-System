import { useNavigate } from "react-router-dom";
import {
  Search,
  TicketCheck,
  TrainFront,
  ArrowRight,
  MapPin,
  Clock3,
  ShieldCheck,
  Zap,
  Route,
  Sparkles,
  UsersRound,
  BadgeCheck,
} from "lucide-react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SearchForm from "../components/SearchForm";

export default function Home() {
  const navigate = useNavigate();

  const popularRoutes = [
    {
      from: "Chennai",
      to: "Madurai",
      duration: "7h 40m",
      trains: "5+ trains",
    },
    {
      from: "Chennai",
      to: "Coimbatore",
      duration: "7h 45m",
      trains: "5+ trains",
    },
    {
      from: "Bengaluru",
      to: "Chennai",
      duration: "5h 00m",
      trains: "5+ trains",
    },
    {
      from: "Mumbai",
      to: "Delhi",
      duration: "15h 30m",
      trains: "5+ trains",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="home-page">
        {/* =====================================================
            HERO SECTION
        ====================================================== */}

        <HeroSection />

        {/* =====================================================
            SEARCH SECTION
        ====================================================== */}

        <SearchForm />

        {/* =====================================================
            EXPERIENCE SECTION
        ====================================================== */}

        <section className="experience-section">
          <div className="experience-bg-word">JOURNEY</div>

          <div className="experience-glow experience-glow-one" />
          <div className="experience-glow experience-glow-two" />

          <div className="experience-inner">
            <div className="experience-header">
              <div>
                <div className="section-kicker">
                  <span />
                  <Sparkles size={14} />
                  THE RAILRESERVE EXPERIENCE
                </div>

                <h2>
                  From search to ticket,
                  <br />
                  <span>everything feels effortless.</span>
                </h2>
              </div>

              <p className="experience-description">
                Plan your journey through a simple, fast and beautifully
                designed railway reservation experience.
              </p>
            </div>

            {/* ===============================
                PROCESS CARDS
            =============================== */}

            <div className="feature-grid">
              <article className="feature-card feature-card-one">
                <div className="feature-top">
                  <span className="feature-number">01</span>

                  <div className="feature-icon">
                    <Search size={21} />
                  </div>
                </div>

                <div className="feature-content">
                  <span className="feature-label">DISCOVER</span>

                  <h3>Search your route</h3>

                  <p>
                    Choose your departure, destination and travel date to find
                    trains available for your journey.
                  </p>
                </div>

                <div className="feature-bottom">
                  <span>Find trains</span>
                  <ArrowRight size={16} />
                </div>
              </article>

              <article className="feature-card feature-card-two">
                <div className="feature-top">
                  <span className="feature-number">02</span>

                  <div className="feature-icon">
                    <TicketCheck size={21} />
                  </div>
                </div>

                <div className="feature-content">
                  <span className="feature-label">RESERVE</span>

                  <h3>Choose your seat</h3>

                  <p>
                    Compare timings, seat availability, travel classes and
                    fares before confirming your booking.
                  </p>
                </div>

                <div className="feature-bottom">
                  <span>Reserve ticket</span>
                  <ArrowRight size={16} />
                </div>
              </article>

              <article className="feature-card feature-card-three">
                <div className="feature-top">
                  <span className="feature-number">03</span>

                  <div className="feature-icon">
                    <TrainFront size={21} />
                  </div>
                </div>

                <div className="feature-content">
                  <span className="feature-label">TRAVEL</span>

                  <h3>Journey confirmed</h3>

                  <p>
                    Receive your unique PNR, view your confirmed ticket and
                    manage your reservation whenever needed.
                  </p>
                </div>

                <div className="feature-bottom">
                  <span>Manage journey</span>
                  <ArrowRight size={16} />
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            POPULAR ROUTES
        ====================================================== */}

        <section className="popular-routes-section">
          <div className="popular-routes-inner">
            <div className="popular-heading">
              <div>
                <div className="section-kicker dark-kicker">
                  <span />
                  <Route size={14} />
                  EXPLORE INDIA
                </div>

                <h2>
                  Popular journeys,
                  <br />
                  <span>ready when you are.</span>
                </h2>
              </div>

              <p>
                Discover some of the most frequently travelled routes available
                through RailReserve.
              </p>
            </div>

            <div className="popular-route-grid">
              {popularRoutes.map((route, index) => (
                <article
                  className="popular-route-card"
                  key={`${route.from}-${route.to}`}
                >
                  <div className="popular-route-number">
                    0{index + 1}
                  </div>

                  <div className="popular-route-icon">
                    <TrainFront size={20} />
                  </div>

                  <div className="popular-route-main">
                    <div className="popular-city">
                      <span>FROM</span>
                      <strong>{route.from}</strong>
                    </div>

                    <div className="popular-route-line">
                      <span className="popular-dot" />
                      <div className="popular-line" />
                      <TrainFront size={16} />
                      <div className="popular-line" />
                      <span className="popular-dot" />
                    </div>

                    <div className="popular-city popular-city-right">
                      <span>TO</span>
                      <strong>{route.to}</strong>
                    </div>
                  </div>

                  <div className="popular-route-meta">
                    <div>
                      <Clock3 size={14} />
                      {route.duration}
                    </div>

                    <div>
                      <TicketCheck size={14} />
                      {route.trains}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button
              type="button"
              className="explore-routes-button"
              onClick={() => {
                window.scrollTo({
                  top: 450,
                  behavior: "smooth",
                });
              }}
            >
              Explore your route
              <ArrowRight size={17} />
            </button>
          </div>
        </section>

        {/* =====================================================
            WHY RAILRESERVE
        ====================================================== */}

        <section className="why-section">
          <div className="why-grid-overlay" />

          <div className="why-glow" />

          <div className="why-inner">
            <div className="why-left">
              <div className="section-kicker light-kicker">
                <span />
                <ShieldCheck size={14} />
                BUILT FOR SIMPLICITY
              </div>

              <h2>
                Railway booking,
                <br />
                <span>without the confusion.</span>
              </h2>

              <p>
                Every interaction is designed to feel clear and effortless —
                from choosing a train to receiving your confirmed PNR.
              </p>

              <button
                type="button"
                className="why-cta"
                onClick={() => {
                  window.scrollTo({
                    top: 420,
                    behavior: "smooth",
                  });
                }}
              >
                Start your journey
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="why-features">
              <div className="why-card">
                <div className="why-card-icon">
                  <Zap size={20} />
                </div>

                <div>
                  <h3>Fast booking flow</h3>

                  <p>
                    Search, select and confirm your railway ticket through a
                    clean booking process.
                  </p>
                </div>
              </div>

              <div className="why-card">
                <div className="why-card-icon">
                  <BadgeCheck size={20} />
                </div>

                <div>
                  <h3>Instant confirmation</h3>

                  <p>
                    Generate your unique PNR and receive a confirmed digital
                    railway ticket.
                  </p>
                </div>
              </div>

              <div className="why-card">
                <div className="why-card-icon">
                  <TicketCheck size={20} />
                </div>

                <div>
                  <h3>Booking management</h3>

                  <p>
                    View your booking anytime and cancel your ticket through a
                    simple confirmation flow.
                  </p>
                </div>
              </div>

              <div className="why-card">
                <div className="why-card-icon">
                  <UsersRound size={20} />
                </div>

                <div>
                  <h3>Passenger friendly</h3>

                  <p>
                    Clear forms, useful feedback and responsive design make the
                    experience easy on every device.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            STATS SECTION
        ====================================================== */}

        <section className="stats-section">
          <div className="stats-inner">
            <div className="stats-intro">
              <div className="section-kicker dark-kicker">
                <span />
                <MapPin size={14} />
                CONNECTING JOURNEYS
              </div>

              <h2>
                One platform.
                <br />
                <span>Many destinations.</span>
              </h2>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <strong>15+</strong>
                <span>Major Cities</span>
                <p>Popular destinations available across India.</p>
              </div>

              <div className="stat-card">
                <strong>5+</strong>
                <span>Trains Per Route</span>
                <p>Multiple journey choices for supported routes.</p>
              </div>

              <div className="stat-card">
                <strong>24/7</strong>
                <span>Booking Access</span>
                <p>Search and manage your demo reservation anytime.</p>
              </div>

              <div className="stat-card">
                <strong>1</strong>
                <span>Simple Experience</span>
                <p>Everything you need from search to cancellation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="home-cta-section">
          <div className="home-cta-glow home-cta-glow-one" />
          <div className="home-cta-glow home-cta-glow-two" />

          <div className="home-cta-track">
            <div className="home-cta-moving-train">
              <TrainFront size={28} />
            </div>
          </div>

          <div className="home-cta-content">
            <div className="cta-icon">
              <TrainFront size={24} />
            </div>

            <span>YOUR NEXT JOURNEY STARTS HERE</span>

            <h2>
              Ready to find
              <br />
              your next train?
            </h2>

            <p>
              Choose your destination and experience a faster, simpler way to
              reserve your railway journey.
            </p>

            <button
              type="button"
              className="cta-search-button"
              onClick={() => {
                window.scrollTo({
                  top: 400,
                  behavior: "smooth",
                });
              }}
            >
              <Search size={17} />
              Search Trains
              <ArrowRight size={17} />
            </button>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="footer premium-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              <TrainFront size={19} />
            </div>

            <div>
              <strong>
                Rail<span>Reserve</span>
              </strong>

              <p>A smarter railway reservation experience.</p>
            </div>
          </div>

          <div className="footer-links">
            <button onClick={() => navigate("/")}>Home</button>

            <button
              onClick={() => {
                window.scrollTo({
                  top: 400,
                  behavior: "smooth",
                });
              }}
            >
              Search Trains
            </button>

            <button onClick={() => navigate("/my-booking")}>
              My Booking
            </button>
          </div>

          <div className="footer-bottom">
            <span>
              © 2026 RailReserve
            </span>

            <span>
              Railway Reservation System Demo
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}