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

Customer.prototype.collectionValue = function (genre) {
  let total = 0;
  let filteredCollection = [];
  if(genre){
    filteredCollection = _.filter(this.collection, ['genre', genre]);
  }
  else{
    filteredCollection  = this.collection;
  };
  for(record of filteredCollection){
    total += record.price;
  };
  return total;
};

Customer.prototype.mostValuableRecord = function () {
  let valuableRecord = this.collection[0];
  for(record of this.collection){
    if(record.price > valuableRecord.price){
      valuableRecord = record;
    };
  };
  return valuableRecord;
};

Customer.prototype.orderCollection = function (order) {
  if(order === null){
    order = 'asc';
  }
  return _.orderBy(this.collection, ['price'], [order]);
};

Customer.prototype.compare = function (customer) {
  if(this.collectionValue() > customer.collectionValue()){
    return "You have the most valuable collection";
  }else if(this.collectionValue() === customer.collectionValue()){
    return "Your collections are of equal value";
  }else{
    return "You do not have the most valuable collection";
  }
};

module.exports = Customer;
