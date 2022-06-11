import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCNCBKUNRoO6keoU9RRsFOeef8X3D7qsCE",
    authDomain: "fireblog-436d9.firebaseapp.com",
    projectId: "fireblog-436d9",
    storageBucket: "fireblog-436d9.appspot.com",
    messagingSenderId: "941504111889",
    appId: "1:941504111889:web:7e46e4faeac62043ead8b0"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
