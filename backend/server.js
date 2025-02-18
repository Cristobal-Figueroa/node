require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const path = require('path');

const app = express();

// CORS configuration for development and production
app.use(cors({
  origin: ['http://localhost:5173', 'https://goworq.codeclandresell.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Database connection
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Create table if it doesn't exist
const createTable = async () => {
  try {
    const connection = await pool.promise().getConnection();
    await connection.query(`
      CREATE TABLE IF NOT EXISTS items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT
      )
    `);
    connection.release();
    console.log('Table created or already exists');
  } catch (error) {
    console.error('Error creating table:', error);
  }
};

// Initialize database
createTable();

// API Routes
app.get('/api/items', async (req, res) => {
  try {
    const [rows] = await pool.promise().query('SELECT * FROM items');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ error: 'Error fetching items' });
  }
});

app.post('/api/items', async (req, res) => {
  const { name, description } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  try {
    const [result] = await pool.promise().query(
      'INSERT INTO items (name, description) VALUES (?, ?)',
      [name, description]
    );
    const [newItem] = await pool.promise().query(
      'SELECT * FROM items WHERE id = ?',
      [result.insertId]
    );
    res.status(201).json(newItem[0]);
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).json({ error: 'Error creating item' });
  }
});

app.put('/api/items/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  try {
    await pool.promise().query(
      'UPDATE items SET name = ?, description = ? WHERE id = ?',
      [name, description, id]
    );
    const [updatedItem] = await pool.promise().query(
      'SELECT * FROM items WHERE id = ?',
      [id]
    );
    if (updatedItem.length === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(updatedItem[0]);
  } catch (error) {
    console.error('Error updating item:', error);
    res.status(500).json({ error: 'Error updating item' });
  }
});

app.delete('/api/items/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.promise().query(
      'DELETE FROM items WHERE id = ?',
      [id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ error: 'Error deleting item' });
  }
});

// Serve frontend in production
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
