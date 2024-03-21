import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'

import { 
    getAuth, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged  
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'



const firebaseConfig = {
  apiKey: "AIzaSyBpLI0TuSuToaYqpMr5KLoaf0GWkPAPEYM",
  authDomain: "apiweb2024a.firebaseapp.com",
  projectId: "apiweb2024a",
  storageBucket: "apiweb2024a.appspot.com",
  messagingSenderId: "576157774878",
  appId: "1:576157774878:web:e73eaf877836f18083aa0f",
  measurementId: "G-QXGEZF7Q2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

//metodo de autenticacion de usuario
export const loginauth=(email,password)=>
    signInWithEmailAndPassword(auth, email, password)

//cerrar sesion del usuario
export const loginout=()=>
  signOut(auth)

//estado del usuario logeado
export function userstate(){
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
    } else {
      window.location.href='../index.html'
    }
  });
}

// crear cuentas de autenticacion
export const registerauth=(email,password)=>
  createUserWithEmailAndPassword(auth, email, password)