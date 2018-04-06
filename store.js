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

module.exports = Store;
