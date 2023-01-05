import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBwyGBleifACKJMmATlSHMnZHJflHLnjQE",
  authDomain: "is-eliseeva-gb.firebaseapp.com",
  projectId: "is-eliseeva-gb",
  storageBucket: "is-eliseeva-gb.appspot.com",
  messagingSenderId: "805338359236",
  appId: "1:805338359236:web:0a15a8a4b5474841b23091",
  measurementId: "G-1H23CLQY1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);

export const signUp = async (email, password) =>
  await createUserWithEmailAndPassword(firebaseAuth, email, password);
export const signIn = async (email, password) =>
  await signInWithEmailAndPassword(firebaseAuth, email, password);
export const logOut = async () => await signOut(firebaseAuth);

const db = getDatabase(app);

export const userRef = ref(db, 'user');
export const messagesRef = ref(db, 'messages');

export const getChatById = (chatId) => ref(db, `messages/${chatId}`);

export const getMessageListById = (chatId) =>
  ref(db, `messages/${chatId}/messageList`) 
