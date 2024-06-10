import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
//web app firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCsY_M5tApdv17hU8VOTYafvnuuG8a4cTU",
  authDomain: "cadastro-e-login-82c94.firebaseapp.com",
  projectId: "cadastro-e-login-82c94",
  storageBucket: "cadastro-e-login-82c94.appspot.com",
  messagingSenderId: "689763080854",
  appId: "1:689763080854:web:63a65f0e11a905a4e3c0b7",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const authInstance = getAuth(firebaseApp);
