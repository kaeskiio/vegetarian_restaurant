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
  const [editIndex, setEditIndex] = useState(null); // To track which reservation is being edited

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
      (reservation, index) =>
        reservation.date === formData.date &&
        reservation.time === formData.time &&
        index !== editIndex // Exclude the currently edited reservation
    );

    if (isTimeTaken) {
      setErrorMessage('Sorry, this time slot is already reserved. Please choose a different time.');
    } else {
      setErrorMessage('');

      if (editIndex !== null) {
        // Update an existing reservation
        const updatedReservations = reservations.map((reservation, index) =>
          index === editIndex ? { ...formData } : reservation
        );
        setReservations(updatedReservations);
        setEditIndex(null); // Reset edit mode
      } else {
        // Add a new reservation
        setReservations([...reservations, { ...formData }]);
      }

      setFormData({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: 1,
      });
    }
  };

  const handleEdit = (index) => {
    setFormData(reservations[index]);
    setEditIndex(index);
  };

  const handleCancel = (index) => {
    const updatedReservations = reservations.filter((_, i) => i !== index);
    setReservations(updatedReservations);
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
          <button type="submit" className="custom__button">
            {editIndex !== null ? 'Update Reservation' : 'Reserve Table'}
          </button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="reservations-list">
          {reservations.length > 0 && <h3>Reservations:</h3>}
          <div className="p__opensans">
            {reservations.map((reservation, index) => (
              <div key={index} className="reservation-box">
                <h4>{reservation.name}</h4>
                <p>Phone: {reservation.phone}</p>
                <p>Date: {reservation.date}</p>
                <p>Time: {reservation.time}</p>
                <p>Guests: {reservation.guests}</p>
                <div className="reservation-actions">
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="cancel-button"
                    onClick={() => handleCancel(index)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
