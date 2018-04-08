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

var assert = require('assert');
var Customer = require('../customer.js');
var Store = require('../store.js');
var Record = require('../record.js');

describe ('Customer', function() {

  let customer1, store, record1, record2, record3, record4, record5, record6;

  beforeEach(function(){
    customer1 = new Customer(40);
    store= new Store("Alan's Record Boudoir", "Glasgow", 100);
    record1 = new Record('Lana Del Ray', 'Summertime Sadness', 'Pop', 10);
    record2 = new Record('Lana Del Ray', 'High by the Beach', 'Pop', 10);
    record3 = new Record('Lana Del Ray', 'Born to Die', 'Pop', 10);
    record4 = new Record('Mozart', 'Requiem', 'Classical', 20);
    record5 = new Record('Beethoven', 'Fur Elise', 'Classical', 15);
    record6 = new Record('Madonna', 'Broken', 'Pop', 10);
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
    store.addRecord(record4);
    store.addRecord(record5);
  });

  it('has cash', function(){
    assert.strictEqual(customer1.cash, 40);
  });

  it('can buy record and add it to customer collection/remove it from store which decreases customer cash/increases store balance', function(){
    customer1.buyRecord(record1, store);
    assert.deepStrictEqual(customer1.collection, [record1]);
    assert.deepStrictEqual(store.inventory, [record2, record3, record4, record5]);
    assert.strictEqual(customer1.cash, 30);
    assert.strictEqual(store.balance, 110);
  });

  it('can add record to collection, without buying it from the store', function(){
    customer1.addRecord(record6);
    assert.deepStrictEqual(customer1.collection, [record6]);
  });

  it('can sell record and remove it from customer collection/add it to store, which increases customer cash/decreases store balance', function(){
    customer1.addRecord(record6);
    customer1.sellRecord(record6, store);
    assert.deepStrictEqual(customer1.collection, []);
    assert.deepStrictEqual(store.inventory, [record1, record2, record3, record4, record5, record6]);
    assert.strictEqual(customer1.cash, 50);
    assert.strictEqual(store.balance, 90);
  });

  it('cannot buy record if customer does not have enough cash', function(){
    customer1.cash = 15;
    customer1.buyRecord(record1, store);
    assert.deepStrictEqual(customer1.collection, [record1]);
    assert.strictEqual(customer1.cash, 5);
    customer1.buyRecord(record2, store);
    assert.deepStrictEqual(customer1.collection, [record1]);
    assert.strictEqual(customer1.cash, 5);
  });

  xit('can view total value of customer collection', function(){

  });

  xit('can view total value of all records in customer collection of a given Genre', function(){

  });

  xit('can view most valuable record in their collection', function(){

  });

  xit('can sort records in collection by value, ascending or descending', function(){

  });

  xit('can compare the value of their collection with another record collector', function(){

  });

});
