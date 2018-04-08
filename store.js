const _ = require("lodash");

const Store = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
};

Store.prototype.addRecord = function (record) {
  this.inventory.push(record);
};

Store.prototype.listInventory = function (genre) {
  let list = "";
  let filteredInventory = [];
  if(genre){
    filteredInventory = _.filter(this.inventory, ['genre', genre]);
  }
  else{
    filteredInventory  = this.inventory;
  };
  for(record of filteredInventory){
    list += record.printDetails() + "\n";
  };
  return list;
};

Store.prototype.sellRecord = function (record) {
  // Both lodash options work and will mutate the original array:
  _.pull(this.inventory, record);
  // _.remove(this.inventory, record);
  this.balance += record.price;
};

Store.prototype.assetValue = function () {
  let assetValue = 0;
  for(record of this.inventory){
    assetValue += record.price;
  };
  return assetValue;
};

Store.prototype.totalValue = function () {
  return this.balance + this.assetValue();
};

module.exports = Store;
