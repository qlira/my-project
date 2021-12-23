import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8SNyl0kMpAqINvFUJ5qvhgPYeZc8j7ok",
  authDomain: "my-cinema-5db10.firebaseapp.com",
  projectId: "my-cinema-5db10",
  storageBucket: "my-cinema-5db10.appspot.com",
  messagingSenderId: "524076034220",
  appId: "1:524076034220:web:7f576dea8b360cf95c5709",
};

// init firebase
initializeApp(firebaseConfig);

// init firebase auth

const auth = getAuth();

export { auth };
