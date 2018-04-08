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
// Create a Record object that has an Artist, Title, Genre, and Price
// Part B
// Create a method that prints out the Record's properties as a string.
///////////////////////////////////////////////////////////////////////////////////////////////

var assert = require('assert');
var Record = require('../record.js');

describe ('Record', function() {

  let record1;

  beforeEach(function(){
    record1 = new Record('Lana Del Ray', 'Summertime Sadness', 'Pop', 10);
  });

  it('has an Artist', function(){
    assert.strictEqual(record1.artist, 'Lana Del Ray');
  });

  it('has a Title', function(){
    assert.strictEqual(record1.title, 'Summertime Sadness');
  });

  it('has a Genre', function(){
    assert.strictEqual(record1.genre, 'Pop');
  });

  it('has a Price', function(){
    assert.strictEqual(record1.price, 10);
  });

  it('can print (return) all Record Properties as a string', function(){
    assert.strictEqual(record1.printDetails(), 'Lana Del Ray, Summertime Sadness, Pop, £10');
  });

});
