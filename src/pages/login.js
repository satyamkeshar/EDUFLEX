import React, { useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { doc, getDoc, serverTimestamp } from "firebase/firestore";
import { app, db } from "../../firebase";
import toast from "react-hot-toast";
import { setAuthUser } from "@/Redux/userSlice";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const _user = JSON.parse(localStorage.getItem("user"))

    dispatch(setAuthUser({
      user: _user
    }));

    if(_user) {
      router.push("/home");
    }
  }, []);

  const router = useRouter();
  const loginIn = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Login");
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        getUser(userCredential)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("Invalid Credentials");
        setLoading(false);
      });

  };

  const getUser = async (userCredential) => {
    const docRef = doc(db, "users", userCredential.user.email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      localStorage.setItem("user", JSON.stringify(docSnap.data()))
      dispatch(
        setAuthUser({
          user: docSnap.data()
        })
      );
      toast.success("Login Success")
      setLoading(false);
      router.push("/home")
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      toast.error("User Not Found")
      setLoading(false);
    }
  }

  return (
    <>
      <div style={{ height: "94vh" }} className='row'>
        <div className="col d-flex align-items-center justify-content-center text-center">

          <form className="w-30">
            <img src="/assets/img/logo/eduflex-dark.svg" width={300} className="img-fluid mb-5" alt="Eduflex Logo" />
            <input placeholder="Email" className="form-control mb-3" type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" className="form-control mb-3" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='btn btn-primary btn-lg w-100 mt-1' onClick={loginIn}>{loading ? "Logging In..." : "Login"}</button>
            <p className="mt-6">Don't have a account? <Link href={"/register"}>Register</Link> </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
