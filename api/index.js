require('dotenv').config();
const connectDB = require('./db/connect.js');

const express = require('express');
const app = express();

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(8000, () =>
            console.log(`Server is listening on port 8000...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();