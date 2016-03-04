/**
 * Created by mybook on 16/2/23.
 */
var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var ListStore = require('../stores/ListStore.js');

AppDispatcher.register(function (action) {

    switch(action.actionType) {
        case 'ADD_NEW_ITEM':
            ListStore.addNewItemHandler(action.text);
            ListStore.emitChange();
            break;
        default:
        // no op
    }
})

module.exports = AppDispatcher;