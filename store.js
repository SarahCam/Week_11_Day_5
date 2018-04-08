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

Store.prototype.listInventory = function () {
  let list = "";
  for(record of this.inventory){
    list += record.printDetails() + "\n";
  }
  return list;
};

Store.prototype.sellRecord = function (record) {
  // Both lodash options work and will mutate the original array:
  _.pull(this.inventory, record);
  // _.remove(this.inventory, record);
  this.balance += record.price;
};

module.exports = Store;
