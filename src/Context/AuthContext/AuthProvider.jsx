import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })
        return()=> unSubscribe();
    },[])
    const usersignOUt=()=>{
        return signOut(auth)
    }
    const userInfo={
        user,
        createUser,
        signInUser,
        usersignOUt
    }
    
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>

    );
};

export default AuthProvider;