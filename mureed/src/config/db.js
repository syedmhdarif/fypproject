import * as firebase from 'firebase';

 let config = {
  apiKey: "AIzaSyDQ5k4KHBMnw99RyXuPGw19pagzECKjkQQ",
  authDomain: "fypproject-6211e.firebaseapp.com",
  databaseURL: "https://fypproject-6211e.firebaseio.com",
  projectId: "fypproject-6211e",
  storageBucket: "fypproject-6211e.appspot.com",
  messagingSenderId: "698962627980",
  appId: "1:698962627980:web:beb41e777064dd03dadaa9",
  measurementId: "G-63PT2FKJNJ"

};
let app = firebase.initializeApp(config);
export const db = app.database();


