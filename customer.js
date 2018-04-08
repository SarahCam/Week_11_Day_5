const _ = require("lodash");

const Customer = function(cash) {
  this.cash = cash;
  this.collection = [];
};

module.exports = Customer;
