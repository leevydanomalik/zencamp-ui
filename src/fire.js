import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyDd3T7asxFx_q0tubsl5mRkFPJkgoAecAg",
    authDomain: "login-cfcc5.firebaseapp.com",
    projectId: "login-cfcc5",
    storageBucket: "login-cfcc5.appspot.com",
    messagingSenderId: "548329815775",
    appId: "1:548329815775:web:d9d11125954741c725b36a"
  };
  
 firebase.initializeApp(firebaseConfig);

 export const firestore = firebase.firestore();
 export const auth = firebase.auth();
 export const timestamp = firebase.firestore.FieldValue.serverTimestamp;