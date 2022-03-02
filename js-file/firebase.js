// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCkmDlAUHTS0FGGaa8MDjVzC26gAzd4hqM",
    authDomain: "atlp-capstone-project-axel.firebaseapp.com",
    projectId: "atlp-capstone-project-axel",
    storageBucket: "atlp-capstone-project-axel.appspot.com",
    messagingSenderId: "816829501156",
    appId: "1:816829501156:web:a8531aa2a473b8fa42a6f1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //make aut and firestore references
    // enable firebase auth service
    const authentication = firebase.auth();
    // enable firebase firestore service
    const db  = firebase.firestore();
    //db.settings({timeStampInShots: true});