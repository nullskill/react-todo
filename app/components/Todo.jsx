import React from 'react';

var Todo = React.createClass({
	render() {
		var {id, text, completed} = this.props;

		return (
			<div onClick={() => {
				this.props.onToggle(id);
			}}>
				<input type="checkbox" checked={completed}/>
				{text}
			</div>
		);
	}
});

module.exports = Todo;