import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import 'firebase/compat/auth';
import { firebaseConfig } from './firebaseConfig.js';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import loadMyLibrary from './loadMyLibrary.js';

let globalUser = {};

const app = firebase.initializeApp(firebaseConfig);
// app is a container-like object that stores common configuration 
// and shares authentification across Firebase services

const auth = getAuth();


loadSignInPage();


function loadSignInPage() {
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  startFirebaseUI(ui);

  onAuthStateChanged(auth, user => {
    if (user) {
      // user is signed in 
      globalUser.uid = user.uid;
      globalUser.displayName = user.displayName;
    } else {
      // user is signed out
      ui.reset();
      startFirebaseUI(ui);
    }
  });
}

function startFirebaseUI(ui) {
  ui.start('#firebaseui-auth-container', {
    callbacks: {
      signInSuccessWithAuthResult: function(AuthResult) {
        loadMyLibrary(AuthResult.user.uid);
        return false;  // means that the page will not be automatically redirected
      },
      uiShown: function() {
        // the widget is rendered.  hide the loader
        document.getElementById('loader').style.display = 'none';
      },
      signInFailure: function(error) {
        console.error(error);
      },
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
}


function logOut() {
  console.log('fire');
  signOut(auth);
}


export { logOut, globalUser };
