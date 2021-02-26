const router = require('express').Router();
const transaction = require('../controllers/transaction.controller');

router.post('/add', transaction.createTransaction);

module.exports = router;
