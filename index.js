const express = require('express');
// instantiate express app
const app = express();
// bind to env port, or 5000 if not available
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send({ hi: 'there '});
});

app.listen(PORT);
