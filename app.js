const express = require('express');
const app = express();
const PORT = 5001;

app.get('/', (req, res) => {
  res.send('Hello from Node.js on Port 5001 in Docker!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
