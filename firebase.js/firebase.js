// Firebase v11
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
// Configuración de ERMA
const firebaseConfig = {
  apiKey: "AIzaSyDuhoJXUC4Y2W6f1Bu-2wnca0j1Bc0aSt4",
  authDomain: "erma-seguridad.firebaseapp.com",
  projectId: "erma-seguridad",
  storageBucket: "erma-seguridad.firebasestorage.app",
  messagingSenderId: "382350326687",
  appId: "1:382350326687:web:73d3df60262c6081849baa"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Base de datos
const db = getFirestore(app);

export {
    db,
    collection,
    addDoc,
    getDocs
};
