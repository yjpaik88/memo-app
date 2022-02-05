import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase"

Vue.config.productionTip = false

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE-9WZFesg_Hf9HIY99Z2FH9mPQ6HbNh4",
  authDomain: "yoondi.firebaseapp.com",
  projectId: "yoondi",
  storageBucket: "yoondi.appspot.com",
  messagingSenderId: "983120963755",
  appId: "1:983120963755:web:83531b26a1286a006aefee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const myEmail = "happyyoondi@nana.com";
const myPwd = "1234567890";

firebase
.auth()
.signInWithEmailAndPassword(myEmail, myPwd)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
