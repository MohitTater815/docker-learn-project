const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

const filePath = path.join(__dirname, 'progress.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/progress', (req, res) => {
  const data = fs.readFileSync(filePath, 'utf8');
  res.json(JSON.parse(data));
});

app.post('/update-progress', (req, res) => {
  const { phase, item, checked } = req.body;
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  data[phase][item] = checked;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Roadmap server running at http://localhost:${PORT}`);
});
