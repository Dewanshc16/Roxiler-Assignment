const mongoose = require('mongoose');

const productTransactionSchema = new mongoose.Schema({
    id: Number,
    title: String,
    price: Number,
    description: String,
    dateOfSale: Date,
    category: String,
    sold: Boolean
});

// Check if the model already exists before defining it
const ProductTransaction = mongoose.models.ProductTransaction || mongoose.model('ProductTransaction', productTransactionSchema);

module.exports = ProductTransaction;
