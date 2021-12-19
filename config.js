import firebase from 'firebase';

// add SDK Firebase
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC6D5Gi7dy9WSQ4vyKtOmpmoETj_T7CyVI",
    authDomain: "team-voting-c8d22.firebaseapp.com",
    databaseURL: "https://team-voting-c8d22-default-rtdb.firebaseio.com",
    projectId: "team-voting-c8d22",
    storageBucket: "team-voting-c8d22.appspot.com",
    messagingSenderId: "1015750485936",
    appId: "1:1015750485936:web:607705a316d2bc32981875"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase.database();