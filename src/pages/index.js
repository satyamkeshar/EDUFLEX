import { setAuthUser } from '@/Redux/userSlice'
import AppLayout from '@/components/AppLayout'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { initializeApp } from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { app, db } from '../../firebase'

function Index() {
  const router = useRouter();
  const dispatch = useDispatch();

  const authUser = useSelector((state) => state.user.user);


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firebaseApp, setFirebaseApp] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };
  useEffect(() => {
    // const auth = getAuth();
    // console.log(auth.currentUser)
    // auth.signOut()
    

    const _user = JSON.parse(localStorage.getItem("user"))

    dispatch(setAuthUser({
      user: _user
    }));
    console.log(authUser);

    if(authUser) {
      router.push("/home");
    } else {
      router.push("/login")
    }
    

  }, [])

  return (
    <>
      
    </>

  )
}

export default Index