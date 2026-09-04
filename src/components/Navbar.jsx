
import { NavLink } from "react-router-dom";
import {
  TrainFront,
  Menu,
  X,
  Search,
  Ticket,
  Home,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav className={`navbar ${open ? "navbar-open" : ""}`}>

        <div className="navbar-inner">

          {/* =================================================
              BRAND
          ================================================== */}

          <NavLink
            to="/"
            className="brand"
            onClick={closeMenu}
          >

            <div className="brand-icon-wrapper">

              <div className="brand-icon">
                <TrainFront size={22} strokeWidth={2.2} />
              </div>

              <span className="brand-pulse" />

            </div>

            <div className="brand-text">
              Rail<span>Reserve</span>
            </div>

          </NavLink>


          {/* =================================================
              DESKTOP / MOBILE NAV LINKS
          ================================================== */}

          <div
            className={`nav-links ${
              open ? "nav-open" : ""
            }`}
          >

            {/* HOME */}

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? "active" : ""
                }`
              }
              onClick={closeMenu}
            >

              <span className="nav-icon">
                <Home size={17} />
              </span>

              <span>Home</span>

              <ChevronRight
                className="mobile-nav-arrow"
                size={16}
              />

            </NavLink>


            {/* SEARCH TRAINS */}

            <NavLink
              to="/trains"
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? "active" : ""
                }`
              }
              onClick={closeMenu}
            >

              <span className="nav-icon">
                <Search size={17} />
              </span>

              <span>Search Trains</span>

              <ChevronRight
                className="mobile-nav-arrow"
                size={16}
              />

            </NavLink>


            {/* MY BOOKING */}

            <NavLink
              to="/my-booking"
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? "active" : ""
                }`
              }
              onClick={closeMenu}
            >

              <span className="nav-icon">
                <Ticket size={17} />
              </span>

              <span>My Booking</span>

              <ChevronRight
                className="mobile-nav-arrow"
                size={16}
              />

            </NavLink>

          </div>


          {/* =================================================
              RIGHT SIDE DESKTOP STATUS
          ================================================== */}

          <div className="navbar-status">

            <span className="status-indicator" />

            <span>Journey ready</span>

          </div>


          {/* =================================================
              HAMBURGER BUTTON
          ================================================== */}

          <button
            type="button"
            className={`menu-button ${
              open ? "menu-open" : ""
            }`}
            onClick={() => setOpen((previous) => !previous)}
            aria-label={
              open
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={open}
          >

            <span className="menu-icon">

              {open ? (
                <X
                  size={24}
                  strokeWidth={2}
                />
              ) : (
                <Menu
                  size={25}
                  strokeWidth={2}
                />
              )}

            </span>

          </button>

        </div>


        {/* ===================================================
            MOBILE MENU BACKDROP
        ==================================================== */}

        {open && (
          <button
            type="button"
            className="mobile-menu-backdrop"
            aria-label="Close menu"
            onClick={closeMenu}
          />
        )}

      </nav>
    </>
  );
}

