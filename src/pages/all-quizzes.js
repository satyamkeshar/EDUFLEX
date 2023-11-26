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

function AllQuiz() {

    const authUser = useSelector((state) => state.user.user);

    const [data,setData] = useState(null);

    useEffect(()=>{
        getData();
    },[]);

    const getData = async () => {
        console.log("getting Data")
        const q = query(collection(db, "quizzes"));
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

        {data ? <>
            <div className="page-title-container">
            <div className="row">
                <div className="col-12 col-sm-6">
                    <h1 className="mb-0 pb-0 display-4" id="title">All Quizzes</h1>
                    <nav className="breadcrumb-container d-inline-block" aria-label="breadcrumb">
                        <ul className="breadcrumb pt-0">
                            <li className="breadcrumb-item"><Link href="home">Home</Link></li>
                            <li className="breadcrumb-item"><Link href="all-quizzes">Quizzes</Link></li>
                        </ul>
                    </nav>
                </div>

                {authUser?.userType === "Tutor" ? <div className='col-6'>
                        <Link className='btn btn-primary btn-lg float-end' href={"/add-quiz"}>Add Quiz</Link>
                    </div>: <></>}
               
            </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3 row-cols-xxl-3 g-4">

            {data.map((itm,i) => (
                <div key={i} className="col">
                <div className="card h-100">
                  <img
                    src={itm.image ? itm.image : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"}
                    className="card-img-top sh-25"
                    alt="card image"
                  />
                  <div className="card-body">
                    <h5 className="heading mb-2">
                      <a href="Quiz.Detail.html" className="body-link">
                        <span
                          className="clamp-line sh-6 lh-1-5"
                          data-line={2}
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            WebkitBoxOrient: "vertical",
                            display: "-webkit-box",
                            WebkitLineClamp: 2
                          }}
                        >
                          {itm.quizTitle}
                        </span>
                      </a>
                    </h5>
                    <div
                      className="mb-3 text-muted sh-8 clamp-line"
                      data-line={3}
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        WebkitBoxOrient: "vertical",
                        display: "-webkit-box",
                        WebkitLineClamp: 3
                      }}
                    >
                      {itm.quizDescription}
                    </div>
                    <div className="row g-0 align-items-center mb-1">
                      <div className="col-auto">
                        <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
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
                            className="acorn-icons acorn-icons-form-check text-primary"
                          >
                            <path d="M10 14 18 14M10 6 18 6M6.66406 12.6162 4.01763 15.2626C3.82237 15.4579 3.50578 15.4579 3.31052 15.2626L2.1641 14.1162M6.66406 4.61617 4.01763 7.26262C3.82237 7.45788 3.50578 7.45788 3.31052 7.26261L2.1641 6.11617" />
                          </svg>
                        </div>
                      </div>
                      <div className="col ps-3">
                        <div className="row g-0">
                          <div className="col">
                            <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">
                              Questions
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="sh-4 d-flex align-items-center text-alternate">
                            {itm.questions.length}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row g-0 align-items-center mb-1">
                      <div className="col-auto">
                        <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
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
                            className="acorn-icons acorn-icons-clock text-primary"
                          >
                            <path d="M8 12L9.70711 10.2929C9.89464 10.1054 10 9.851 10 9.58579V6" />
                            <circle cx={10} cy={10} r={8} />
                          </svg>
                        </div>
                      </div>
                      <div className="col ps-3">
                        <div className="row g-0">
                          <div className="col">
                            <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">
                              Time
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="sh-4 d-flex align-items-center text-alternate">
                            {itm.time + " min"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row g-0 align-items-center mb-4">
                      <div className="col-auto">
                        <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
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
                            className="acorn-icons acorn-icons-graduation text-primary"
                          >
                            <g clipPath="url(#clip0_418:25)">
                              <path d="M8.55872 3.33498C9.22394 2.99352 9.55655 2.82279 9.91115 2.77976C10.0673 2.76081 10.2251 2.76034 10.3814 2.77837C10.7362 2.81932 11.0698 2.9881 11.737 3.32564L15.9358 5.44982C17.0715 6.02437 17.6393 6.31165 17.7593 6.73226C17.8098 6.9096 17.8104 7.09747 17.7608 7.27511C17.6434 7.69642 17.0772 7.98702 15.9449 8.56823L11.5835 10.807C10.9183 11.1485 10.5857 11.3192 10.2311 11.3622C10.0749 11.3812 9.91709 11.3817 9.76084 11.3636C9.40599 11.3227 9.07239 11.1539 8.40518 10.8164L4.20642 8.69217C3.07074 8.11762 2.5029 7.83035 2.38295 7.40974C2.33237 7.2324 2.33182 7.04453 2.38135 6.86689C2.49883 6.44558 3.06497 6.15498 4.19726 5.57376L8.55872 3.33498Z" />
                              <path d="M4 9V12.1541C4 12.3879 4 12.5048 4.00811 12.6149C4.07044 13.4607 4.48781 14.2406 5.15696 14.7616C5.24405 14.8294 5.34133 14.8942 5.53587 15.0239V15.0239C6.09435 15.3962 6.37359 15.5824 6.64412 15.7302C8.73551 16.8727 11.2645 16.8727 13.3559 15.7302C13.6264 15.5824 13.9057 15.3962 14.4641 15.0239V15.0239C14.6587 14.8942 14.7559 14.8294 14.843 14.7616C15.5122 14.2406 15.9296 13.4607 15.9919 12.6149C16 12.5048 16 12.3879 16 12.1541V9" />
                            </g>
                            <defs>
                              <clipPath id="clip0_418:25">
                                <path d="M0 0H20V20H0z" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div className="col ps-3">
                        <div className="row g-0">
                          <div className="col">
                            <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">
                              Level
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="sh-4 d-flex align-items-center text-alternate">
                             {itm.level}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100">
                      <Link
                        href={"quiz/" + itm.id}
                        className="btn btn-outline-primary w-100 me-1 btn-sm"
                      >
                        Start
                      </Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
  
  
</div>
        </> : <h2 className='text-center'>Loading...</h2>}
    


</AppLayout>
  )
}

export default AllQuiz