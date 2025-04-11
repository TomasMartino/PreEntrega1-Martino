import { initializeApp } from "firebase/app";

// Tu configuración de Firebase (reemplaza con la tuya)
const firebaseConfig = {
  apiKey: "AIzaSyBo3lQNVZZ-LyZsBduXw06VL6zZy0IwyLg",
  authDomain: "ecommerce-coder-1dea9.firebaseapp.com",
  projectId: "ecommerce-coder-1dea9",
  storageBucket: "ecommerce-coder-1dea9.firebasestorage.app",
  messagingSenderId: "232385402023",
  appId: "1:232385402023:web:e39522bc8d97380c1bb782",
};

// Inicializa Firebase (asegúrate de que se inicialice solo una vez)
export const app = initializeApp(firebaseConfig);
