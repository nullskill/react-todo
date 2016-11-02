import React from 'react';
import moment from 'moment';

var Todo = React.createClass({
	render() {
		var {id, text, completed, createdAt, completedAt} = this.props;
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
				this.props.onToggle(id);
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

module.exports = Todo;