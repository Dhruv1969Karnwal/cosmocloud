const express = require('express');
require('dotenv').config();  // This loads the .env file automatically
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

// Use Middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(cors({
  origin: '*',
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

const userRoutes = require('./routes/user-route');

app.use('/api', userRoutes);

// console.log(process.env.FRONTEND_URL)


app.get("/", (req, res) => 
  res.send(`<h1> Site is working, click <a href="${process.env.FRONTEND_URL}">here</a> to visit frontend.</h1>`)
);

module.exports = { app };
