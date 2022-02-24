
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCs0N0lqH5fWSwYNBtekpwn3r08JxH3tE4",
  authDomain: "mostafa-firgram.firebaseapp.com",
  projectId: "mostafa-firgram",
  storageBucket: "mostafa-firgram.appspot.com",
  messagingSenderId: "1042824337557",
  appId: "1:1042824337557:web:8f90dfb2964f4dbe6ca39c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };