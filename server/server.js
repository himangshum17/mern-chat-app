const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();
const app = express();
app.use(cors());
const port = process.env.PORT;

connectDB();

const users = [
  { id: 1, name: 'Leanne Graham' },
  { id: 2, name: 'Ervin Howell' },
  { id: 3, name: 'Clementine Bauch' },
  { id: 4, name: 'Patricia Lebsack' },
  { id: 5, name: 'Chelsey Dietrich' },
  { id: 6, name: 'Mrs. Dennis Schulist' },
  { id: 7, name: 'Kurtis Weissnat' },
  { id: 8, name: 'Nicholas Runolfsdottir V' },
  { id: 9, name: 'Glenna Reichert' },
  { id: 10, name: 'Clementina DuBuque' },
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/users/:id', (req, res) => {
  const singleUser = users.find(user => user.id.toString() === req.params.id);
  res.send(singleUser);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
