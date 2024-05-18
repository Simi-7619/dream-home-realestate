import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/cordova";

export const AuthContext = new createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    // create user
    const createUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    // signin user
    const signInUser = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
       
    }

    // google login
    const googleLogin = () =>{
        signInWithPopup(auth, googleProvider)
    }

    // observe usr
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('observing current user', currentUser)
            setUser(currentUser)
            setLoader(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[auth])


    // signOut user
    const logOut = ()=>{
        signOut(auth)
    }

    const authInfo = {
        user,
        loader,
        createUser,
        signInUser,
        googleLogin,
        logOut,

    }
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;