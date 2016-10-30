// function add (a, b) {
// 	return a + b;
// }

// console.log(add(3, 1));

// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var person = ['Andrew', 25];
// var personTwo = ['Jen', 29];

// function greet (a, b) {
// 	return 'Hello ' + a + ', you are ' + b;
// }

// console.log(greet(...person));
// console.log(greet(...personTwo));


var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

function showNames(arr) {
	arr.forEach( function(element, index) {
		console.log('Hi ' + element);
	});
}

showNames(final);



