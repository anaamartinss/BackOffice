// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// 🔁 Coloca aqui a tua configuração real do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyClPbJkEPq82ZVMM89tJ3jWRciyIn_CseI",
    authDomain: "pwa-pw-640bf.firebaseapp.com",
    projectId: "pwa-pw-640bf",
    storageBucket: "pwa-pw-640bf.firebasestorage.app",
    messagingSenderId: "895788955747",
    appId: "1:895788955747:web:2c4277493e817b416d6056",
    measurementId: "G-M1BRBXJWGW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
