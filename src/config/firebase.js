var firebase=require('firebase')

var firebaseConfig = {
    apiKey: "AIzaSyA_SAoZYHYz3HrK9wJ_l5E5SpzlYbDwd0M",
    authDomain: "travel-app-5ae97.firebaseapp.com",
    databaseURL: "https://travel-app-5ae97.firebaseio.com",
    projectId: "travel-app-5ae97",
    storageBucket: "",
    messagingSenderId: "273747494813",
    appId: "1:273747494813:web:501d845196ac2f5b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;