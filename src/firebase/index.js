import firebase from "firebase/app";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyAJrfCPHnvMYvk9Gscd0AZ4JMRsYtrwHGk",
  authDomain: "telefoto.firebaseapp.com",
  databaseURL: "https://telefoto.firebaseio.com",
  projectId: "telefoto",
  storageBucket: "telefoto.appspot.com",
  messagingSenderId: "100418125302",
  appId: "1:100418125302:web:733b2e7c4c672542279bd7",
  measurementId: "G-G30VKJZ2J6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default { storage, firebase };
