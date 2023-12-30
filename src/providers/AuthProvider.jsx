import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                throw error;
            });
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => {
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                throw error;
            });
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const Authinfo = {
        user,
        loading,
        createUser,
        logOut,
        signIn
    };

    return <AuthContext.Provider value={Authinfo}>
        {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
