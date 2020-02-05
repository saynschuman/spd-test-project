import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAe9B2FhNok7R1NuAhc2UaZrjfvdWU9-W0",
  authDomain: "emerald-road-216311.firebaseapp.com",
  databaseURL: "https://emerald-road-216311.firebaseio.com",
  projectId: "emerald-road-216311",
  storageBucket: "emerald-road-216311.appspot.com",
  messagingSenderId: "1068042055502"
};
firebase.initializeApp(config);

export const firebaseInited = {
  auth: firebase.auth(),
  db: firebase.database()
};
