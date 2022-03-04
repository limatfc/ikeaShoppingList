import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBMt_lLB2VW5LtRz1VN2QxebgBbAmes2k",
  authDomain: "ikeashoppinglist-aec9b.firebaseapp.com",
  projectId: "ikeashoppinglist-aec9b",
  storageBucket: "ikeashoppinglist-aec9b.appspot.com",
  messagingSenderId: "803122055078",
  appId: "1:803122055078:web:d1621607ad79e303837167",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const cloudStorageReference = getStorage(app);
