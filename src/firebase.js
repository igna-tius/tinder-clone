import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB1pVqXRZXUqesfm7KTpW7tbasFcwdtREU",
  authDomain: "tinder-clone-a2516.firebaseapp.com",
  databaseURL: "https://tinder-clone-a2516.firebaseio.com",
  projectId: "tinder-clone-a2516",
  storageBucket: "tinder-clone-a2516.appspot.com",
  messagingSenderId: "264219974831",
  appId: "1:264219974831:web:f95441f805169858e8c85a",
  measurementId: "G-0QW69LNHSZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
