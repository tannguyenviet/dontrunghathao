// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore,getDocs,collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBKHn1R8xjo9JwxbvenXU29zoBJGR9MeUA',
  authDomain: 'idsnetworks-fe87d.firebaseapp.com',
  projectId: 'idsnetworks-fe87d',
  storageBucket: 'idsnetworks-fe87d.appspot.com',
  messagingSenderId: '328118395641',
  appId: '1:328118395641:web:5c57c4de1e1c17b5f53828',
  measurementId: 'G-XWZPY11261',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
