import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = (email, password) => {
    
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            return user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return {
                errorCode,
                errorMessage
            }
            // ..
        });
}

export {SignUp}