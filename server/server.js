const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
dotenv.config();
const app = express();
app.use(cors());
const port = process.env.PORT;

connectDB();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/user', userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
