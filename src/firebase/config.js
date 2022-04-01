import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD4ta-DFP3iYWdq3tLlj3gq2ugfyAQiXFw",
  authDomain: "udemy-vue-firebase-sites-ae5ca.firebaseapp.com",
  projectId: "udemy-vue-firebase-sites-ae5ca",
  storageBucket: "udemy-vue-firebase-sites-ae5ca.appspot.com",
  messagingSenderId: "146098405459",
  appId: "1:146098405459:web:bd227cc7db1bf2abcdc6a6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//creates connection to collection
const db = getFirestore(firebaseApp);

//timestamp
// import { updateDoc, serverTimestamp } from "firebase/firestore";

// const docRef = doc(db, 'objects', 'some-id');

// // Update the timestamp field with the value from the server
// const updateTimestamp = await updateDoc(docRef, {
//     timestamp: serverTimestamp()
// });

export { firebaseApp, db }


