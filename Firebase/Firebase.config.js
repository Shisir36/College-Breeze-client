// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGSR9qCwZkq5lh-DfUQvq3BwwPi3tOb98",
  authDomain: "collage-breeze-server.firebaseapp.com",
  projectId: "collage-breeze-server",
  storageBucket: "collage-breeze-server.appspot.com",
  messagingSenderId: "630132524495",
  appId: "1:630132524495:web:2f5290de84847c3059beba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app