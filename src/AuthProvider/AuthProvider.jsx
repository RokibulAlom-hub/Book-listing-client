import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../Firebase/Firebase.init';

export const  Authcontext = createContext (null)
const AuthProvider = ({children}) => {
    // create user
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //login user
    const logInuser = (email,passward) => {
        return signInWithEmailAndPassword(auth,email,passward)
    }
    const authInfo = {
        createUser,
        logInuser
    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;