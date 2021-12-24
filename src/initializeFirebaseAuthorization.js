import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import 'firebase/compat/auth';

import loadMyLibrary from './loadMyLibrary.js';


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


var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
    callbacks: {
      signInSuccessWithAuthResult: function() {
        loadMyLibrary();
        return false;
      },
      uiShown: function() {
        // the widget is rendered.  hide the loader
        document.getElementById('loader').style.display = 'none';
      }
    },
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: '#',
        // Privacy policy url/callback.
        privacyPolicyUrl: function() {
          window.location.assign('#');
        }
  });
  

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

