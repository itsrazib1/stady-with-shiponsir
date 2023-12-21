import { useState } from "react";
import { createContext } from "react";
import {getAuth} from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setloading] = useState(true);
    const Authinfo = {
        user,
        loading
    }
    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;