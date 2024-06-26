const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const dbConnection = require('./database/dbConnection'); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/recipeRoutes');

app.use('/api/auth' , authRoutes);
app.use('/api/recipes', recipeRoutes);

app.listen(process.env.PORT, async() => {
    await dbConnection.connect();
    console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;