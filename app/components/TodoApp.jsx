import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';

var TodoApp = React.createClass({
	getInitialState() {
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: uuid(),
					text: 'Walk the dog',
					completed: false
				}, {
					id: uuid(),
					text: 'Clean the yard',
					completed: true
				}, {
					id: uuid(),
					text: 'Buy a newspaper',
					completed: false
				}, {
					id: uuid(),
					text: 'Save the world!',
					completed: true
				}
			]
		}
	},

	handleAddTodo(text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text,
					completed: false
				}
			]
		});
	},

	handleToggle(id) {
		var updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}

			return todo;
		});

		this.setState({todos: updatedTodos});
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
				<TodoList todos={todos} onToggle={this.handleToggle} />
				<AddTodo addTodo={this.handleAddTodo} />
			</div>
		);
	}
});

module.exports = TodoApp;