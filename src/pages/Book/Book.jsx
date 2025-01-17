import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Book.css';

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
  });

  const [reservations, setReservations] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [editIndex, setEditIndex] = useState(null);

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

  const sendConfirmationEmail = (email, reservationDetails) => {
    const templateParams = {
      email: email,
      name: reservationDetails.name,
      date: reservationDetails.date,
      time: reservationDetails.time,
      guests: reservationDetails.guests,
    };

    emailjs
      .send(
        'service_aspd0dh', // Replace with your EmailJS service ID
        'template_kkiexoc', // Replace with your EmailJS template ID
        templateParams,
        'iacFzb6XlnHl6k1gz' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Reservation confirmation email sent successfully!');
        },
        (err) => {
          console.error('FAILED...', err);
          alert('Failed to send confirmation email.');
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isTimeTaken = reservations.some(
      (reservation, index) =>
        reservation.date === formData.date &&
        reservation.time === formData.time &&
        index !== editIndex
    );

    if (isTimeTaken) {
      setErrorMessage('Sorry, this time slot is already reserved. Please choose a different time.');
    } else {
      setErrorMessage('');

      if (editIndex !== null) {
        const updatedReservations = reservations.map((reservation, index) =>
          index === editIndex ? { ...formData } : reservation
        );
        setReservations(updatedReservations);
        setEditIndex(null);
      } else {
        setReservations([...reservations, { ...formData }]);
        sendConfirmationEmail(formData.email, formData); 
      }

      setFormData({
        name: '',
        email: '',
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
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
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
                <p>Email: {reservation.email}</p>
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
