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
///////////////////////////////////////////////////////////////////////////////////////////////
var assert = require('assert');
var Store = require('../store.js')

describe ('Store', function() {

  let store;

  beforeEach(function(){
    store= new Store("Alan's Record Boudoir", "Glasgow", 100);
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

});
