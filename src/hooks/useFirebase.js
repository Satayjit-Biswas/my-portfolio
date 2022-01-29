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
    const [loading, setloading] = useState(false);
    const [adduser, setadduser] = useState(true);
    const [username, setName] = useState("");
    const [useremail, setemail] = useState("");
    const [userrole, setrole] = useState("");

    const auth = getAuth();

    // find user
    //fetch  SingleServerUser
    const url = `http://localhost:5000/user/${user.email}`;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then(
                (data) => (
                    setadduser(false),
                    setName(data.name),
                    setemail(data.email),
                    setrole(data.role)
                )
            );
    }, [user.email]);
    // create gmail user
    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then((result) => {});
    };
    const createUserWithEmail = (email, password, name) => {
        if (password.length > 5) {
            setloading(true);
            createUserWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    const user = result.user;
                    setError("");
                    setUserName(name);
                    if (adduser) {
                        UserServer(name, email, "POST");
                    }
                    setloading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setloading(false);
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
                if (adduser) {
                    UserServer(
                        result.user.displayName,
                        result.user.email,
                        "POST"
                    );
                }
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

    // add to user in server
    const UserServer = (name, email, method) => {
        const adduser = { name: name, email: email, role: "member" };
        fetch("http://localhost:5000/user", {
            method: method,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(adduser),
        }).then();
    };
    return {
        user,
        username,
        useremail,
        userrole,
        error,
        signInUsingGoogle,
        createUserWithEmail,
        signInEmail,
        logOut,
        resetInPass,
        setError,
        setloading,
        loading,
    };
};

export default useFirebase;
