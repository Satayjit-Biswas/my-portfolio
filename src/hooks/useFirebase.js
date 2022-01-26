import { useEffect, useState } from "react";
import initializeAuthentication from "../components/User/Firebase/Firebase.init";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    updateProfile,
} from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();
    // create gmail user
    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then((result) => {});
    };
    const createUserWithEmail = (email, password, name) => {
        if (password.length > 5) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    const user = result.user;
                    setError("");
                    setUserName(name);
                })
                .catch((err) => {
                    setError(err.message);
                });
        } else {
            setError("Password must be 6 letter..");
        }
    };
    // Sign in gmail user
    const signInEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError("");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };
    // reset password
    const resetInPass = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setError("");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                // ..
            });
    };
    // sing in google
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // console.log(result.user);
            })
            .catch((err) => {
                setError(err);
            });
    };
    // log out
    const logOut = () => {
        signOut(auth).then(() => {
            setUser("");
        });
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [user]);
    return {
        user,
        error,
        signInUsingGoogle,
        createUserWithEmail,
        signInEmail,
        logOut,
        resetInPass,
        setError,
    };
};

export default useFirebase;
