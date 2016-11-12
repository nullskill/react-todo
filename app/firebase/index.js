import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET
    // messagingSenderId: "274143062608"
  };
  firebase.initializeApp(config);
} catch(e) {

};

export var firebaseRef = firebase.database().ref();
export default firebase;