import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase';
export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () =>{
        setIsLoading(true);
        return signInWithPopup(auth, provider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            if(currentUser){
                setUser(currentUser);
                setIsLoading(false);
            }else{
                console.log('user sign out');
            }
        })
        return () => unsubscribe;
    },[])
    const AuthInfo = {
        user,
        signInWithGoogle,
        isLoading
    }
    return (
        <div>
           <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;