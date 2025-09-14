const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// App version (from package.json)
const { version } = require('./package.json');

// Environment (you can change to 'development' if needed)
const ENVIRONMENT = process.env.NODE_ENV || 'production';

// Middleware: log each request
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

// Home route: enhanced JSON response
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Welcome to My Express API 🚀',
    version: version,
    environment: ENVIRONMENT,
    available_routes: {
      home: '/',
      greet: '/api/greet',
      health: '/health'
    },
    server_time: new Date().toISOString(),
    note: 'Use /api/greet to get a friendly greeting and /health to check server status.'
  });
});

// JSON greet API
app.get('/api/greet', (req, res) => {
  res.json({
    status: 'success',
    message: 'Hello from Express API!',
    version: version,
    server_time: new Date().toISOString()
  });
});

// Health check route
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    version: version,
    server_time: new Date().toISOString()
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}, version ${version}`);
});
