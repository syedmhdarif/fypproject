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

// To Await 5 seconds to insert a new user

    // firebase.database().ref('users/003').set(
    //     {
            
    //         name: 'Pheng Sengvuthy 004',
    //         age: 24
    //     }
    // ).then(() => {
    //     console.log('INSERTED !');
    // }).catch((error) => {
    //     console.log(error);
    // });


export const db = app.database();