import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import dotenv from "dotenv";


dotenv.config() //para las variables de entorno que por ahora no uso

const firebaseConfig = {
    apiKey: "AIzaSyBl2LXvyk7NgcNEZoycd-KNNE6cuecFJds",
    authDomain: "subir-fotos-cd56a.firebaseapp.com",
    projectId: "subir-fotos-cd56a",
    storageBucket: "subir-fotos-cd56a.appspot.com",
    messagingSenderId: "958898803401",
    appId: "1:958898803401:web:d3494aabe577dda855f318"
};


const fireBaseApp= initializeApp(firebaseConfig);

export const storage= getStorage(fireBaseApp)