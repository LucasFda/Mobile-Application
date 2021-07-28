import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyC7bK3GCQXXA5dLT0PuJeRroME9pncnX1k",
    authDomain: "trends-application.firebaseapp.com",
    projectId: "trends-application",
    storageBucket: "trends-application.appspot.com",
    messagingSenderId: "113611696443",
    appId: "1:113611696443:web:c6a4533e4bc150e5ad6f1e",
    measurementId: "G-R96WEDEFND"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();

const auth = firebase.auth();

export { db, auth };