import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  res.json(['ABC', 'XYZ']);
});
app.listen(3333);
