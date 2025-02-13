const express = require('express');
const { resolve } = require('path');
require("dotenv").config();
const app = express();
const port = 3010;

app.use(express.static('static'));
const uri = process.env.MONGO_DB
const mongoose = require("mongoose")
mongoose
.connect(uri)
.then(()=>{console.log("Connect to database")})
.catch((err)=>console.log(err))

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
