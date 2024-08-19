const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Define your routes here
router.get('/transactions', transactionController.getTransactions);
router.get('/statistics', transactionController.getStatistics);
router.get('/bar-chart-data', transactionController.getBarChartData);
router.get('/pie-chart-data', transactionController.getPieChartData);
router.get('/combined-data', transactionController.getCombinedData);

module.exports = router;
