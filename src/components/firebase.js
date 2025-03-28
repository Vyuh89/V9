import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
  browserPopupRedirectResolver
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCtMJSLcmLCyz3thOLGsF0OnqY1vGH-euk",
  authDomain: "vyuh-8d498.firebaseapp.com",
  projectId: "vyuh-8d498",
  storageBucket: "vyuh-8d498.appspot.com",
  messagingSenderId: "219136682508",
  appId: "1:219136682508:android:84368d2d8622a1a8dc5c29"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Set custom parameters for the Google provider
provider.setCustomParameters({
  prompt: 'select_account'
});

// Detect Android device
const isAndroid = /Android/i.test(navigator.userAgent);

export { 
  auth, 
  provider, 
  signInWithRedirect, 
  getRedirectResult, 
  signInWithPopup,
  isAndroid,
  browserPopupRedirectResolver
};