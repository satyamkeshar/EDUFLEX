import { collection, getDocs, query, where } from 'firebase/firestore';
import Head from 'next/head'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase';
function certificate() {

    const [isPrint,setIsPrint] = useState(false);

    const router = useRouter();
    const { id } = router.query;
    const [data,setData] = useState(null);
  
      useEffect(()=>{
        if(!router.isReady) return;
          getData();
      },[router.isReady]);

    const print = () =>{
        setIsPrint(true);
        setTimeout(()=> {
        window.print();
        setIsPrint(false)

        },500);
    }

    const getData = async () => {
        console.log("getting Data",id)
        const q = query(collection(db, "certificates"),where('id', '==', id));
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
    <>
    <div className='certificate'>
    <div className="cert-container">
  <div className="border-gray">
    <div className="border-red">
      <div className="content">
        <img
          id="mt-logo"
          src="/assets/img/logo/eduflex-dark.svg"
          alt="Logo Goes Here"
        />
        <img id="mt-stamp" src="/assets/img/stamp.png" alt="Certified Stamp" />
        <ul className="credentials">
          <li>
            <p id="cert-id">
              {"Certificate Id: "}
              <span>
                {data?.id}
              </span>
            </p>
          </li>
          
        </ul>
        <div className="copytext-container">
          <div className="congrats-copytext">
            <h1>Certificate of Attempting Quiz</h1>
            <br />
            <h2>
              {"Congratulations "}
              <span>
              {data?.studentName}
              </span>
             
            </h2>
            <br />
            
          </div>
          <div className="course-copytext">
            <h1>
              <span>
               {data?.quizTitle}
              </span>
            </h1>
            <br />
            <h2>
              Quiz Completed on:{" "}
              <span>
                {new Date(data?.completedOn.toDate()).toLocaleDateString("en-us", {
              //   weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
              hour:"2-digit",
              minute:"2-digit",
              second:"2-digit",
            })}
              </span>
            </h2>
            <br />
            
          </div>
          <div className="address-copytext">
            <address>
             {data?.publishedBy} <br/>
             {data?.publisherAddress}
            </address>
            <a href="#" id="mt-site">
              <em>https://www.eduflex.vercel.app</em>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>


{!isPrint && <button onClick={print} className='btn btn-primary position-absolute top-0 m-4'>Print</button> }

    </>
  )
}

export default certificate