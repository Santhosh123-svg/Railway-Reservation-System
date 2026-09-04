import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SearchProvider } from "./context/SearchContext";
import "./App.css";

import Home from "./pages/Home";
import Trains from "./pages/Trains";
import Booking from "./pages/Booking";
import BookingSuccess from "./pages/BookingSuccess";
import MyBooking from "./pages/MyBooking";
import CancellationSuccess from "./pages/CancellationSuccess";

export default function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trains" element={<Trains />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
          <Route path="/my-booking" element={<MyBooking />} />
          <Route
            path="/cancellation-success"
            element={<CancellationSuccess />}
          />
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
}