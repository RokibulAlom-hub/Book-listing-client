import { createUserWithEmailAndPassword,
     onAuthStateChanged, signInWithEmailAndPassword,
      updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.init';

export const  Authcontext = createContext (null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    // create user
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //login user
    const logInuser = (email,passward) => {
        return signInWithEmailAndPassword(auth,email,passward)
    }
    // observer settings
    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser)
            console.log('user observer is watching', currentUser);
            
        })
        return () => {
            unsubscriber();
        }
    },[])

    // update profile
    const updateUserData = (user,updatedata)=>{
        return updateProfile(user,updatedata)
    }
    const authInfo = {
        createUser,
        logInuser,
        updateUserData,
        user,
        setUser
    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;