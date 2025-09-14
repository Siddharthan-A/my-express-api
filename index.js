const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware: log each request
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

// Welcome route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to my Express API 🚀</h1><p>Use /api/greet or /health</p>');
});

// JSON greet API
app.get('/api/greet', (req, res) => {
  res.json({
    status: 'success',
    message: 'Hello from Express API!',
    time: new Date().toISOString()
  });
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});
