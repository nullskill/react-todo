var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
	it('should exist', () => {
		expect(TodoList).toExist();
	});

	it('should render one Todo component for each todo item', () => {
		var todos = [{
			id: 1,
			text: 'Do smth stupid'
		}, {
			id: 2,
			text: 'Check this out'
		}];

		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}></TodoList>);
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

		expect(todosComponents.length).toBe(todos.length);
	});
});