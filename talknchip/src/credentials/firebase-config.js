
import firebase from "firebase"

const firebaseconfig = {
  apiKey: "AIzaSyBNnD42_NeqPipI2Q9TyP5M6qEyooBvZWo",
  authDomain: "talk-n-chip.firebaseapp.com",
  databaseURL: "https://talk-n-chip.firebaseio.com",
  projectId: "talk-n-chip",
  storageBucket: "talk-n-chip.appspot.com",
  messagingSenderId: "544941409920"
}

// let firebaseApp

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseconfig)
  // console.log('app', firebaseApp)
  // console.log(firebaseApp.firebase_)
}

export default firebase
