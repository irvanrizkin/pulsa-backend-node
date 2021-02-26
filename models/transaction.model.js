module.exports = (sequelize, Sequelize) => {
  const transaction = sequelize.define('transaction', {
    phone: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    operator: {
      type: Sequelize.STRING,
    },
    nominal: {
      type: Sequelize.INTEGER,
    },
  });
  return transaction;
};
