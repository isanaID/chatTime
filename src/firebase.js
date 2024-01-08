import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBogm1sf06JMrEy_w3q3L9b5rbXx7dSSDU",
    authDomain: "ezzi-super-app.firebaseapp.com",
    projectId: "ezzi-super-app",
    storageBucket: "ezzi-super-app.appspot.com",
    messagingSenderId: "437578150042",
    appId: "1:437578150042:web:b4beb4b2f1e35080526f23",
    measurementId: "G-BLYJJMYB6K",
  })
  .auth();
