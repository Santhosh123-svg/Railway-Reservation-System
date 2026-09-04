import { TrainFront, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-grid" />

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="rail-track">
        <div className="moving-train">
          <TrainFront size={34} />
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="live-dot" />
          SMART RAILWAY RESERVATION
        </div>

        <h1>
          Your Journey
          <br />
          <span>Begins Here.</span>
        </h1>

        <p>
          Discover trains, reserve your seat and manage your journey
          through a beautifully simple railway experience.
        </p>

        <div className="hero-route">
          <div>
            <MapPin size={17} />
            Chennai
          </div>

          <div className="route-line">
            <span />
            <span />
            <span />
          </div>

          <div>
            <MapPin size={17} />
            Madurai
          </div>
        </div>
      </div>
    </section>
  );
}