import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import expect from 'expect';

import * as actions from 'actions';
import {AddTodo} from 'AddTodo';

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});

	it('should dispatch ADD_TODO when valid text entered', () => {
		var todoText = 'sample text';
		var action = actions.startAddTodo(todoText);
		var spy = expect.createSpy();
		var addTodoForm = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodoForm));

		addTodoForm.refs.newTodoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(action);
	});

	it('should not dispatch addTodo when invalid text entered', () => {
		var spy = expect.createSpy();
		var addTodoForm = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodoForm));

		addTodoForm.refs.newTodoText.value = '';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});
});