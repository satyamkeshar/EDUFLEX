import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

function AppLayout({children,isQuiz}) {

  const router = useRouter()
  const authUser = useSelector((state) => state.user.user);
  useEffect(() => {
    if(!authUser){
      router.push("/login");
      return
    }
  },[])

  return (
    <>
    
{!isQuiz ? <><Navbar />
    <main>

    {children}
    </main>
    </> : <><div className='m-5'>{children}</div></>
}
    </>
  )
}

export default AppLayout