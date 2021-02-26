const express = require('express');
const db = require('./models');
const transactionRoutes = require('./routes/transaction.routes');
require('dotenv').config();

const app = express();

db.sequelize.sync({ });

app.get('/', (_, res) => {
  res.status(200).json({
    message: 'Welcome',
    err: null,
  });
});

app.use(express.json());

app.use('/transaction', transactionRoutes);

const PORT = process.env.APP_PORT || 8000;
app.listen(PORT, () => {
  console.log(`Your app is running at port ${PORT}`);
});
