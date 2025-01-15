const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT || 5432,
});

app.get('/api/reservations', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM reservations');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.post('/api/reservations', async (req, res) => {
  const { name, phone, email, date, time, guests } = req.body;

  if (!name || !phone || !email || !date || !time || !guests) {
    return res.status(400).json({ error: 'Please fill in all fields' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO reservations (name, phone, email, date, time, guests) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [name, phone, email, date, time, guests]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Failed to create reservation');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
