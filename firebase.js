// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBABWhDf6GkB2mxo0W2UYyaD366YZIwBIk",
  authDomain: "fir-auth-a1060.firebaseapp.com",
  projectId: "fir-auth-a1060",
  storageBucket: "fir-auth-a1060.appspot.com",
  messagingSenderId: "1081462299105",
  appId: "1:1081462299105:web:c0dd9cf807c4823e22daa0"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };

