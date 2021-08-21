import firebase from './firebase/app';

let firebaseConfig = {
    apiKey: "AIzaSyANgTlVHc-DRoa2M284EEw5adYcnaGxA_8",
    authDomain: "sistema-processos-ufs.firebaseapp.com",
    projectId: "sistema-processos-ufs",
    storageBucket: "sistema-processos-ufs.appspot.com",
    messagingSenderId: "780176570522",
    appId: "1:780176570522:web:3f43df55c5e105f3624723",
    measurementId: "G-GX8R2J4BSS"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase