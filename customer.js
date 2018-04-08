const _ = require("lodash");

const Customer = function(cash) {
  this.cash = cash;
  this.collection = [];
};

Customer.prototype.buyRecord = function (record, store) {
  store.sellRecord(record);
  this.collection.push(record);
  this.cash -= record.price;
};

module.exports = Customer;
