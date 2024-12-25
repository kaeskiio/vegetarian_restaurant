import React, { useState, useEffect } from 'react';
import './Book.css';

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
  });

  const [reservations, setReservations] = useState([]);
  const [errorMessage, setErrorMessage] = useState(''); 

  useEffect(() => {
    const savedReservations = localStorage.getItem('reservations');
    if (savedReservations) {
      setReservations(JSON.parse(savedReservations));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('reservations', JSON.stringify(reservations));
  }, [reservations]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isTimeTaken = reservations.some(
      (reservation) =>
        reservation.date === formData.date && reservation.time === formData.time
    );

    if (isTimeTaken) {
      setErrorMessage('Sorry, this time slot is already reserved. Please choose a different time.');
    } else {
      setErrorMessage('');

      setReservations([
        ...reservations,
        { ...formData },
      ]);

      setFormData({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: 1,
      });
    }
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

        {}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {}
        <div className="reservations-list">
          {reservations.length > 0 && <h3>Reservations:</h3>}
          {reservations.map((reservation, index) => (
            <div key={index} className="reservation-box">
              <h4>{reservation.name}</h4>
              <p>Phone: {reservation.phone}</p>
              <p>Date: {reservation.date}</p>
              <p>Time: {reservation.time}</p>
              <p>Guests: {reservation.guests}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Book;
