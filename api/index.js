require('dotenv').config();
const connectDB = require('./db/connect.js');
const cors = require("cors");
const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());
// Routes
app.use('/api/orders', require('./routes/order.route.js'))
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