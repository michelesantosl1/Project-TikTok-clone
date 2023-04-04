
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCC_t8t-VS7PMGGgDocgTmyQuZBcz4ynGs",
  authDomain: "tiktok---jornada-91a40.firebaseapp.com",
  projectId: "tiktok---jornada-91a40",
  storageBucket: "tiktok---jornada-91a40.appspot.com",
  messagingSenderId: "585683133391",
  appId: "1:585683133391:web:8276fd7f856d27dbe2e8ba"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;