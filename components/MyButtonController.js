/**
 * Created by mybook on 16/2/22.
 */
var React = require('react');
var ListStore = require('../stores/ListStore.js');
var ButtonActions = require('../actions/ButtonActions.js');
var MyButton = require('./MyButton.js');

var MyButtonController = React.createClass({

    getInitialState: function () {
        return {
            items: ListStore.getAll()
        };
    },

    componentDidMount: function() {
        ListStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ListStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({
            items: ListStore.getAll()
        });
    },

    createNewItem: function (event) {
        ButtonActions.addNewItem('XXXXXX');
    },

    render: function() {
        return(
            <MyButton items={this.state.items} onClick={this.createNewItem}/>
        )
    }
});

module.exports = MyButtonController;