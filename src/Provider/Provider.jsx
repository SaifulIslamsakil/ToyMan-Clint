import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import Auth from '../Firbase/FirbaseConfiq';

export const AuthContext = createContext(null)

const Provider = ({ children }) => {

    const [lodder, setLodder] = useState(true)
    const [user, setuser] = useState("")
    const Provider = new GoogleAuthProvider()
    const Register = (email, password)=>{
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const LoginUserEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(Auth, email, password)
    }

    const logOutUser = () => {
        return signOut(Auth)
    }

    useEffect(() => {
        const unSubcriber = onAuthStateChanged(Auth, currentUser => {
            setLodder(false)
            setuser(currentUser)
        })
        return () => {
            return unSubcriber
        }
    }, [])

    const GoogleLogin = () => {
        return signInWithPopup(Auth, Provider)
    }

    console.log(user)

    const AuthInfo = {
        Register,
        LoginUserEmailAndPassword,
        logOutUser,
        GoogleLogin,
        user,
        lodder

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;