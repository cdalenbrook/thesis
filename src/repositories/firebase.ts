//Initializes firebase
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
let app: firebase.app.App;

//TODO: create .env to store these credentials
const firebaseConfig = {
  // apiKey: , INSERT WITH YOUR API KEY AND UNCOMMENT
  authDomain: "yuki-b8063.firebaseapp.com",
  databaseURL: "https://yuki-b8063.firebaseio.com",
  projectId: "yuki-b8063",
  storageBucket: "yuki-b8063.appspot.com",
  messagingSenderId: "946867802608",
  appId: "1:946867802608:web:b8ae2c1da09034db80cd35",
  measurementId: "G-8EKL0MHP2Z",
};

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore(app!);
const storage = firebase.storage(app!);
const analytics = firebase.analytics(app!);

export { firebase, app, firestore, storage, analytics };
