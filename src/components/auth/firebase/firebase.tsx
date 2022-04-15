import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth, signOut } from "firebase/auth";

// See: https://firebase.google.com/docs/web/learn-more#config-object

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const logout = () => {
  return signOut(firebaseAuth);
};

// Initialize Firebase Authentication and get a reference to the service
export const firebaseAuth = getAuth(firebaseApp);
