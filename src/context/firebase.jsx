import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDxQln0-qu1jWltvryVSD6s9mVZAnqbcl0",
    authDomain: "olxproject-86679.firebaseapp.com",
    projectId: "olxproject-86679",
    storageBucket: "olxproject-86679.firebasestorage.app",
    messagingSenderId: "206321509126",
    appId: "1:206321509126:web:5c05252050bb78c956b487",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

const provider = new GoogleAuthProvider();

export const FirebaseProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        console.log(`auth state change: `);
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else setCurrentUser(null);
        });
    },[currentUser]);

    const handleLogin = () => {
        const auth = firebaseAuth;
        signInWithPopup(auth, provider)
            .then((results) => {
                const credentials =
                    GoogleAuthProvider.credentialFromResult(results);
                const token = credentials.accessToken;

                //singed in user info
                const user = results.user;
                console.log(user);
                setCurrentUser(user);
            })
            .catch((error) => {
                console.log(`erroe while singup`, error);
            });
    };

    const logOut = () => {
        signOut(firebaseAuth)
            .then(() => {
                console.log(`logout sucessful`);
            })
            .catch((err) => {
                console.log(`logout failed`, err);
            });
    };

    //put to database
    //read from db function

    return (
        <FirebaseContext.Provider
            value={{ handleLogin, logOut, currentUser, setCurrentUser }}
        >
            {children}
        </FirebaseContext.Provider>
    );
};
