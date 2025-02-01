const express = require('express');
const app = express();
app.use(express.json()); // Ensure this is BEFORE app.post
app.post('/user', (req, res) => {
  console.log(req.body); // req.body should now contain the parsed JSON
  res.send('OK');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});