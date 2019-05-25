import firebase from "firebase/app";
import firestore from "firebase/firestore";

const firebaseConfig = {
    apiKey: "INSERT_YOUR_KEY_HERE",
    authDomain: "DOMAIN_NAME.firebaseapp.com",
    databaseURL: "https://DATABASE_DOMAIN_NAME.firebaseio.com",
    projectId: "PROJECT_ID",
    storageBucket: "DOMAIN_NAME.appspot.com",
    messagingSenderId: "00000000000",
    appId: "1:00000000000:web:a00000aaa0aaaa00"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Export firestore database
export default firebaseApp.firestore();