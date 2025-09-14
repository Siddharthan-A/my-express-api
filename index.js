const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware: log each request
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

// Welcome route (returns JSON)
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Welcome to my Express API 🚀',
    available_routes: ['/', '/api/greet', '/health'],
    time: new Date().toISOString()
  });
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
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});
