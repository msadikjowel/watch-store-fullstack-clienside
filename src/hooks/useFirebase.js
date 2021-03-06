import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {

    // all state
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false);


    const auth = getAuth();

    // register user
    const registerUser = (name, email, password, history, location) => {
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateName(name);
                saveUser(email, name);
                const destination = 'home';
                history.replace(destination);
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
            window.location.reload();

        }).catch((error) => {

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

    // google login
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

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
    }, []);


    // checking admin or not
    useEffect(() => {
        fetch(`https://radiant-brook-77884.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email]);



    // signout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
        }).catch((error) => {
        })
            .finally(() => setIsLoading(false));
    }

    // save user to database
    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://radiant-brook-77884.herokuapp.com/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then()
    }


    return {
        user,
        isLoading,
        authError,
        admin,
        registerUser,
        logOut,
        loginUser,
        signInUsingGoogle,
        setUser,

    }
}

export default useFirebase;