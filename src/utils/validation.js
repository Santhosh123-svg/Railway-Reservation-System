export function validateSearch({ from, to, date }) {
  const errors = {};

  if (!from) {
    errors.from = "Please select your departure city.";
  }

  if (!to) {
    errors.to = "Please select your destination.";
  }

  if (from && to && from === to) {
    errors.to = "Departure and destination cannot be the same.";
  }

  if (!date) {
    errors.date = "Please select your travel date.";
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(`${date}T00:00:00`);

    if (selectedDate < today) {
      errors.date = "Please select a valid future travel date.";
    }
  }

  return errors;
}

export function validateBooking({
  name,
  age,
  gender,
  travelClass,
  mobile,
}) {
  const errors = {};

  if (!name.trim()) {
    errors.name = "Please enter passenger name.";
  } else if (name.trim().length < 2) {
    errors.name = "Name must contain at least 2 characters.";
  }

  const numericAge = Number(age);

  if (!age) {
    errors.age = "Please enter passenger age.";
  } else if (numericAge < 5 || numericAge > 100) {
    errors.age = "Age must be between 5 and 100.";
  }

  if (!gender) {
    errors.gender = "Please select gender.";
  }

  if (!travelClass) {
    errors.travelClass = "Please select travel class.";
  }

  if (!/^\d{10}$/.test(mobile)) {
    errors.mobile = "Please enter a valid 10-digit mobile number.";
  }

  return errors;
}