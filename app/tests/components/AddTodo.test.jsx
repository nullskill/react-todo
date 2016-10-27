import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import expect from 'expect';

import AddTodo from 'AddTodo';

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});

	it('should call addTodo if valid text entered', () => {
		var spy = expect.createSpy();
		var addTodoForm = TestUtils.renderIntoDocument(<AddTodo addTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodoForm));

		addTodoForm.refs.newTodoText.value = 'sample text';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith('sample text');
	});

	it('should not call addTodo if invalid text entered', () => {
		var spy = expect.createSpy();
		var addTodoForm = TestUtils.renderIntoDocument(<AddTodo addTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodoForm));

		addTodoForm.refs.newTodoText.value = '';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});
});