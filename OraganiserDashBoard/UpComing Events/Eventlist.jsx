import React from "react";
import "./Eventlist.css";

function getRandomDate() {
  // ... (your existing code remains unchanged)
  const today = new Date();
  const randomDays = Math.floor(Math.random() * 90); // Random number of days in the next 90 days
  today.setDate(today.getDate() + randomDays);
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
  const yyyy = today.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
}

function getRandomLocation() {
  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Jaipur",
    "Ahmedabad",
    "Lucknow",
  ];
  // ... (your existing code remains unchanged)
}

function UpcomingWeddings() {
  const weddingCount = 5; // Number of upcoming weddings to display
  const weddings = [];

  for (let i = 0; i < weddingCount; i++) {
    const date = getRandomDate();
    const location = getRandomLocation();
    weddings.push(
      <div key={i} className="wedding-card">
        <h3>Upcoming Wedding #{i + 1}</h3>
        <p>Date: {date}</p>
        <p>Location: {location}, India</p>
      </div>
    );

    // Add horizontal line between wedding cards, except for the last one
    if (i < weddingCount - 1) {
      weddings.push(<hr key={`line-${i}`} className="horizontal-line" />);
    }
  }

  return (
    <div className="upcoming-weddings">
      <h2>Upcoming Events</h2>
      <br />
      {weddings}
    </div>
  );
}

export default UpcomingWeddings;
