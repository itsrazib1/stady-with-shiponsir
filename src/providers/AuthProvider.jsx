import { useEffect, useState } from "react";
import { createContext } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setloading] = useState(true);

    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password);
      };

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const LogOut = () =>{
        setloading(true);
        return signOut(auth)
    } 

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setloading(false)
        });
        return() => {
            return unsubscribe()
        }
    })
    const Authinfo = {
        user,
        loading,
        createUser,
        LogOut,
        login
    }
    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;