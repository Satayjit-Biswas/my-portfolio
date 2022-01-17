import { useEffect, useState } from "react";
import initializeAuthentication from "../components/User/Firebase/Firebase.init";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();

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
        logOut,
    };
};

export default useFirebase;
