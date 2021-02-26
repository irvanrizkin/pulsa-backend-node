const router = require('express').Router();
const transaction = require('../controllers/transaction.controller');

router.post('/add', transaction.createTransaction);

router.get('/transactions', transaction.findAll);

module.exports = router;
