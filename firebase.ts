import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAjsFlavz92xsgkBJHW2qTbtH3IMesftDQ',
  authDomain: 'notion-clone-40d77.firebaseapp.com',
  projectId: 'notion-clone-40d77',
  storageBucket: 'notion-clone-40d77.firebasestorage.app',
  messagingSenderId: '299012976899',
  appId: '1:299012976899:web:d5a77dbb69b983ae9eb936',
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
