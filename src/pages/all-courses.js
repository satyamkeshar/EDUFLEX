import AppLayout from '@/components/AppLayout'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { collection, doc, getDoc, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

function AllCourse() {

    const authUser = useSelector((state) => state.user.user);

    const [data,setData] = useState(null);

    useEffect(()=>{
        getData();
    },[]);

    const getData = async () => {
        console.log("getting Data")
        const q = query(collection(db, "courses"));
        const querySnapshot = await getDocs(q);
        let data = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      data.push(doc.data());

    //   setData((data) => [...data, doc.data()]);
    });
    console.log(data);
    setData(data)

    }

  return (
    <AppLayout >
        {data ?  <>
        <div className="page-title-container">
                <div className="row">
                    <div className="col-6 col-sm-6">
                        <h1 className="mb-0 pb-0 display-4" id="title">All Courses</h1>
                        <nav className="breadcrumb-container d-inline-block" aria-label="breadcrumb">
                            <ul className="breadcrumb pt-0">
                                <li className="breadcrumb-item"><Link href="home">home</Link></li>
                                <li className="breadcrumb-item"><Link href="all-courses">Courses</Link></li>
                            </ul>
                        </nav>
                    </div>

                    {authUser?.userType === "Tutor" ? <div className='col-6'>
                        <Link className='btn btn-primary btn-lg float-end' href={"/add-course"}>Add Course</Link>
                    </div>: <></>}

                    
                   
                </div>
            </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 mb-5">
  {data.map((itm,index) => (
    <div key={index} className="col">
    <div className="card h-100">
      <img
        src={itm.image}
        className="card-img-top sh-22"
        alt="card image"
      />
      <div className="card-body">
        <h5 className="heading mb-0">
          <Link href={"course/" + itm.id} className="body-link stretched-link">
            {itm.title}
          </Link>
        </h5>
        <p className='mt-3'>{itm.description}</p>
      </div>
      
    </div>
  </div>
  ))}
  
  
</div>
</> : <h2 className='text-center'>Loading...</h2> }
       

    </AppLayout>
   

  )
}

export default AllCourse