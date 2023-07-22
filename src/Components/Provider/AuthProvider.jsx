import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../../Firebase/Firebase.config";

export const Authcontext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        })
    };
    const signIn = (email, password) => {
        // setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };

    const googleAuthProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        // setLoading(true)
        return signInWithPopup(auth, googleAuthProvider);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);

        });

        return () => {
            return unsubscribe();
        };
    }, []);

    const authData = {
        currentUser,
        createUser,
        updateUserProfile,
        signIn,
        logout,
        signInWithGoogle,
        loading,
        setLoading
    };

    return (
        <Authcontext.Provider value={authData}>
          {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;