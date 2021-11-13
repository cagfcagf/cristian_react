import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC4WRKwz2Y2QeGbO0ZJj-GoWS1OTxQ3yX4",
    authDomain: "guiltybox.firebaseapp.com",
    projectId: "guiltybox",
    storageBucket: "guiltybox.appspot.com",
    messagingSenderId: "199778732259",
    appId: "1:199778732259:web:b2f26cbb1ba1790900ddd6"
  };


  const app = firebase.initializeApp(firebaseConfig)

 export const firestore = firebase.firestore(app)
