import { where } from 'firebase/firestore';
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
import { useDispatch } from "react-redux";
import { collection, doc, getDoc, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { db } from '../../../firebase';

function CourseDetail() {
    const router = useRouter();
  const { id } = router.query;
  const [data,setData] = useState(null);

    useEffect(()=>{
        getData();
    },[]);

    const getData = async () => {
        console.log("getting Data")
        const q = query(collection(db, "courses"),where('id', '==', id));
        const querySnapshot = await getDocs(q);
        let data = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      data.push(doc.data());

    //   setData((data) => [...data, doc.data()]);
    });
    console.log(data[0]);
    setData(data[0])

    }
  return (
   <AppLayout>
    {data ? <>
        <div className="container">
  <div className="page-title-container">
    <div className="row">
      <div className="col-12 col-sm-6">
        <h1 className="mb-0 pb-0 display-4" id="title">
          {data.title}
        </h1>
        <nav
          className="breadcrumb-container d-inline-block"
          aria-label="breadcrumb"
        >
          <ul className="breadcrumb pt-0">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="Course.Explore.html">Courses</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col-12 col-sm-6 d-flex align-items-start justify-content-end">
        {/* <a
          href="Misc.Player.html"
          className="btn btn-primary btn-icon btn-icon-start w-100 w-sm-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="acorn-icons acorn-icons-chevron-right undefined"
          >
            <path d="M7 4L12.6464 9.64645C12.8417 9.84171 12.8417 10.1583 12.6464 10.3536L7 16" />
          </svg>
          <span>Start Now</span>
        </a> */}
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-12 mb-5">
      <h2 className="small-title">Preview</h2>
      <div className="card-img-top">
                           <img className="plyr__poster w-100" src={data?.image} alt="course title" />
                        
                            
                        </div>
      <div className="card mb-5">
        <div className="card-body">
          <h6>Course Description</h6>
          <p className="mb-4">
           {data?.description}
          </p>
         
        </div>
       
      </div>
      <h2 className="small-title">Contents</h2>
      <div className="card mb-5">
      {data.chapters.map((itm,i) => (
        <div key={itm.chapterTitle + i}  className="card-body">
          <div className="row g-0">
            <div className="col-auto sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
              <div className="w-100 d-flex sh-1" />
              <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
              </div>
              <div className="w-100 d-flex h-100 justify-content-center position-relative">
                <div className="line-w-1 bg-separator h-100 position-absolute" />
              </div>
            </div>
            <div className="col mb-4">
                                        <div className="h-100">
                                            <div className="d-flex flex-column justify-content-start">
                                            
                                                <div className="d-flex flex-column ">
                                                    <p className="heading">{itm?.chapterTitle}</p>
                                                    
                                                    {itm.content && <div dangerouslySetInnerHTML={{__html: itm.content}} ></div>}
                                                    
                                                </div>
                                                

                                            </div>
                                        </div>
                                    </div>
          </div>
          
        </div>
        ))}
      </div>
      
    </div>
    
  </div>
</div>

    </> : <h2 className='text-center'>Loading...</h2>}
   </AppLayout>
  )
}

export default CourseDetail