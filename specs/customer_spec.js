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

describe ('Customer', function() {

  let customer, store, record1, record2, record3, record4, record5;

  beforeEach(function(){
    customer = new Customer(200);
    store= new Store("Alan's Record Boudoir", "Glasgow", 100);
    record1 = new Record('Lana Del Ray', 'Summertime Sadness', 'Pop', 10);
    record2 = new Record('Lana Del Ray', 'High by the Beach', 'Pop', 10);
    record3 = new Record('Lana Del Ray', 'Born to Die', 'Pop', 10);
    record4 = new Record('Mozart', 'Requiem', 'Classical', 20);
    record5 = new Record('Beethoven', 'Fur Elise', 'Classical', 15);
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
    store.addRecord(record4);
    store.addRecord(record5);
  });

  xit('has cash', function(){

  });

  xit('can buy record and add it to customer collection/remove it from store which decreases customer cash/increases store balance', function(){

  });

  xit('can sell record and remove it from customer collection/add it to store, which increases customer cash/decreases store balance', function(){

  });

  xit('cannot buy record if customer does not have enough cash', function(){

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
