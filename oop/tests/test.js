
'use strict';

var ToDoList = require('../library.js').ToDoList;

describe("Class ToDoList Tests ", function () {

  describe("Case for instantiating the class without a value", function () {
    let myList = new ToDoList();

    it("should return 'Title' for myList.listTitle", function () {
      expect(myList.listTitle).toEqual('Title');
    });

  });

  describe("Case for instantiating the class with a value but without listItems", function () {
    let myList = new ToDoList("Andelabs");

    it("should return 'Andelabs' for myList.listTitle", function () {
      expect(myList.listTitle).toEqual('Andelabs');
    });

    it("should return true for myList.isListEmpty()", function () {
      expect(myList.isListEmpty()).toEqual(true);
    });

    it("should return 'Item added' for myList.addItemToList('Data Types lab')", function () {
      expect(myList.addItemToList('Data Types lab')).toEqual('Item added');
    });

  });

  describe("Case for instantiating the class with items added", function () {
    let myList = new ToDoList("Andelabs");
    myList.addItemToList('Data Types Lab');
    myList.addItemToList('OOP Lab');
    myList.addItemToList('Get Primes Lab');

    it("should return false for myList.isListEmpty()", function () {
      expect(myList.isListEmpty()).toEqual(false);
    });

    it("should return the length of list items for myList.getListItemsLength() e.g '3 items' for myList.getListItemsLength()", function () {
      expect(myList.getListItemsLength()).toEqual('3 items');
    });

    it("should return the last item of list for myList.getListItems() e.g '3. Get Primes Lab' for myList.getListItems()", function () {
      expect(myList.getListItems()).toEqual('3. Get Primes Lab');
    });

    it("should return the item at the index supplied for myList.getListItemByIndex(index) e.g 'OOP Lab' for myList.getListItemByIndex(2)", function () {
      expect(myList.getListItemByIndex(2)).toEqual('OOP Lab');
    });

    it("should return the edited item at the index supplied for myList.editListItemAtIndex(index, str2Replace) e.g 'Item edited and saved' for myList.editListItemAtIndex(1, 'You have been replaced')", function () {
      expect(myList.editListItemAtIndex(1, 'You have been replaced')).toEqual('Item edited and saved');
    });

    it("should return the 'Item deleted' and also delete the item at the index supplied for myList.deleteListItemAtIndex(index)", function () {
      expect(myList.deleteListItemAtIndex(2)).toEqual('Item deleted');
    });

    it("should return the 'List emptied' and also empty the entire list item for myList.emptyList()", function () {
      expect(myList.emptyList()).toEqual('List emptied');
    });

  });

});