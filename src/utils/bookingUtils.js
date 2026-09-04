export function generatePNR() {
  const timestamp = Date.now().toString().slice(-7);
  const random = Math.floor(100 + Math.random() * 900);

  return `RR${timestamp}${random}`;
}

export function saveBooking(booking) {
  localStorage.setItem("railway_booking", JSON.stringify(booking));
}

export function getBooking() {
  try {
    const booking = localStorage.getItem("railway_booking");

    return booking ? JSON.parse(booking) : null;
  } catch {
    return null;
  }
}

export function cancelBooking() {
  const booking = getBooking();

  if (!booking) return null;

  const cancelledBooking = {
    ...booking,
    status: "CANCELLED",
  };

  saveBooking(cancelledBooking);

  return cancelledBooking;
}