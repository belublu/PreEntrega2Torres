import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE,
    authDomain: "scentopia-efeac.firebaseapp.com",
    projectId: "scentopia-efeac",
    storageBucket: "scentopia-efeac.appspot.com",
    messagingSenderId: "193430500278",
    appId: "1:193430500278:web:7cb5570edd47bace658717"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)