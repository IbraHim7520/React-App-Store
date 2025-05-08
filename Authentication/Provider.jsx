import React from 'react';
import { Context } from './Context';
import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Provider = ({children}) => {


    const userSignup = (email , pass)=>{
        return createUserWithEmailAndPassword(auth , email , pass)
    }
    const userLogin = (email , pass)=>{
        return signInWithEmailAndPassword(auth, email , pass)
    }


    const Info = {
        userSignup,
        userLogin
    }
    return (
        <Context value={Info}  >
            {children}
        </Context>
    );
};

export default Provider;