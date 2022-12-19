import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDlZ7ccpbKDiytjWQ-dal5lYld2MbykuU8",
    authDomain: "crudapp-88646.firebaseapp.com",
    projectId: "crudapp-88646",
    storageBucket: "crudapp-88646.appspot.com",
    messagingSenderId: "1039885647653",
    appId: "1:1039885647653:web:f6dd909af85d092505a4cc"
 
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
