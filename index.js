

// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Dockerized Node.js App!');
});

app.listen(4000, () => {
  console.log('Server running on http://localhost:3000');
});
