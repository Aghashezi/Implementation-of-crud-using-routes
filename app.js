const express = require('express');
require("dotenv").config({path: "./.env"});
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors =require('cors');
//middlewares

app.use(cors());
app.use(bodyparser.json());

// import Route
const postRoute = require('./Routes/post');

app.use(bodyparser.json());
app.use('/post', postRoute);

// connect to DB here
const mongoURI = process.env.MONGOURI;
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to the database");
})
.catch((error) => {
    console.log("Error connecting to the database:", error);
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000.");
});
