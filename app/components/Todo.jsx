import React from 'react';

var Todo = React.createClass({
	render() {
		var {id, text} = this.props;

		return (
			<div>
				{id}. {text}
			</div>
		);
	}
});

module.exports = Todo;