import React from 'react';

var AddTodo = React.createClass({
	onFormSubmit(e) {
		e.preventDefault();

		var newTodoText = this.refs.newTodoText.value;
		if (newTodoText.length > 0) {
			this.refs.newTodoText.value = '';
			this.props.addTodo(newTodoText);
		} else {
			this.refs.newTodoText.focus();
		}
	},

	render() {
		return (
			<div className="container__footer">
				<form onSubmit={this.onFormSubmit}>
					<input type="text" ref="newTodoText" placeholder="What do you need to do?"/>
					<button className="button expanded">Add Todo</button>
				</form>
			</div>
		);
	}
});

module.exports = AddTodo;