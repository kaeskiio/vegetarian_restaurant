import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Book.css';

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
  });
  const [reservations, setReservations] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/reservations')
      .then((response) => {
        setReservations(response.data);
      })
      .catch((error) => {
        console.error('Error fetching reservations:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email || !formData.date || !formData.time || !formData.guests) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    axios
      .post('http://localhost:5001/api/reservations', formData)
      .then((response) => {
        setReservations([...reservations, response.data]);
        setFormData({ name: '', phone: '', email: '', date: '', time: '', guests: 1 });
        setErrorMessage('');
      })
      .catch((error) => {
        console.error('Error creating reservation:', error);
        setErrorMessage('Failed to create reservation');
      });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <div className="book-container">
      <h2>Table Reservation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="guests"
          min="1"
          value={formData.guests}
          onChange={handleChange}
          required
        />
        <button type="submit">Reserve Table</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="reservations-list">
        {reservations.length > 0 && <h3>Reservations:</h3>}
        {reservations.map((reservation) => (
          <div key={reservation.id} className="reservation-box">
            <h4>{reservation.name}</h4>
            <p>Phone: {reservation.phone}</p>
            <p>Email: {reservation.email}</p>
            <p>Date: {formatDate(reservation.date)}</p>
            <p>Time: {reservation.time}</p>
            <p>Guests: {reservation.guests}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
