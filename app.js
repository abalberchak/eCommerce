const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


// Import Routes:
const userRoutes = require('./routes/user')

// App
const app = express()

// DB Connection:
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
    console.log('DB connection error: ${err.message}')
});

// Routes Middleware
app.use(userRoutes);

const port = process.env.PORT || 8000


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});