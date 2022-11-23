import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJyG-4juCVNfWfHDTudpng-RPvJUGIq_g",
  authDomain: "dds2-f11de.firebaseapp.com",
  databaseURL: "https://dds2-f11de-default-rtdb.firebaseio.com",
  projectId: "dds2-f11de",
  storageBucket: "dds2-f11de.appspot.com",
  messagingSenderId: "337468096210",
  appId: "1:337468096210:web:cf0436bf5ba9292151b70b",
  measurementId: "G-PR3WYPJ5RS"
};

function setauth() {

}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

var authTable = {
  user: null,
  isSignedOut: false,
  auth: getAuth(app),
}

export const auth = authTable;
