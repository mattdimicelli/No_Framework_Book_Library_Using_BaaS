import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import 'firebase/compat/auth';

import loadMyLibrary from './loadMyLibrary.js';

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

