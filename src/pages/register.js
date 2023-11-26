  import React, { useEffect, useState } from "react";

  import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
  } from "firebase/auth";
  import { useDispatch } from "react-redux";
  import {
    addDoc,
    collection,
    doc,
    serverTimestamp,
    setDoc,
  } from "firebase/firestore";
  import { app, db } from "../../firebase";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { setAuthUser } from "@/Redux/userSlice";
import Link from "next/link";
  
  const Register = () => {
  
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [level,setLevel] = useState("User Type")
    const [loading, setLoading] = useState(false);
  
    const dispatch = useDispatch();
    const router = useRouter();
  
    useEffect(() => {
    }, []);
  
  
    const register = async (e) => {
    //   const database = db;
      // const batch = database.batch();
      e.preventDefault();
  
      setLoading(true);
      console.log("Registering");
      const auth = getAuth(app);
      createUserWithEmailAndPassword(getAuth(app), email, password)

      .then((userCredential) => {
        // Signed up 
        const { email, displayName, uid, phoneNumber, photoURL } = userCredential.user;
        const _user = {
            id: uid,
            bio: "",
            createdAt: serverTimestamp(),
            email: email,
            attemptedQuiz:[],
            name: name,
            phone: "",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
            userType:level
          };

        dispatch(setAuthUser({
          user: _user
        }));
        localStorage.setItem("user", JSON.stringify(_user))

        saveUserData(userCredential.user.email,_user)

        setIsLoggedIn(true)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
          errorCode,
          errorMessage
        }
      });
    };

    const saveUserData = async (loc,data) => {
        const docRef = doc(db, "users", loc);
        const res = await setDoc(docRef,data)
        toast.success("Logged In");
        setLoading(false);
        router.push("/home")
        
      
      }
  
    return (
        <div style={{height:"94vh"}} className='row'>
        <div className="col d-flex align-items-center justify-content-center text-center">

            

          <form className="w-30">
          <img src="/assets/img/logo/eduflex-dark.svg" width={300} className="img-fluid mb-5"  alt="Eduflex Logo"/>
          <select onChange={(e) => setLevel(e.target.value)} className='form-control mb-3' value={level}>
                                                        <option disabled value={"User Type"}>User Type</option>
                                                        <option value={"Student"}>Student</option>
                                                        <option value={"Tutor"}>Tutor</option>
                                                    </select>
          <input className="form-control mb-3" autoComplete="false" placeholder="Name" type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <input className="form-control mb-3" autoComplete="false" placeholder="Email" type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="form-control mb-3" autoComplete="false" placeholder="Password" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='btn btn-primary btn-lg w-100 mt-1' onClick={register}>{loading ? "Registering" : "Register"}</button>
          <p className="mt-6">Already have a account? <Link href={"/login"}>Login</Link> </p>

          </form>

        </div>
      </div>
    );
  };
  
  export default Register;
  