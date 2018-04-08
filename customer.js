const _ = require("lodash");

const Customer = function(cash) {
  this.cash = cash;
  this.collection = [];
};

Customer.prototype.addRecord = function (record) {
  this.collection.push(record);
};

Customer.prototype.buyRecord = function (record, store) {
  if(this.cash >= record.price){
    store.sellRecord(record);
    this.collection.push(record);
    this.cash -= record.price;
  }
};

Customer.prototype.sellRecord = function (record, store) {
  _.remove(this.collection, record);
  this.cash += record.price;
  store.buyRecord(record);
};

module.exports = Customer;
