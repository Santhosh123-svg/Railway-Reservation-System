
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  TrainFront,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Ticket,
  ArrowLeft,
} from "lucide-react";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail || !password) {
      setError("Please enter your email address and password.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    setLoading(true);

    const user = {
      email: cleanEmail,
      name: cleanEmail.split("@")[0],
      loggedInAt: new Date().toISOString(),
    };

    try {
      const storage = rememberMe ? localStorage : sessionStorage;

      storage.setItem("railreserve_user", JSON.stringify(user));

      // Navigate to Home after successful demo login.
      setTimeout(() => {
        navigate("/home", { replace: true });
      }, 500);
    } catch {
      setLoading(false);
      setError("Unable to save your login session. Please try again.");
    }
  };

  return (
    <main className="login-page">
      <div className="login-background-glow login-glow-one" />
      <div className="login-background-glow login-glow-two" />

      <header className="login-topbar">
        <Link to="/" className="login-brand" aria-label="RailReserve home">
          <span className="login-brand-icon">
            <TrainFront size={23} strokeWidth={2.2} />
          </span>

          <span>
            Rail<span className="login-brand-accent">Reserve</span>
          </span>
        </Link>

        <Link to="/" className="login-back-link">
          <ArrowLeft size={16} />
          <span>Back to home</span>
        </Link>
      </header>

      <section className="login-layout">
        <div className="login-intro">
          <div className="login-eyebrow">
            <span className="login-eyebrow-line" />
            YOUR JOURNEY STARTS HERE
          </div>

          <h1>
            Every journey
            <br />
            begins with <span>a login.</span>
          </h1>

          <p className="login-intro-description">
            Sign in to explore train routes, manage your bookings,
            and keep your travel details in one place.
          </p>

          <div className="login-benefits">
            <div className="login-benefit">
              <span className="login-benefit-icon">
                <Ticket size={20} />
              </span>

              <div>
                <strong>Manage your bookings</strong>
                <p>View your tickets and booking details.</p>
              </div>
            </div>

            <div className="login-benefit">
              <span className="login-benefit-icon">
                <ShieldCheck size={20} />
              </span>

              <div>
                <strong>A simpler travel experience</strong>
                <p>Keep your demo account details together.</p>
              </div>
            </div>
          </div>

          <div className="login-travel-note">
            <span className="login-note-dot" />
            A simpler way to plan your next journey.
          </div>
        </div>

        <div className="login-card">
          <div className="login-card-heading">
            <div className="login-card-icon">
              <LockKeyhole size={23} />
            </div>

            <span className="login-card-kicker">WELCOME BACK</span>

            <h2>Sign in</h2>

            <p>Enter your details to continue to RailReserve.</p>
          </div>

          <form className="login-form" onSubmit={handleLogin} noValidate>
            <div className="login-field">
              <label htmlFor="login-email">EMAIL ADDRESS</label>

              <div className="login-input-wrap">
                <Mail size={18} className="login-input-icon" />

                <input
                  id="login-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setError("");
                  }}
                  disabled={loading}
                  required
                />
              </div>
            </div>

            <div className="login-field">
              <div className="login-label-row">
                <label htmlFor="login-password">PASSWORD</label>
              </div>

              <div className="login-input-wrap">
                <LockKeyhole size={18} className="login-input-icon" />

                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setError("");
                  }}
                  disabled={loading}
                  required
                  minLength={6}
                />

                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={() => setShowPassword((previous) => !previous)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                  disabled={loading}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="login-options">
              <label className="login-remember">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                  disabled={loading}
                />
                <span>Remember me</span>
              </label>

              <span className="login-demo-label">DEMO ACCESS</span>
            </div>

            {error && (
              <div className="login-error" role="alert">
                <span className="login-error-mark">!</span>
                {error}
              </div>
            )}

            <button
              type="submit"
              className="login-submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="login-spinner" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <span className="login-submit-icon">
                    <ArrowRight size={18} />
                  </span>
                </>
              )}
            </button>
          </form>

          <div className="login-card-divider">
            <span />
            <span>RAILRESERVE</span>
            <span />
          </div>

          <p className="login-demo-notice">
            Demo login: enter a valid email and a password with at least
            6 characters. No account verification is performed.
          </p>
        </div>
      </section>

      <footer className="login-footer">
        <span>© {new Date().getFullYear()} RailReserve</span>
        <span className="login-footer-separator">•</span>
        <span>Plan your journey with ease.</span>
      </footer>
    </main>
  );
}
