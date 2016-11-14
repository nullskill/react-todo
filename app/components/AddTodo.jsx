import React from 'react';
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
	onFormSubmit(e) {
		e.preventDefault();

		var {dispatch} = this.props;
		var newTodoText = this.refs.newTodoText.value;
		if (newTodoText.length > 0) {
			this.refs.newTodoText.value = '';
			dispatch(actions.startAddTodo(newTodoText));
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

export default connect()(AddTodo);
