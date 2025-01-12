import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAqPMvegNEFCm7OEZjkxcqymvU7V5QdCCQ",
  authDomain: "netflixclone-227db.firebaseapp.com",
  projectId: "netflixclone-227db",
  storageBucket: "netflixclone-227db.firebasestorage.app",
  messagingSenderId: "701348633736",
  appId: "1:701348633736:web:c0a0901cb988c2430d533d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const signup = async (name, email, password)=> {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const logout = () => {
    signOut(auth);
}

export {
    auth, db, login, signup, logout
};