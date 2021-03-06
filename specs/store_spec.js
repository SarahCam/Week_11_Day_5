///////////////////////////////////////////////////////////////////////////////////////////////
// Part A
// Create a Record object that has an Artist, Title, Genre, and Price
// Create a Record Store that has a Name, City and an Inventory.
// Give the Record Store a Balance.
// Add some Records to the Store's Inventory.
// Part B
// Create a method that prints out the Record's properties as a string.
// Create a method that lists the inventory.
// Create a method so the Record Store can sell a Record and adjusts the Store's
// balance to account for the Record being sold.
// Create a method that reports the financial situation of the Store, showing the
// balance and value of inventory.
// Create a method that allows the store to view all Records of a given Genre.
// Part C
// Create a RecordCollector (or Customer) constructor who can buy and sell records.
// The RecordCollector should have cash that increase and decreases with buying and selling.
// The RecordCollector shouldn't be able to buy a Record if he can't afford it.
// The RecordCollector should be able to view the total value of their collection
// The RecordCollector should be able to view the total value of all records of a given Genre
// The RecordCollector should be able to view their most valuable record.
// The RecordCollector should be able to sort their records by value. (ascending or descending)
// The RecordCollector should be able to compare the value of their collection with another
// RecordCollector
///////////////////////////////////////////////////////////////////////////////////////////////
// Part A
// Create a Record Store that has a Name, City and an Inventory.
// Give the Record Store a Balance.
// Add some Records to the Store's Inventory.
// Part B
// Create a method that lists the inventory.
// Create a method so the Record Store can sell a Record and adjusts the Store's
// balance to account for the Record being sold.
// Create a method that reports the financial situation of the Store, showing the
// balance and value of inventory.
// Create a method that allows the store to view all Records of a given Genre.
///////////////////////////////////////////////////////////////////////////////////////////////
var assert = require('assert');
var Store = require('../store.js');
var Record = require('../record.js');

describe ('Store', function() {

  let store, record1, record2, record3, record4, record5;

  beforeEach(function(){
    store= new Store("Alan's Record Boudoir", "Glasgow", 100);
    record1 = new Record('Lana Del Ray', 'Summertime Sadness', 'Pop', 10);
    record2 = new Record('Lana Del Ray', 'High by the Beach', 'Pop', 10);
    record3 = new Record('Lana Del Ray', 'Born to Die', 'Pop', 10);
    record4 = new Record('Mozart', 'Requiem', 'Classical', 20);
    record5 = new Record('Beethoven', 'Fur Elise', 'Classical', 15);
  });

  it('has a Name', function(){
    assert.strictEqual(store.name, "Alan's Record Boudoir");
  });

  it('has a City', function(){
    assert.strictEqual(store.city, "Glasgow");
  });

  it('has an Inventory', function(){
    assert.strictEqual(store.inventory.length, 0);
    assert.deepStrictEqual(store.inventory, []);
  });

  it('has a Balance', function(){
    assert.strictEqual(store.balance, 100);
  });

  it('can add a Record to the store Inventory', function(){
    store.addRecord(record1);
    assert.strictEqual(store.inventory.length, 1);
    assert.deepStrictEqual(store.inventory, [record1]);
  });

  it('can add several records to the store Inventory', function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
    assert.strictEqual(store.inventory.length, 3);
    assert.deepStrictEqual(store.inventory, [record1, record2, record3]);
  });

  it('can list the inventory', function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
    assert.strictEqual(store.listInventory(), 'Lana Del Ray, Summertime Sadness, Pop, £10\nLana Del Ray, High by the Beach, Pop, £10\nLana Del Ray, Born to Die, Pop, £10\n');
  });

  it('can sell a Record and adjust the Stores balance to account for the Record being sold', function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
    store.sellRecord(record1);
    assert.strictEqual(store.inventory.length, 2);
    assert.deepStrictEqual(store.inventory, [record2, record3]);
    assert.strictEqual(store.balance, 110);
  });

  it('can buy a Record and adjust the Stores balance to pay for the Record', function(){
    store.buyRecord(record4);
    assert.strictEqual(store.inventory.length, 1);
    assert.deepStrictEqual(store.inventory, [record4]);
    assert.strictEqual(store.balance, 80);
  });

  it('can report the financial situation (worth) of the Store, showing the balance and value of inventory', function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
    assert.strictEqual(store.balance, 100);
    assert.strictEqual(store.assetValue(), 30);
    assert.strictEqual(store.totalValue(), 130);
  });

  it('can view all Records of a given Genre', function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
    store.addRecord(record4);
    store.addRecord(record5);
    assert.strictEqual(store.listInventory('Classical'), 'Mozart, Requiem, Classical, £20\nBeethoven, Fur Elise, Classical, £15\n');
  });

});
