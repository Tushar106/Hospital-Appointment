import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth, db } from '../../../firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);
                setUser(user);
            }
            else {
                setIsAuthenticated(false)
                setUser(null)
            }
        })
        return unsub
    }, [])

    // Function to handle user login
    const login = async (email, password) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            return { success: true }
        } catch (error) {
            const msg = error.message
            if (error.message == "Firebase: Error (auth/invalid-email).")
                msg = "Invalid Email"
            if (error.message == "Firebase: Error (auth/invalid-credential).")
                msg = "Email & Password Incorrect"
            return { success: false, message: msg }
        }
    };

    // Function to handle user logout
    const logout = async () => {
        try {
            // Perform logout logic here
            await signOut(auth);
            setUser(null);
            return { success: true }
        } catch (error) {
            return { success: false, message: error.message }
        }
    };

    const register = async (email, password) => {
        console.log(email, password)
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log(response)
            await setDoc(doc(db, "users", response?.user?.uid), {
                userId: response?.user?.uid,
                email: response?.user?.email
            })
            return { success: true, data: response?.user }
        } catch (error) {
            const msg = error.message
            if (error.message == "Firebase: Error (auth/email-already-in-use).")
                msg = "Email already in Use"
            if (error.message == "Firebase: Error (auth/invalid-email).")
                msg = "Invalid Email"
            return { success: false, message: msg }
        }
    }

    // Value object to be provided by the context
    const authContextValue = {
        user,
        isAuthenticated,
        login,
        logout,
        register
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};