import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBRt1t4j8rN0FU_P2eT2OZy-DF_wki5Xes",
    authDomain: "travel-9b7c1.firebaseapp.com",
    databaseURL: "https://travel-9b7c1-default-rtdb.firebaseio.com",
    projectId: "travel-9b7c1",
    storageBucket: "travel-9b7c1.appspot.com",
    messagingSenderId: "1013777324511",
    appId: "1:1013777324511:web:9b1447e53832508f834c6a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
