import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAucwkKtKNhko4XoDUkORZRCQSy65EoT7g",
  authDomain: "do-s-60ec2.firebaseapp.com",
  databaseURL: "https://do-s-60ec2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "do-s-60ec2",
  storageBucket: "do-s-60ec2.appspot.com",
  messagingSenderId: "447186948428",
  appId: "1:447186948428:web:aeeed3dda0a8168c4d7fe9",
  measurementId: "G-XS56HFRT07"
});

export { firebaseConfig as firebase };