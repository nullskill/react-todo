var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import TodoApp from 'TodoApp';

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
})

store.dispatch(actions.addTodo('Clean the room'));
store.dispatch(actions.setSearchText('room'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<Provider store={store}>
    <TodoApp/>
  </Provider>,
	document.getElementById('app')
);