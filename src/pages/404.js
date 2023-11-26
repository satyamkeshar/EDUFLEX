import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function ErrorPage() {

    const router = useRouter();

    useEffect(() => {
        router.back();
    },[])

  return (
    <div>Invalid page redirecting....</div>
  )
}

export default ErrorPage