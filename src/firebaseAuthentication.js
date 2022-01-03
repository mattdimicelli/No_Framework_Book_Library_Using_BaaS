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
onAuthStateChanged(auth, user => {
  if (user) {
    // user is signed in 
    globalUser.uid = user.uid;
    globalUser.displayName = user.displayName;
    loadMyLibrary(user.uid);
    hideSignIn();
  } else {
    // user is signed out
    startFirebaseUI();
    showSignIn();
    hideLibrary();
  }
});

var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.disableAutoSignIn();

function startFirebaseUI() {
  ui.start('#firebaseui-auth-container', {
    callbacks: {
      signInSuccessWithAuthResult: function() {
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
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        customParameters: {
          // Forces account selection even when one account
          // is available.
          prompt: 'select_account',
        },
      },
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
  signOut(auth);
}

function hideSignIn() {
  let signInWrapper = document.querySelector('.sign-in-wrapper');
  signInWrapper.classList.add('hidden');
}

function showSignIn() {
  let signInWrapper = document.querySelector('.sign-in-wrapper');
  signInWrapper.classList.remove('hidden');
}

function hideLibrary() {
  let wrapper = document.querySelector('.wrapper');
  wrapper.classList.add('hidden');
}


export { logOut, globalUser };
