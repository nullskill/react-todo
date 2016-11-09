import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCPreY9EVeAZxwQYFVeJlXz0bgXkwrfPIU",
  authDomain: "study-todo-app.firebaseapp.com",
  databaseURL: "https://study-todo-app.firebaseio.com",
  storageBucket: "study-todo-app.appspot.com",
  messagingSenderId: "274143062608"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});

// var notesRef = firebaseRef.child('notes');

// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });

// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });

// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });

// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });
// console.log('Todo id', newNoteRef.key);
// newNoteRef.set({
//   text: 'Walk the dog'
// });

// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('User ref changed', snapshot.val());
// });

// firebaseRef.child('user').update({name: 'Mike'});
// firebaseRef.child('app').update({name: 'Smth else'});

// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });

// firebaseRef.off();

// firebaseRef.update({isRunning: false});

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });

// firebaseRef.update({
//   isRunning: null
// });

// firebaseRef.child('user/age').remove();

// firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Mikle'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application!'
// });

// firebaseRef.child('user').update({
//   name: 'Mikle!'
// });

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo application'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// });