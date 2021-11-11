import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    const [authError, setAuthError] = useState('')

    const auth = getAuth();

    // register user
    const registerUser = (name, email, password) => {
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateName(name);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // update name
    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }


    // login
    const loginUser = (email, password, history, location) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || 'home';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    // observe user state changed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])


    // signout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
        }).catch((error) => {
        })
            .finally(() => setIsLoading(false));
    }


    return {
        user,
        isLoading,
        authError,
        registerUser,
        logOut,
        loginUser,

    }
}

export default useFirebase;