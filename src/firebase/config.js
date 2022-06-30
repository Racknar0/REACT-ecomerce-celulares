// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6oRx1H62ZH51clQU6AvikXU4EKc9ZhEM",
  authDomain: "ecommerce-react-coder-c5b06.firebaseapp.com",
  projectId: "ecommerce-react-coder-c5b06",
  storageBucket: "ecommerce-react-coder-c5b06.appspot.com",
  messagingSenderId: "52609088745",
  appId: "1:52609088745:web:b1d8013722a31e5e000478"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}
