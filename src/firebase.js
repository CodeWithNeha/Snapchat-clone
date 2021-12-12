import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyApukQ7W_dPQ6yCNrbOoj4uYvUz9DpIEfs",
    authDomain: "snapchat-clone-e9490.firebaseapp.com",
    projectId: "snapchat-clone-e9490",
    storageBucket: "snapchat-clone-e9490.appspot.com",
    messagingSenderId: "369024005330",
    appId: "1:369024005330:web:24ea08cbe50a58f385a90b"
  };

  const firebaseApp = firebase.initialiApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, storage, provider };