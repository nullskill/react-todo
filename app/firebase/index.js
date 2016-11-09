import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCPreY9EVeAZxwQYFVeJlXz0bgXkwrfPIU",
    authDomain: "study-todo-app.firebaseapp.com",
    databaseURL: "https://study-todo-app.firebaseio.com",
    storageBucket: "study-todo-app.appspot.com",
    messagingSenderId: "274143062608"
  };
  firebase.initializeApp(config);
} catch(e) {

};

export var firebaseRef = firebase.database().ref();
export default firebase;