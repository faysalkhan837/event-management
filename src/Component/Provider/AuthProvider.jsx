import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../../Firebase/Firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loging, setLoding] = useState(true);

    const createUser = (email, password) =>{
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) =>{
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () =>{
        setLoding(true);
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () =>{
        setLoding(true)
        return signOut(auth);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
        return ()=>{
            unSubscribe();
            setLoding(false);
        }
    },[])

    const userInfu = {
        createUser,
        loginUser,
        googleSignIn,
        logOut,
        loging,
        user
    }

    return (
        <AuthContext.Provider value={userInfu}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;