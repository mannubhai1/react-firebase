import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDx0Py2d6A-M_mTppxT_qpOPn-N7p37d-4",
  authDomain: "react-firebase-8cc6e.firebaseapp.com",
  projectId: "react-firebase-8cc6e",
  storageBucket: "react-firebase-8cc6e.appspot.com",
  messagingSenderId: "655861172653",
  appId: "1:655861172653:web:163c121cf2c94aa4ebf924",
  measurementId: "G-SP4S99F03S",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
