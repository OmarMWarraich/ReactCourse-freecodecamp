import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBsCmDDWvvnpNdkNj_HWnTxR7Z79Ya4fUU",

    authDomain: "instagram-4f30c.firebaseapp.com",

    projectId: "instagram-4f30c",

    storageBucket: "instagram-4f30c.appspot.com",

    messagingSenderId: "46187935309",

    appId: "1:46187935309:web:e23ec1d3500f23a0668e04"

};


const firebase = Firebase.initializeApp(config);
const  FieldValue  = Firebase.firestore;


export { firebase, FieldValue };
