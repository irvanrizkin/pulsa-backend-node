const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (_, res) => {
  res.status(200).json({
    message: 'Welcome',
    err: null,
  });
});

const PORT = process.env.APP_PORT || 8000;
app.listen(PORT, () => {
  console.log(`Your app is running at port ${PORT}`);
});
