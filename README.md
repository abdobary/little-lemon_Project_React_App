# React + Vite
# Little Lemon - Table Booking App

A React application for the Little Lemon Mediterranean restaurant 
that allows customers to reserve a table online.

## Project Description

Little Lemon is a family-owned Mediterranean restaurant in Chicago. 
This web app solves the problem of phone-only reservations by providing 
a fast, mobile-friendly table booking form that allows customers to 
reserve a table in under 60 seconds directly from their browser.

## Features

- Select available date and time slot
- Choose number of guests (1–10)
- Select seating preference (Indoor, Outdoor, Bar)
- Choose occasion type (Birthday, Date Night, Business, etc.)
- Form validation with error messages
- Personal information collection (name, email, phone)
- Booking confirmation screen with reference number
- Fully accessible with ARIA labels
- Responsive mobile-friendly design
- Dynamic time slots based on day of week

## Technologies Used

- React 18
- JavaScript (ES6+)
- HTML5
- CSS3
- useReducer Hook
- useState Hook

## How to Run the Project

### Prerequisites
- Node.js installed on your machine
- npm package manager
- Dont forget to extract node_modules.rar before starting OpenVSCode.bat

### Installation

1. Clone the repository:
```
git clone https://github.com/YOUR_USERNAME/little-lemon.git
```

2. Navigate to the project folder:
```
cd little-lemon
```

3. Install dependencies:
```
npm install
```

4. Start the development server:
```
npm start
```

5. Open your browser and go to:
```
http://localhost:3000
```

## How to Use

1. Select your preferred **date**
2. Choose an available **time slot**
3. Set the **number of guests**
4. Choose **seating preference**
5. Select an **occasion** (optional)
6. Click **Continue**
7. Fill in your **personal details**
8. Click **Confirm Booking**
9. Receive your **booking confirmation** with reference number

## Project Structure
```
little-lemon/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── LittleLemonBooking.jsx
│   └── index.js
├── README.md
└── package.json
```

## Key Functions

### initializeTimes()
Initializes the list of available time slots when the app loads.

### updateTimes(state, action)
Reducer function that updates available time slots based on 
the selected date. Weekends show fewer available slots to 
simulate real restaurant availability.

## Accessibility

This app is built with accessibility in mind:
- All form inputs have proper labels
- ARIA attributes on interactive elements
- aria-required on required fields
- aria-live regions for dynamic content
- aria-pressed on toggle buttons
- aria-label on all buttons

## Screenshots

Home / Booking Form:
- Step 1: Date, time, guests, seating, occasion
- Step 2: Personal information
- Step 3: Booking confirmation

## Author

Your Name  
Meta Front-End Developer Certificate  
Coursera — Little Lemon Capstone Project

## License

This project was created as part of the Meta Front-End 
Developer Professional Certificate on Coursera.
