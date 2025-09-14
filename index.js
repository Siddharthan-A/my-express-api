const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 3000; 
 
app.get('/api/greet', (req, res) => { 
  res.json({ message: 'Hello from Express API!' }); 
}); 
 
app.listen(PORT, () => { 
  console.log(`Server listening on port ${PORT}`); 
}); 
