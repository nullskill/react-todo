import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
	it('should generate search text action', () => {
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'Some search text'
		};
		var res = actions.setSearchText(action.searchText);

		expect(res).toEqual(action);
	});

	it('should generate toggle show completed action', () => {
	  var action = {
	  	type: 'TOGGLE_SHOW_COMPLETED'
	  };
	  var res = actions.toggleShowCompleted();

	  expect(res).toEqual(action);
	});

	it('should generate add todo action', () => {
	  var action = {
	  	type: 'ADD_TODO',
	  	todo: {
				id: '123abc',
				text: 'Anything we like',
				completed: false,
				createdAt: 0
	  	}
	  };
	  var res = actions.addTodo(action.todo);

	  expect(res).toEqual(action);
	});

	// it('should create todo and dispatch ADD_TODO', (done) => {
	//   const store = createMockStore({});
	//   const todoText = 'My todo item';

	//   store.dispatch(actions.startAddTodo(todoText)).then(() => {
	//     const actions = store.getActions();
			
	// 		expect(actions[0]).toIclude({
	// 			type: 'ADD_TODO'
	// 		});
	// 		expect(actions[0].todo).toIclude({
	// 			text: todoText
	// 		});
	// 		done();
			
	//   }).catch(done);
	// });

	it('should generate add todos action', () => {
	  var todos = [{
	  	id: 111,
	  	text: 'anything',
	  	createdAt: 33000,
	  	completed: false,
	  	completedAt: undefined
	  }];
	  var action = {
	  	type: 'ADD_TODOS',
	  	todos
	  };
	  var res = actions.addTodos(todos);

	  expect(res).toEqual(action);
	});

	// it('should generate update todo action', () => {
	//   var action = {
	//   	type: 'UPDATE_TODO',
	//   	id: 1,
	//   	updates: {completed: false}
	//   };
	//   var res = actions.updateTodo(action.id, action.updates);

	//   expect(res).toEqual(action);
	// });
});