import React from 'react';
var {connect} = require('react-redux');
import moment from 'moment';
var actions = require('actions'); // comstruction 'import from' doesn't work here

export var Todo = React.createClass({
	render() {
		var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
		var todoClassName = completed ? 'todo todo-completed' : 'todo';
		var renderDate = () => {
			var message = 'Created ';
			var timestamp = createdAt;

			if (completed) {
				message = 'Completed ';
				timestamp = completedAt;
			}

			return message + moment.unix(timestamp).format('DD.MM.YYYY @ hh:mm');
		};

		return (
			<div className={todoClassName} onClick={() => {
				dispatch(actions.toggleTodo(id));
			}}>
				<div>
					<input type="checkbox" checked={completed}/>
				</div>
				<div>
					<p>{text}</p>
					<p className="todo__subtext">{renderDate()}</p>
				</div>
			</div>
		);
	}
});

export default connect()(Todo);