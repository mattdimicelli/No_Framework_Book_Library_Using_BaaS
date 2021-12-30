import firebase from 'firebase/compat/app';

const firebaseConfig = {

  apiKey: "AIzaSyCDvRIHwumoq3opu-Jq3kWUCz796lZp_s0",

  authDomain: "mylibrary-mrd.firebaseapp.com",

  projectId: "mylibrary-mrd",

  storageBucket: "mylibrary-mrd.appspot.com",

  messagingSenderId: "779445139467",

  appId: "1:779445139467:web:3992983e350acffbc4af0e"

};

const app = firebase.initializeApp(firebaseConfig);
// app is a container-like object that stores common configuration 
// and shares authentification across Firebase services

