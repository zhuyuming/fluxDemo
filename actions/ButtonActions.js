/**
 * Created by mybook on 16/2/23.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher.js');

var ButtonActions = {
    addNewItem: function (text) {
        AppDispatcher.dispatch({
            actionType: 'ADD_NEW_ITEM',
            text: text
        });
    },
};

module.exports = ButtonActions;