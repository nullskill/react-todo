import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
	getInitialState() {
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: 1,
					text: 'Walk the dog'
				}, {
					id: 2,
					text: 'Clean the yard'
				}, {
					id: 3,
					text: 'Buy a newspaper'
				}, {
					id: 4,
					text: 'Save the world!'
				}
			]
		}
	},

	handleAddTodo(text) {
		alert('new todo: ' + text)
	},

	handleSearch(showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	},

	render() {
		var {todos} = this.state;

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos} />
				<AddTodo addTodo={this.handleAddTodo} />
			</div>
		);
	}
});

module.exports = TodoApp;