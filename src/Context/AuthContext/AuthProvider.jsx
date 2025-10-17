import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [isLoading, setIsloading]=useState(true)
    const createUser=(email,password)=>{
        setIsloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        setIsloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
   
    const usersignOUt=()=>{
        setIsloading(true)
        return signOut(auth)
    }
     useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setIsloading(false)
        })
        return()=> unSubscribe();
    },[])
    const userInfo={
        user,
        createUser,
        signInUser,
        usersignOUt,
        isLoading
    }
    
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>

    );
};

export default AuthProvider;