const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const ProductTransaction = require('./models/productTransaction');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Route to fetch and seed data
app.get('/api/init', async (req, res) => {
    try {
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const transactions = response.data;

        // Seed the database
        await ProductTransaction.insertMany(transactions);

        res.status(200).send('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding the database:', error);
        res.status(500).send('Failed to seed database');
    }
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Server running on  5002 port  ${PORT}`);
});
