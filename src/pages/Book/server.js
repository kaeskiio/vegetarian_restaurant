// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());  // Enable CORS for all routes
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/vegetarian_restaurant', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Reservation Schema
const reservationSchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: String,
  time: String,
  guests: Number,
});

const Reservation = mongoose.model('Reservation', reservationSchema);

// Routes
app.post('/reserve', (req, res) => {
  const { name, phone, date, time, guests } = req.body;
  const newReservation = new Reservation({ name, phone, date, time, guests });

  newReservation.save()
    .then(() => res.status(200).json({ message: 'Reservation successful' }))
    .catch((err) => res.status(400).json({ error: 'Error saving reservation' }));
});

app.listen(5000, () => {
  console.log('Backend server is running on port 5000');
});
