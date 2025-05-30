// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Importar Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYmi_g2U960Qq5QzU4R5hDNScrvViLOOg",
  authDomain: "cumple-ivancito.firebaseapp.com",
  projectId: "cumple-ivancito",
  storageBucket: "cumple-ivancito.firebasestorage.app",
  messagingSenderId: "261043002815",
  appId: "1:261043002815:web:dc822ce325944caad2150a",
  measurementId: "G-SCKZBR5GWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app); // Inicializar Firestore

export { db }; // Exportar db para usar en otras partes de la aplicación