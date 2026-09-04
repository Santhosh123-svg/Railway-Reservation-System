
// ============================================================
// RAILWAY RESERVATION SYSTEM - TRAIN DATA
// ============================================================
// Demo dataset for the Railway Reservation System.
//
// Supported major destinations:
// Chennai, Bengaluru, Hyderabad, Mumbai, Delhi, Kolkata,
// Pune, Ahmedabad, Jaipur, Lucknow, Bhopal, Kochi,
// Coimbatore, Madurai, Tiruchirappalli, Tirunelveli
//
// The data is intentionally structured so the frontend can
// search multiple routes and display multiple trains.
// ============================================================

export const trains = [

  // ==========================================================
  // CHENNAI → MADURAI
  // ==========================================================

  {
    id: "12635",
    number: "12635",
    name: "Vaigai Express",
    type: "Superfast",
    from: "Chennai",
    to: "Madurai",
    departure: "13:40",
    arrival: "21:20",
    duration: "07h 40m",
    class: "AC Chair Car",
    availableSeats: 42,
    fare: 480,
  },

  {
    id: "22671",
    number: "22671",
    name: "Tejas Express",
    type: "Premium",
    from: "Chennai",
    to: "Madurai",
    departure: "06:00",
    arrival: "13:15",
    duration: "07h 15m",
    class: "Executive Chair",
    availableSeats: 12,
    fare: 1250,
  },

  {
    id: "12637",
    number: "12637",
    name: "Pandian Express",
    type: "Superfast",
    from: "Chennai",
    to: "Madurai",
    departure: "21:40",
    arrival: "05:30",
    duration: "07h 50m",
    class: "Sleeper",
    availableSeats: 21,
    fare: 510,
  },

  {
    id: "16101",
    number: "16101",
    name: "Rameswaram Express",
    type: "Express",
    from: "Chennai",
    to: "Madurai",
    departure: "19:15",
    arrival: "04:45",
    duration: "09h 30m",
    class: "Sleeper",
    availableSeats: 35,
    fare: 430,
  },

  {
    id: "20683",
    number: "20683",
    name: "Chennai Madurai Vande Bharat",
    type: "Premium",
    from: "Chennai",
    to: "Madurai",
    departure: "05:15",
    arrival: "11:15",
    duration: "06h 00m",
    class: "AC Chair Car",
    availableSeats: 18,
    fare: 980,
  },


  // ==========================================================
  // CHENNAI → COIMBATORE
  // ==========================================================

  {
    id: "12671",
    number: "12671",
    name: "Nilgiri Express",
    type: "Superfast",
    from: "Chennai",
    to: "Coimbatore",
    departure: "21:05",
    arrival: "06:15",
    duration: "09h 10m",
    class: "Sleeper",
    availableSeats: 26,
    fare: 650,
  },

  {
    id: "12673",
    number: "12673",
    name: "Cheran Express",
    type: "Superfast",
    from: "Chennai",
    to: "Coimbatore",
    departure: "22:15",
    arrival: "06:00",
    duration: "07h 45m",
    class: "AC 2 Tier",
    availableSeats: 16,
    fare: 780,
  },

  {
    id: "20643",
    number: "20643",
    name: "Coimbatore Vande Bharat",
    type: "Premium",
    from: "Chennai",
    to: "Coimbatore",
    departure: "06:00",
    arrival: "11:50",
    duration: "05h 50m",
    class: "AC Chair Car",
    availableSeats: 24,
    fare: 920,
  },

  {
    id: "12675",
    number: "12675",
    name: "Kovai Express",
    type: "Superfast",
    from: "Chennai",
    to: "Coimbatore",
    departure: "14:30",
    arrival: "22:15",
    duration: "07h 45m",
    class: "Chair Car",
    availableSeats: 31,
    fare: 560,
  },

  {
    id: "22637",
    number: "22637",
    name: "West Coast Express",
    type: "Express",
    from: "Chennai",
    to: "Coimbatore",
    departure: "13:15",
    arrival: "21:30",
    duration: "08h 15m",
    class: "AC 3 Tier",
    availableSeats: 19,
    fare: 690,
  },


  // ==========================================================
  // CHENNAI → TRICHY
  // ==========================================================

  {
    id: "16127",
    number: "16127",
    name: "Guruvayur Express",
    type: "Express",
    from: "Chennai",
    to: "Trichy",
    departure: "08:25",
    arrival: "13:45",
    duration: "05h 20m",
    class: "Chair Car",
    availableSeats: 8,
    fare: 390,
  },

  {
    id: "12653",
    number: "12653",
    name: "Rockfort Express",
    type: "Express",
    from: "Chennai",
    to: "Trichy",
    departure: "23:30",
    arrival: "05:50",
    duration: "06h 20m",
    class: "Sleeper",
    availableSeats: 31,
    fare: 420,
  },

  {
    id: "20683",
    number: "20683",
    name: "Trichy Vande Bharat",
    type: "Premium",
    from: "Chennai",
    to: "Trichy",
    departure: "05:45",
    arrival: "10:15",
    duration: "04h 30m",
    class: "AC Chair Car",
    availableSeats: 28,
    fare: 850,
  },

  {
    id: "16855",
    number: "16855",
    name: "Chola Express",
    type: "Superfast",
    from: "Chennai",
    to: "Trichy",
    departure: "17:10",
    arrival: "22:30",
    duration: "05h 20m",
    class: "AC 3 Tier",
    availableSeats: 22,
    fare: 520,
  },

  {
    id: "22675",
    number: "22675",
    name: "Kaveri Express",
    type: "Superfast",
    from: "Chennai",
    to: "Trichy",
    departure: "07:00",
    arrival: "12:20",
    duration: "05h 20m",
    class: "AC 2 Tier",
    availableSeats: 14,
    fare: 680,
  },


  // ==========================================================
  // CHENNAI → BENGALURU
  // ==========================================================

  {
    id: "12609",
    number: "12609",
    name: "Mysuru Express",
    type: "Superfast",
    from: "Chennai",
    to: "Bengaluru",
    departure: "06:00",
    arrival: "11:00",
    duration: "05h 00m",
    class: "AC Chair Car",
    availableSeats: 18,
    fare: 540,
  },

  {
    id: "20607",
    number: "20607",
    name: "Mysuru Vande Bharat",
    type: "Premium",
    from: "Chennai",
    to: "Bengaluru",
    departure: "05:50",
    arrival: "10:00",
    duration: "04h 10m",
    class: "Executive Chair",
    availableSeats: 15,
    fare: 1050,
  },

  {
    id: "12607",
    number: "12607",
    name: "Lalbagh Express",
    type: "Superfast",
    from: "Chennai",
    to: "Bengaluru",
    departure: "15:30",
    arrival: "20:30",
    duration: "05h 00m",
    class: "Chair Car",
    availableSeats: 32,
    fare: 490,
  },

  {
    id: "12027",
    number: "12027",
    name: "Shatabdi Express",
    type: "Premium",
    from: "Chennai",
    to: "Bengaluru",
    departure: "05:40",
    arrival: "10:25",
    duration: "04h 45m",
    class: "Executive Chair",
    availableSeats: 11,
    fare: 1100,
  },

  {
    id: "12639",
    number: "12639",
    name: "Brindavan Express",
    type: "Superfast",
    from: "Chennai",
    to: "Bengaluru",
    departure: "07:50",
    arrival: "13:00",
    duration: "05h 10m",
    class: "Chair Car",
    availableSeats: 27,
    fare: 510,
  },


  // ==========================================================
  // CHENNAI → TIRUNELVELI
  // ==========================================================

  {
    id: "12631",
    number: "12631",
    name: "Nellai Express",
    type: "Superfast",
    from: "Chennai",
    to: "Tirunelveli",
    departure: "19:50",
    arrival: "06:35",
    duration: "10h 45m",
    class: "AC 3 Tier",
    availableSeats: 3,
    fare: 720,
  },

  {
    id: "12633",
    number: "12633",
    name: "Kanyakumari Express",
    type: "Superfast",
    from: "Chennai",
    to: "Tirunelveli",
    departure: "20:10",
    arrival: "08:10",
    duration: "12h 00m",
    class: "AC 3 Tier",
    availableSeats: 8,
    fare: 850,
  },

  {
    id: "20635",
    number: "20635",
    name: "Tirunelveli Vande Bharat",
    type: "Premium",
    from: "Chennai",
    to: "Tirunelveli",
    departure: "05:30",
    arrival: "13:15",
    duration: "07h 45m",
    class: "AC Chair Car",
    availableSeats: 20,
    fare: 1050,
  },

  {
    id: "12641",
    number: "12641",
    name: "Thamirabarani Express",
    type: "Express",
    from: "Chennai",
    to: "Tirunelveli",
    departure: "18:00",
    arrival: "06:30",
    duration: "12h 30m",
    class: "Sleeper",
    availableSeats: 29,
    fare: 560,
  },

  {
    id: "16845",
    number: "16845",
    name: "Ananthapuri Express",
    type: "Superfast",
    from: "Chennai",
    to: "Tirunelveli",
    departure: "21:00",
    arrival: "08:45",
    duration: "11h 45m",
    class: "AC 2 Tier",
    availableSeats: 17,
    fare: 790,
  },


  // ==========================================================
  // BENGALURU → CHENNAI
  // ==========================================================

  {
    id: "12608",
    number: "12608",
    name: "Lalbagh Express",
    type: "Superfast",
    from: "Bengaluru",
    to: "Chennai",
    departure: "06:00",
    arrival: "11:00",
    duration: "05h 00m",
    class: "Chair Car",
    availableSeats: 25,
    fare: 510,
  },

  {
    id: "12028",
    number: "12028",
    name: "Shatabdi Express",
    type: "Premium",
    from: "Bengaluru",
    to: "Chennai",
    departure: "16:00",
    arrival: "21:00",
    duration: "05h 00m",
    class: "Executive Chair",
    availableSeats: 16,
    fare: 1100,
  },

  {
    id: "12610",
    number: "12610",
    name: "Mysuru Express",
    type: "Superfast",
    from: "Bengaluru",
    to: "Chennai",
    departure: "13:30",
    arrival: "18:30",
    duration: "05h 00m",
    class: "AC Chair Car",
    availableSeats: 19,
    fare: 550,
  },

  {
    id: "20608",
    number: "20608",
    name: "Vande Bharat",
    type: "Premium",
    from: "Bengaluru",
    to: "Chennai",
    departure: "14:00",
    arrival: "18:20",
    duration: "04h 20m",
    class: "AC Chair Car",
    availableSeats: 21,
    fare: 980,
  },

  {
    id: "12640",
    number: "12640",
    name: "Brindavan Express",
    type: "Superfast",
    from: "Bengaluru",
    to: "Chennai",
    departure: "15:00",
    arrival: "20:15",
    duration: "05h 15m",
    class: "Chair Car",
    availableSeats: 34,
    fare: 490,
  },


  // ==========================================================
  // MUMBAI → DELHI
  // ==========================================================

  {
    id: "12951",
    number: "12951",
    name: "Mumbai Rajdhani",
    type: "Premium",
    from: "Mumbai",
    to: "Delhi",
    departure: "17:00",
    arrival: "08:30",
    duration: "15h 30m",
    class: "AC 2 Tier",
    availableSeats: 18,
    fare: 1850,
  },

  {
    id: "12953",
    number: "12953",
    name: "August Kranti Rajdhani",
    type: "Premium",
    from: "Mumbai",
    to: "Delhi",
    departure: "17:40",
    arrival: "10:00",
    duration: "16h 20m",
    class: "AC 2 Tier",
    availableSeats: 12,
    fare: 1950,
  },

  {
    id: "22221",
    number: "22221",
    name: "Mumbai Delhi Tejas",
    type: "Premium",
    from: "Mumbai",
    to: "Delhi",
    departure: "06:00",
    arrival: "19:30",
    duration: "13h 30m",
    class: "Executive Chair",
    availableSeats: 22,
    fare: 1700,
  },

  {
    id: "12925",
    number: "12925",
    name: "Paschim Express",
    type: "Superfast",
    from: "Mumbai",
    to: "Delhi",
    departure: "11:35",
    arrival: "09:15",
    duration: "21h 40m",
    class: "Sleeper",
    availableSeats: 41,
    fare: 850,
  },

  {
    id: "12909",
    number: "12909",
    name: "Garib Rath",
    type: "Superfast",
    from: "Mumbai",
    to: "Delhi",
    departure: "16:35",
    arrival: "09:00",
    duration: "16h 25m",
    class: "AC 3 Tier",
    availableSeats: 30,
    fare: 1050,
  },


  // ==========================================================
  // DELHI → MUMBAI
  // ==========================================================

  {
    id: "12952",
    number: "12952",
    name: "Mumbai Rajdhani",
    type: "Premium",
    from: "Delhi",
    to: "Mumbai",
    departure: "16:55",
    arrival: "08:35",
    duration: "15h 40m",
    class: "AC 2 Tier",
    availableSeats: 14,
    fare: 1850,
  },

  {
    id: "12954",
    number: "12954",
    name: "August Kranti Rajdhani",
    type: "Premium",
    from: "Delhi",
    to: "Mumbai",
    departure: "17:55",
    arrival: "10:15",
    duration: "16h 20m",
    class: "AC 2 Tier",
    availableSeats: 18,
    fare: 1920,
  },

  {
    id: "12926",
    number: "12926",
    name: "Paschim Express",
    type: "Superfast",
    from: "Delhi",
    to: "Mumbai",
    departure: "11:10",
    arrival: "09:00",
    duration: "21h 50m",
    class: "Sleeper",
    availableSeats: 37,
    fare: 860,
  },

  {
    id: "12910",
    number: "12910",
    name: "Garib Rath",
    type: "Superfast",
    from: "Delhi",
    to: "Mumbai",
    departure: "15:30",
    arrival: "08:10",
    duration: "16h 40m",
    class: "AC 3 Tier",
    availableSeats: 26,
    fare: 1020,
  },

  {
    id: "22222",
    number: "22222",
    name: "Mumbai Delhi Tejas",
    type: "Premium",
    from: "Delhi",
    to: "Mumbai",
    departure: "06:10",
    arrival: "19:30",
    duration: "13h 20m",
    class: "Executive Chair",
    availableSeats: 20,
    fare: 1720,
  },


  // ==========================================================
  // HYDERABAD → BENGALURU
  // ==========================================================

  {
    id: "12785",
    number: "12785",
    name: "Kacheguda Express",
    type: "Superfast",
    from: "Hyderabad",
    to: "Bengaluru",
    departure: "18:10",
    arrival: "06:00",
    duration: "11h 50m",
    class: "Sleeper",
    availableSeats: 35,
    fare: 620,
  },

  {
    id: "12787",
    number: "12787",
    name: "Vande Bharat",
    type: "Premium",
    from: "Hyderabad",
    to: "Bengaluru",
    departure: "06:00",
    arrival: "13:30",
    duration: "07h 30m",
    class: "AC Chair Car",
    availableSeats: 21,
    fare: 1050,
  },

  {
    id: "17011",
    number: "17011",
    name: "Hyderabad Express",
    type: "Express",
    from: "Hyderabad",
    to: "Bengaluru",
    departure: "20:30",
    arrival: "08:45",
    duration: "12h 15m",
    class: "AC 3 Tier",
    availableSeats: 18,
    fare: 780,
  },

  {
    id: "17603",
    number: "17603",
    name: "Kacheguda Express",
    type: "Express",
    from: "Hyderabad",
    to: "Bengaluru",
    departure: "22:00",
    arrival: "09:30",
    duration: "11h 30m",
    class: "Sleeper",
    availableSeats: 42,
    fare: 580,
  },

  {
    id: "12789",
    number: "12789",
    name: "South Express",
    type: "Superfast",
    from: "Hyderabad",
    to: "Bengaluru",
    departure: "07:30",
    arrival: "18:15",
    duration: "10h 45m",
    class: "AC 2 Tier",
    availableSeats: 15,
    fare: 890,
  },


  // ==========================================================
  // KOLKATA → DELHI
  // ==========================================================

  {
    id: "12301",
    number: "12301",
    name: "Howrah Rajdhani",
    type: "Premium",
    from: "Kolkata",
    to: "Delhi",
    departure: "16:55",
    arrival: "10:00",
    duration: "17h 05m",
    class: "AC 2 Tier",
    availableSeats: 17,
    fare: 1900,
  },

  {
    id: "12305",
    number: "12305",
    name: "Kolkata Rajdhani",
    type: "Premium",
    from: "Kolkata",
    to: "Delhi",
    departure: "14:05",
    arrival: "10:00",
    duration: "19h 55m",
    class: "AC 2 Tier",
    availableSeats: 22,
    fare: 1820,
  },

  {
    id: "12311",
    number: "12311",
    name: "Kalka Mail",
    type: "Superfast",
    from: "Kolkata",
    to: "Delhi",
    departure: "19:40",
    arrival: "07:40",
    duration: "36h 00m",
    class: "Sleeper",
    availableSeats: 38,
    fare: 920,
  },

  {
    id: "22823",
    number: "22823",
    name: "Bhubaneswar Rajdhani",
    type: "Premium",
    from: "Kolkata",
    to: "Delhi",
    departure: "10:45",
    arrival: "06:30",
    duration: "19h 45m",
    class: "AC 3 Tier",
    availableSeats: 19,
    fare: 1450,
  },

  {
    id: "12313",
    number: "12313",
    name: "Sealdah Rajdhani",
    type: "Premium",
    from: "Kolkata",
    to: "Delhi",
    departure: "16:50",
    arrival: "10:15",
    duration: "17h 25m",
    class: "AC 2 Tier",
    availableSeats: 13,
    fare: 1880,
  },


  // ==========================================================
  // PUNE → MUMBAI
  // ==========================================================

  {
    id: "12124",
    number: "12124",
    name: "Deccan Queen",
    type: "Superfast",
    from: "Pune",
    to: "Mumbai",
    departure: "07:15",
    arrival: "10:25",
    duration: "03h 10m",
    class: "AC Chair Car",
    availableSeats: 29,
    fare: 420,
  },

  {
    id: "12126",
    number: "12126",
    name: "Pragati Express",
    type: "Express",
    from: "Pune",
    to: "Mumbai",
    departure: "06:50",
    arrival: "10:05",
    duration: "03h 15m",
    class: "Chair Car",
    availableSeats: 35,
    fare: 350,
  },

  {
    id: "22106",
    number: "22106",
    name: "Indrayani Express",
    type: "Superfast",
    from: "Pune",
    to: "Mumbai",
    departure: "06:35",
    arrival: "09:50",
    duration: "03h 15m",
    class: "Chair Car",
    availableSeats: 31,
    fare: 360,
  },

  {
    id: "12128",
    number: "12128",
    name: "Intercity Express",
    type: "Superfast",
    from: "Pune",
    to: "Mumbai",
    departure: "17:55",
    arrival: "21:20",
    duration: "03h 25m",
    class: "AC Chair Car",
    availableSeats: 18,
    fare: 440,
  },

  {
    id: "11010",
    number: "11010",
    name: "Sinhagad Express",
    type: "Express",
    from: "Pune",
    to: "Mumbai",
    departure: "09:00",
    arrival: "12:25",
    duration: "03h 25m",
    class: "Sleeper",
    availableSeats: 45,
    fare: 300,
  },


  // ==========================================================
  // AHMEDABAD → MUMBAI
  // ==========================================================

  {
    id: "12901",
    number: "12901",
    name: "Gujarat Mail",
    type: "Superfast",
    from: "Ahmedabad",
    to: "Mumbai",
    departure: "22:00",
    arrival: "06:40",
    duration: "08h 40m",
    class: "Sleeper",
    availableSeats: 40,
    fare: 620,
  },

  {
    id: "12931",
    number: "12931",
    name: "Mumbai Double Decker",
    type: "Premium",
    from: "Ahmedabad",
    to: "Mumbai",
    departure: "06:00",
    arrival: "13:00",
    duration: "07h 00m",
    class: "AC Chair Car",
    availableSeats: 26,
    fare: 750,
  },

  {
    id: "22953",
    number: "22953",
    name: "Gujarat Express",
    type: "Express",
    from: "Ahmedabad",
    to: "Mumbai",
    departure: "06:30",
    arrival: "13:20",
    duration: "06h 50m",
    class: "Chair Car",
    availableSeats: 33,
    fare: 480,
  },

  {
    id: "12010",
    number: "12010",
    name: "Shatabdi Express",
    type: "Premium",
    from: "Ahmedabad",
    to: "Mumbai",
    departure: "15:30",
    arrival: "21:45",
    duration: "06h 15m",
    class: "Executive Chair",
    availableSeats: 14,
    fare: 1150,
  },

  {
    id: "12934",
    number: "12934",
    name: "Karnavati Express",
    type: "Superfast",
    from: "Ahmedabad",
    to: "Mumbai",
    departure: "16:00",
    arrival: "22:30",
    duration: "06h 30m",
    class: "AC 3 Tier",
    availableSeats: 20,
    fare: 690,
  },


  // ==========================================================
  // JAIPUR → DELHI
  // ==========================================================

  {
    id: "12985",
    number: "12985",
    name: "Double Decker Express",
    type: "Superfast",
    from: "Jaipur",
    to: "Delhi",
    departure: "06:00",
    arrival: "10:30",
    duration: "04h 30m",
    class: "AC Chair Car",
    availableSeats: 32,
    fare: 520,
  },

  {
    id: "12016",
    number: "12016",
    name: "Ajmer Shatabdi",
    type: "Premium",
    from: "Jaipur",
    to: "Delhi",
    departure: "06:10",
    arrival: "10:40",
    duration: "04h 30m",
    class: "Executive Chair",
    availableSeats: 18,
    fare: 980,
  },

  {
    id: "12916",
    number: "12916",
    name: "Ashram Express",
    type: "Superfast",
    from: "Jaipur",
    to: "Delhi",
    departure: "18:00",
    arrival: "23:45",
    duration: "05h 45m",
    class: "Sleeper",
    availableSeats: 36,
    fare: 430,
  },

  {
    id: "22996",
    number: "22996",
    name: "Maharaja Express",
    type: "Express",
    from: "Jaipur",
    to: "Delhi",
    departure: "15:20",
    arrival: "20:30",
    duration: "05h 10m",
    class: "AC 3 Tier",
    availableSeats: 24,
    fare: 620,
  },

  {
    id: "12414",
    number: "12414",
    name: "Pooja Express",
    type: "Superfast",
    from: "Jaipur",
    to: "Delhi",
    departure: "21:00",
    arrival: "03:30",
    duration: "06h 30m",
    class: "AC 2 Tier",
    availableSeats: 15,
    fare: 780,
  },


  // ==========================================================
  // LUCKNOW → DELHI
  // ==========================================================

  {
    id: "12004",
    number: "12004",
    name: "Lucknow Swarna Shatabdi",
    type: "Premium",
    from: "Lucknow",
    to: "Delhi",
    departure: "15:30",
    arrival: "22:00",
    duration: "06h 30m",
    class: "Executive Chair",
    availableSeats: 20,
    fare: 1050,
  },

  {
    id: "12430",
    number: "12430",
    name: "Lucknow Mail",
    type: "Superfast",
    from: "Lucknow",
    to: "Delhi",
    departure: "22:00",
    arrival: "06:30",
    duration: "08h 30m",
    class: "Sleeper",
    availableSeats: 43,
    fare: 510,
  },

  {
    id: "12230",
    number: "12230",
    name: "Lucknow Mail",
    type: "Superfast",
    from: "Lucknow",
    to: "Delhi",
    departure: "20:00",
    arrival: "05:00",
    duration: "09h 00m",
    class: "AC 3 Tier",
    availableSeats: 22,
    fare: 720,
  },

  {
    id: "12583",
    number: "12583",
    name: "Lucknow Anand Vihar",
    type: "Express",
    from: "Lucknow",
    to: "Delhi",
    departure: "07:30",
    arrival: "15:00",
    duration: "07h 30m",
    class: "AC Chair Car",
    availableSeats: 27,
    fare: 840,
  },

  {
    id: "12225",
    number: "12225",
    name: "Kaifiyat Express",
    type: "Superfast",
    from: "Lucknow",
    to: "Delhi",
    departure: "23:30",
    arrival: "07:00",
    duration: "07h 30m",
    class: "AC 2 Tier",
    availableSeats: 16,
    fare: 820,
  },


  // ==========================================================
  // BHOPAL → DELHI
  // ==========================================================

  {
    id: "12001",
    number: "12001",
    name: "Bhopal Shatabdi",
    type: "Premium",
    from: "Bhopal",
    to: "Delhi",
    departure: "05:55",
    arrival: "14:00",
    duration: "08h 05m",
    class: "Executive Chair",
    availableSeats: 17,
    fare: 1250,
  },

  {
    id: "12155",
    number: "12155",
    name: "Bhopal Express",
    type: "Superfast",
    from: "Bhopal",
    to: "Delhi",
    departure: "21:00",
    arrival: "06:45",
    duration: "09h 45m",
    class: "AC 3 Tier",
    availableSeats: 25,
    fare: 850,
  },

  {
    id: "12625",
    number: "12625",
    name: "Kerala Express",
    type: "Superfast",
    from: "Bhopal",
    to: "Delhi",
    departure: "18:00",
    arrival: "06:00",
    duration: "12h 00m",
    class: "Sleeper",
    availableSeats: 38,
    fare: 680,
  },

  {
    id: "11077",
    number: "11077",
    name: "Jhelum Express",
    type: "Express",
    from: "Bhopal",
    to: "Delhi",
    departure: "16:30",
    arrival: "04:30",
    duration: "12h 00m",
    class: "Sleeper",
    availableSeats: 42,
    fare: 620,
  },

  {
    id: "22181",
    number: "22181",
    name: "Bhopal Vande Bharat",
    type: "Premium",
    from: "Bhopal",
    to: "Delhi",
    departure: "06:15",
    arrival: "13:45",
    duration: "07h 30m",
    class: "AC Chair Car",
    availableSeats: 19,
    fare: 1180,
  },


  // ==========================================================
  // KOCHI → CHENNAI
  // ==========================================================

  {
    id: "12624",
    number: "12624",
    name: "Chennai Mail",
    type: "Superfast",
    from: "Kochi",
    to: "Chennai",
    departure: "13:10",
    arrival: "05:30",
    duration: "16h 20m",
    class: "Sleeper",
    availableSeats: 37,
    fare: 650,
  },

  {
    id: "12697",
    number: "12697",
    name: "Intercity Express",
    type: "Express",
    from: "Kochi",
    to: "Chennai",
    departure: "06:00",
    arrival: "16:00",
    duration: "10h 00m",
    class: "AC Chair Car",
    availableSeats: 23,
    fare: 780,
  },

  {
    id: "20642",
    number: "20642",
    name: "Chennai Vande Bharat",
    type: "Premium",
    from: "Kochi",
    to: "Chennai",
    departure: "05:00",
    arrival: "13:00",
    duration: "08h 00m",
    class: "AC Chair Car",
    availableSeats: 16,
    fare: 1050,
  },

  {
    id: "12644",
    number: "12644",
    name: "Ernakulam Express",
    type: "Superfast",
    from: "Kochi",
    to: "Chennai",
    departure: "19:00",
    arrival: "08:30",
    duration: "13h 30m",
    class: "AC 3 Tier",
    availableSeats: 28,
    fare: 820,
  },

  {
    id: "16823",
    number: "16823",
    name: "Ananthapuri Express",
    type: "Express",
    from: "Kochi",
    to: "Chennai",
    departure: "21:30",
    arrival: "10:30",
    duration: "13h 00m",
    class: "Sleeper",
    availableSeats: 40,
    fare: 590,
  },


  // ==========================================================
  // COIMBATORE → CHENNAI
  // ==========================================================

  {
    id: "12674",
    number: "12674",
    name: "Cheran Express",
    type: "Superfast",
    from: "Coimbatore",
    to: "Chennai",
    departure: "22:15",
    arrival: "06:00",
    duration: "07h 45m",
    class: "AC 2 Tier",
    availableSeats: 16,
    fare: 780,
  },

  {
    id: "12676",
    number: "12676",
    name: "Kovai Express",
    type: "Superfast",
    from: "Coimbatore",
    to: "Chennai",
    departure: "06:15",
    arrival: "14:00",
    duration: "07h 45m",
    class: "Chair Car",
    availableSeats: 29,
    fare: 560,
  },

  {
    id: "20644",
    number: "20644",
    name: "Vande Bharat",
    type: "Premium",
    from: "Coimbatore",
    to: "Chennai",
    departure: "14:00",
    arrival: "20:00",
    duration: "06h 00m",
    class: "AC Chair Car",
    availableSeats: 18,
    fare: 920,
  },

  {
    id: "12680",
    number: "12680",
    name: "Intercity Express",
    type: "Express",
    from: "Coimbatore",
    to: "Chennai",
    departure: "05:30",
    arrival: "13:45",
    duration: "08h 15m",
    class: "AC 3 Tier",
    availableSeats: 24,
    fare: 690,
  },

  {
    id: "22638",
    number: "22638",
    name: "West Coast Express",
    type: "Superfast",
    from: "Coimbatore",
    to: "Chennai",
    departure: "15:30",
    arrival: "23:30",
    duration: "08h 00m",
    class: "Sleeper",
    availableSeats: 35,
    fare: 520,
  },


  // ==========================================================
  // MADURAI → CHENNAI
  // ==========================================================

  {
    id: "12636",
    number: "12636",
    name: "Vaigai Express",
    type: "Superfast",
    from: "Madurai",
    to: "Chennai",
    departure: "07:00",
    arrival: "14:45",
    duration: "07h 45m",
    class: "AC Chair Car",
    availableSeats: 35,
    fare: 480,
  },

  {
    id: "12638",
    number: "12638",
    name: "Pandian Express",
    type: "Superfast",
    from: "Madurai",
    to: "Chennai",
    departure: "21:00",
    arrival: "05:00",
    duration: "08h 00m",
    class: "Sleeper",
    availableSeats: 27,
    fare: 510,
  },

  {
    id: "22672",
    number: "22672",
    name: "Tejas Express",
    type: "Premium",
    from: "Madurai",
    to: "Chennai",
    departure: "15:00",
    arrival: "22:15",
    duration: "07h 15m",
    class: "Executive Chair",
    availableSeats: 13,
    fare: 1250,
  },

  {
    id: "20684",
    number: "20684",
    name: "Madurai Vande Bharat",
    type: "Premium",
    from: "Madurai",
    to: "Chennai",
    departure: "14:00",
    arrival: "20:00",
    duration: "06h 00m",
    class: "AC Chair Car",
    availableSeats: 22,
    fare: 980,
  },

  {
    id: "16102",
    number: "16102",
    name: "Rameswaram Express",
    type: "Express",
    from: "Madurai",
    to: "Chennai",
    departure: "19:30",
    arrival: "05:15",
    duration: "09h 45m",
    class: "Sleeper",
    availableSeats: 39,
    fare: 430,
  },


  // ==========================================================
  // TRICHY → CHENNAI
  // ==========================================================

  {
    id: "12654",
    number: "12654",
    name: "Rockfort Express",
    type: "Express",
    from: "Trichy",
    to: "Chennai",
    departure: "23:00",
    arrival: "05:30",
    duration: "06h 30m",
    class: "Sleeper",
    availableSeats: 32,
    fare: 420,
  },

  {
    id: "16128",
    number: "16128",
    name: "Guruvayur Express",
    type: "Express",
    from: "Trichy",
    to: "Chennai",
    departure: "14:00",
    arrival: "19:20",
    duration: "05h 20m",
    class: "Chair Car",
    availableSeats: 24,
    fare: 390,
  },

  {
    id: "20684",
    number: "20684",
    name: "Trichy Vande Bharat",
    type: "Premium",
    from: "Trichy",
    to: "Chennai",
    departure: "16:00",
    arrival: "20:30",
    duration: "04h 30m",
    class: "AC Chair Car",
    availableSeats: 17,
    fare: 850,
  },

  {
    id: "16856",
    number: "16856",
    name: "Chola Express",
    type: "Superfast",
    from: "Trichy",
    to: "Chennai",
    departure: "06:00",
    arrival: "11:30",
    duration: "05h 30m",
    class: "AC 3 Tier",
    availableSeats: 21,
    fare: 520,
  },

  {
    id: "22676",
    number: "22676",
    name: "Kaveri Express",
    type: "Superfast",
    from: "Trichy",
    to: "Chennai",
    departure: "13:00",
    arrival: "18:20",
    duration: "05h 20m",
    class: "AC 2 Tier",
    availableSeats: 15,
    fare: 680,
  },


  // ==========================================================
  // TIRUNELVELI → CHENNAI
  // ==========================================================

  {
    id: "12632",
    number: "12632",
    name: "Nellai Express",
    type: "Superfast",
    from: "Tirunelveli",
    to: "Chennai",
    departure: "20:30",
    arrival: "07:15",
    duration: "10h 45m",
    class: "AC 3 Tier",
    availableSeats: 11,
    fare: 720,
  },

  {
    id: "12634",
    number: "12634",
    name: "Kanyakumari Express",
    type: "Superfast",
    from: "Tirunelveli",
    to: "Chennai",
    departure: "19:30",
    arrival: "07:30",
    duration: "12h 00m",
    class: "AC 3 Tier",
    availableSeats: 19,
    fare: 850,
  },

  {
    id: "20636",
    number: "20636",
    name: "Tirunelveli Vande Bharat",
    type: "Premium",
    from: "Tirunelveli",
    to: "Chennai",
    departure: "14:30",
    arrival: "22:15",
    duration: "07h 45m",
    class: "AC Chair Car",
    availableSeats: 16,
    fare: 1050,
  },

  {
    id: "12642",
    number: "12642",
    name: "Thamirabarani Express",
    type: "Express",
    from: "Tirunelveli",
    to: "Chennai",
    departure: "17:30",
    arrival: "06:00",
    duration: "12h 30m",
    class: "Sleeper",
    availableSeats: 34,
    fare: 560,
  },

  {
    id: "16846",
    number: "16846",
    name: "Ananthapuri Express",
    type: "Superfast",
    from: "Tirunelveli",
    to: "Chennai",
    departure: "21:30",
    arrival: "09:15",
    duration: "11h 45m",
    class: "AC 2 Tier",
    availableSeats: 18,
    fare: 790,
  },

];


// ============================================================
// AVAILABLE LOCATIONS
// ============================================================
// Use these in SearchForm.jsx for the From / To dropdowns.

export const locations = [
  "Chennai",
  "Madurai",
  "Tiruchirappalli",
  "Coimbatore",
  "Tirunelveli",
  "Bengaluru",
  "Hyderabad",
  "Mumbai",
  "Delhi",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Bhopal",
  "Kochi",
];


// ============================================================
// CITY → STATE MAPPING
// ============================================================
// Useful later if you want the UI to show state names.

export const cityStates = {
  Chennai: "Tamil Nadu",
  Madurai: "Tamil Nadu",
  Tiruchirappalli: "Tamil Nadu",
  Coimbatore: "Tamil Nadu",
  Tirunelveli: "Tamil Nadu",
  Bengaluru: "Karnataka",
  Hyderabad: "Telangana",
  Mumbai: "Maharashtra",
  Delhi: "Delhi",
  Kolkata: "West Bengal",
  Pune: "Maharashtra",
  Ahmedabad: "Gujarat",
  Jaipur: "Rajasthan",
  Lucknow: "Uttar Pradesh",
  Bhopal: "Madhya Pradesh",
  Kochi: "Kerala",
};

