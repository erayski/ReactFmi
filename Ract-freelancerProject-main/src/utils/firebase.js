import firebase from 'firebase/app';
import 'firebase/auth';


 const firebaseConfig = {
    apiKey: "AIzaSyCl6bL7debSr56BUiwefA72xPhwvPRS0EU",
    authDomain: "my-pets-react.firebaseapp.com",
    projectId: "my-pets-react",
    storageBucket: "my-pets-react.appspot.com",
    messagingSenderId: "152923594201",
    appId: "1:152923594201:web:4f2337ea735a2991ab4dc8",
    measurementId: "G-W5T4SMD1ZY"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);


}

export default firebase;

export const auth = firebase.auth();