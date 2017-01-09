    
    /*
    * OOP --> ToDoList application
    */

    "use strict";

    class ToDoList {  

        constructor(listTitle) {
            if (typeof(listTitle) == 'undefined') {
                this.listTitle = 'Title';
            } else {
                this.listTitle = listTitle.toString();
            }

            this.listItems = [];
        }

        // this method checks if the list it empty
        isListEmpty() {
            let isEmpty = false;

            if (this.listItems.length === 0){
                 isEmpty = true;
            }
            
            return isEmpty;
        }

        // this method adds items to the created list
        addItemToList(itemToAdd) {
            let response;
        
            if (itemToAdd && (itemToAdd.toString().length > 0)) {
                itemToAdd = itemToAdd.toString();
                this.listItems.push(itemToAdd);
                response = 'Item added';
            } else {
                response = 'Item not added';
            }
            
            return response;
        }

        // this method displays the listItems that have been created
        getListItems() {
            let response;
            // console.log(this);

            if (!this.isListEmpty()) {   
                for (let i = 0; i < this.listItems.length; i++) {
                    response = (i + 1) + ". " + this.listItems[i]; 
                }
            } else {
                response = 'No List Items';
            }
            
            return response;
        }

        // this method displays the length of listItems
        getListItemsLength() {
            let response = this.listItems.length;

            if (response > 0) {
                response = response + " items";
            } else {
                response = response + " items";
            }

            return response;
        }

        // this method displays the content of the listItems at a particular index
        getListItemByIndex(listIndex) {
            let response = this.listItems[listIndex - 1]

            if (!response) {
                response = "index does not exist";
            }

            return response;
        }

        // empties the items on the list
        emptyList() {
            this.listItems.splice(0, this.listItems.length);
            let response = "List emptied";

            if (!this.isListEmpty) {
                response = 'Error, "List not emptied"'
            }

            return response;
        }

        // this method deletes the item of the list at a particular index
        deleteListItemAtIndex(listIndex) {
            this.listItems.splice((listIndex - 1), 1);
            return "Item deleted";
        }

        // this method edits the item of the list at a particular index
        editListItemAtIndex(listIndex, itemToReplaceWith) {
            this.listItems[listIndex - 1] = itemToReplaceWith.toString();
            return "Item edited and saved";
        }

    }

    module.exports.ToDoList = ToDoList;

    
