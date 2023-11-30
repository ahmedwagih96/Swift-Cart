require('dotenv').config();
require("express-async-errors");
const connectDB = require('./db/connect.js');
const cors = require("cors");
const path = require('path');
const xss = require('xss-clean');
const hpp = require('hpp');
const express = require('express');
const { errorHandler } = require('./middleware/error.js');
const app = express();
app.use(express.json());
app.use(cors());

// Prevent XSS(Cross Site Scripting) Attacks
app.use(xss());
// Protect Http Param Pollution
app.use(hpp());

// Routes
app.use('/api/orders', require('./routes/order.route.js'))
app.use('/api/items', require('./routes/item.route.js'))

const staticPath = path.join(__dirname, '../client/dist');
app.use(express.static(staticPath));

// Error Handler Middleware
app.use(errorHandler);

app.get('*', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
})

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