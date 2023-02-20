import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

//define our config pointing to the created webapp
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID 
}

// initialize the db with the correct params
// initializeApp instantiates our firebase which we save in app
const app = initializeApp(firebaseConfig);
// pass in the firebase to firestore and store it in db
const db = getFirestore(app);


export default db;