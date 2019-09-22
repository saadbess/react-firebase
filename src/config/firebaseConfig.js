import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCYxakmzOJsa2RtSR08G4V9YtYWBODa2iA",
  authDomain: "project-plan-e5480.firebaseapp.com",
  databaseURL: "https://project-plan-e5480.firebaseio.com",
  projectId: "project-plan-e5480",
  storageBucket: "",
  messagingSenderId: "186931085063",
  appId: "1:186931085063:web:5617511a193c18a4f6cfa2"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;