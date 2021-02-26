const db = require('../models');

const Transaction = db.transaction;

function createTransaction(req, res) {
  Transaction.create(req.body)
    .then((data) => res.status(200).send({ data }))
    .catch((err) => res.status(422).send({ err }));
}

function findAll(_, res) {
  Transaction.findAll()
    .then((data) => res.status(200).send({ data }))
    .catch((err) => res.status(422).send({ err }));
}

function findOne(req, res) {
  const { id } = req.params;
  Transaction.findByPk(id)
    .then((data) => res.status(200).send({ data }))
    .catch((err) => res.status(422).send({ err }));
}

module.exports = {
  createTransaction,
  findAll,
  findOne,
};
