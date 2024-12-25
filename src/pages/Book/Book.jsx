import React, { useState, useEffect } from 'react';
import './Book.css';

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 1
  });
  
  const [reservations, setReservations] = useState([]); // To store reservation data

  // Load reservation data from sessionStorage on page load
  useEffect(() => {
    const savedData = sessionStorage.getItem('reservations');
    if (savedData) {
      setReservations(JSON.parse(savedData));
    }
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save reservation to the state and sessionStorage
    const newReservation = { ...formData };
    const updatedReservations = [...reservations, newReservation];
    
    // Update reservations state
    setReservations(updatedReservations);
    
    // Save the updated reservations array in sessionStorage
    sessionStorage.setItem('reservations', JSON.stringify(updatedReservations));

    // Clear form data after submission
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: 1
    });
  };

  return (
    <div className="p__cormorant">
      <div className="book-container">
        <h2>Table Reservation</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="p__opensans"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="p__opensans"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            className="p__opensans"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <input
            className="p__opensans"
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
          <input
            className="p__opensans"
            type="number"
            name="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
            required
          />
          <button type="submit">Reserve Table</button>
        </form>
      </div>

      {/* Display reserved reservations */}
      <div className="reservations-list">
        {reservations.length > 0 && (
          <div>
            <h3>Current Reservations:</h3>
            {reservations.map((reservation, index) => (
              <div key={index} className="reservation-box">
                <h4>Reservation {index + 1}</h4>
                <p><strong>Name:</strong> {reservation.name}</p>
                <p><strong>Phone:</strong> {reservation.phone}</p>
                <p><strong>Date:</strong> {reservation.date}</p>
                <p><strong>Time:</strong> {reservation.time}</p>
                <p><strong>Guests:</strong> {reservation.guests}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
