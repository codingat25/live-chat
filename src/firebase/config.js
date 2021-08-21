import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyCxYzj_v87XWf6rlFrGCMy4ZgBziFnRS2g",
    authDomain: "live-chat-4ba69.firebaseapp.com",
    projectId: "live-chat-4ba69",
    storageBucket: "live-chat-4ba69.appspot.com",
    messagingSenderId: "567563105629",
    appId: "1:567563105629:web:3fc05ae2fb04fc011924b4",
    measurementId: "G-9LP2WQ47MY"
  };

  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth();
  const projectFirestore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectAuth, projectFirestore, timeStamp}