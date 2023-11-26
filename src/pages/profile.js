import Link from 'next/link'
import AppLayout from '@/components/AppLayout'
import React, { use, useEffect, useRef, useState } from 'react'
import {
    deleteObject,
    getDownloadURL,
    getStorage,
    ref,
    uploadBytes,
} from "firebase/storage";
import { app, db } from '../../firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { getAuth } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser } from '@/Redux/userSlice';
import { useRouter } from 'next/router';

function Profile() {

    const _authUser = useSelector((state) => state.user.user);

    const dispatch = useDispatch();
    const router = useRouter();

    const [isEdit, setIsEdit] = useState(false);
    const [image, setImage] = useState("/assets/img/profile/profile-2.webp");
    const [description, setDescription] = useState("")
    const [website, setWebsite] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const ImageRef = useRef();
    const [loading, setLoading] = useState(false);



    useEffect(()=> {
        setImage("");
        setDescription(_authUser?.bio)
        setWebsite(_authUser?.website)
        setEmail(_authUser?.email)
        setName(_authUser?.name)
    },[])


    const handelSave = async () => {
        setLoading(true);
        await updateDoc(doc(db, "users", _authUser?.email), {
            name:name,
            email:email,
            bio:description,
            website:website,
            image:image,
          });
          getUser()
    }

    const getUser = async () => {
        const docRef = doc(db, "users", _authUser?.email);
        const docSnap = await getDoc(docRef);
        setLoading(false);
    
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          localStorage.setItem("user", JSON.stringify(docSnap.data()))
          dispatch(
            setAuthUser({
              user: docSnap.data()
            })
          );
          toast.success("Profile updated successfully");
          setIsEdit(false);
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
          toast.error("Something went wrong")
        }
      }


    const pickImage = async () => {
        const fReader = new FileReader();
        fReader.readAsDataURL(ImageRef.current.files[0]);
        fReader.onloadend = async function (event) {
            const response = await fetch(event.target.result);
            const blob = await response.blob();
            const storage = getStorage(app)
            const storageRef = ref(
                storage,
                "course/" + "/" + Math.random().toString(36)
            );
            // console.log(result.assets[0].base64);
            console.log("Waiting to Upload");

            // 'file' comes from the Blob or File API
            uploadBytes(storageRef, blob).then(async (snapshot) => {
                console.log("Uploaded a blob or file!");
                // console.log(.);
                // setImageRef(snapshot.ref);
                const _imageUrl = await getDownloadURL(snapshot.ref);
                setImage(_imageUrl);
            });
        }
    };



    const logout = async () => {
        const auth = getAuth();
        await auth.signOut();
        localStorage.clear();
        dispatch(
            setAuthUser({
                user: null
            })
        );

        router.push("/login")
    }

    return (
        <AppLayout>
            <div className="page-title-container">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <h1 className="mb-0 pb-0 display-4" id="title">My Profile</h1>
                        <nav className="breadcrumb-container d-inline-block" aria-label="breadcrumb">
                            <ul className="breadcrumb pt-0">
                                <li className="breadcrumb-item"><Link href="/home">Home</Link></li>
                                <li className="breadcrumb-item"><Link href="/profile">Profile</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-12 col-sm-6 d-flex align-items-start justify-content-end">


                        {isEdit ? <button onClick={handelSave} className="btn btn-icon btn-lg btn-icon-start btn-primary position-fixed w-100 w-sm-auto z-index-1000">

                            <span className='fs-6'>{loading ? "Saving..." : "Edit"}</span>
                        </button> :
                            <button onClick={() => setIsEdit(true)} className="btn btn-icon btn-lg btn-icon-start btn-primary position-fixed w-100 w-sm-auto z-index-1000">

                                <span className='fs-6'>Edit</span>
                            </button>
                        }

                        <button onClick={logout} style={{ marginRight: "130px" }} className="btn btn-icon btn-lg btn-icon-start btn-danger position-fixed w-100 w-sm-auto z-index-1000">

                            <span className='fs-6'>Logout</span>
                        </button>

                    </div>
                </div>
            </div>
            <div className="col-12">
                <h2 className="small-title">Profile</h2>

                {isEdit ? <>
                    <div className="card mb-5">
                        <div className="card-body mb-n5">
                            <div className="d-flex align-items-center flex-column mb-1">
                                <div className="mb-4 d-flex align-items-center flex-column">
                                    <div className="sw-13 position-relative mb-3">
                                        {!isEdit ? 
                                        <img className="img-fluid rounded-xl" src={image} alt="course title" /> 
                                        : 
                                        <>

                                        {image ?  <img className="img-fluid rounded-xl" src={image} alt="course title" /> : <input ref={ImageRef} onChange={pickImage} type="file" style={{ padding: "30% 10%" }} className='input-select img-fluid rounded-xl' accept="image/png, image/jpeg" />}
                                            
                                        </>
                                        
                                        
                                        
                                        }
                                    </div>

                                    <div className="h5 mb-0">
                                        {isEdit ?
                                         <input className="form-control" type='text' value={name} onChange={(e) => setName(e.target.value)} /> 
                                         : _authUser?.name}
                                         </div>
                                    <div className="text-muted mb-2">Student</div>

                                </div>

                            </div>
                            <div className="mb-5">
                                <p className="text-small text-muted mb-2">ABOUT ME</p>
                                <textarea rows="4" className="form-control mb-3" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div className="mb-5">
                                <p className="text-small text-muted mb-2">CONTACT</p>
                                <a href="#" className="d-flex align-items-center body-link mb-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={17}
                                        height={17}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="acorn-icons acorn-icons-screen me-2"
                                    >
                                        <path d="M10 15V16V18M8 18H12" />
                                        <path d="M14.5 2C15.9045 2 16.6067 2 17.1111 2.33706C17.3295 2.48298 17.517 2.67048 17.6629 2.88886C18 3.39331 18 4.09554 18 5.5L18 11.5C18 12.9045 18 13.6067 17.6629 14.1111C17.517 14.3295 17.3295 14.517 17.1111 14.6629C16.6067 15 15.9045 15 14.5 15L5.5 15C4.09554 15 3.39331 15 2.88886 14.6629C2.67048 14.517 2.48298 14.3295 2.33706 14.1111C2 13.6067 2 12.9045 2 11.5L2 5.5C2 4.09554 2 3.39331 2.33706 2.88886C2.48298 2.67048 2.67048 2.48298 2.88886 2.33706C3.39331 2 4.09554 2 5.5 2L14.5 2Z" />
                                        <path d="M9 7 7 10M13.2412 7 11.2412 10" />
                                    </svg>
                                    <span className="align-middle"><input className="form-control" type='text' value={website} onChange={(e) => setWebsite(e.target.value)} /></span>
                                </a>
                                <a href="#" className="d-flex align-items-center body-link">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={17}
                                        height={17}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="acorn-icons acorn-icons-email me-2"
                                    >
                                        <path d="M18 7L11.5652 10.2174C10.9086 10.5457 10.5802 10.7099 10.2313 10.7505C10.0776 10.7684 9.92238 10.7684 9.76869 10.7505C9.41977 10.7099 9.09143 10.5457 8.43475 10.2174L2 7" />
                                        <path d="M14.5 4C15.9045 4 16.6067 4 17.1111 4.33706C17.3295 4.48298 17.517 4.67048 17.6629 4.88886C18 5.39331 18 6.09554 18 7.5L18 12.5C18 13.9045 18 14.6067 17.6629 15.1111C17.517 15.3295 17.3295 15.517 17.1111 15.6629C16.6067 16 15.9045 16 14.5 16L5.5 16C4.09554 16 3.39331 16 2.88886 15.6629C2.67048 15.517 2.48298 15.3295 2.33706 15.1111C2 14.6067 2 13.9045 2 12.5L2 7.5C2 6.09554 2 5.39331 2.33706 4.88886C2.48298 4.67048 2.67048 4.48298 2.88886 4.33706C3.39331 4 4.09554 4 5.5 4L14.5 4Z" />
                                    </svg>
                                    <span className="align-middle"><input className="form-control" type='email' value={email} onChange={(e) => setEmail(e.target.value)} /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </> : <>
                    <div className="card mb-5">
                        <div className="card-body mb-n5">
                            <div className="d-flex align-items-center flex-column mb-1">
                                <div className="mb-4 d-flex align-items-center flex-column">
                                    <div className="sw-13 position-relative mb-3">
                                        <img
                                            src={_authUser?.image}
                                            className="img-fluid rounded-xl"
                                            alt="thumb"
                                        />
                                    </div>
                                    <div className="h5 mb-0">{_authUser?.name}</div>
                                    <div className="text-muted mb-2 mt-2">{_authUser?.userType}</div>

                                </div>

                            </div>
                            <div className="mb-5">
                                <p className="text-small text-muted mb-2">ABOUT ME</p>
                                <p>
                                    {_authUser?.bio}
                                </p>
                            </div>
                            <div className="mb-5">
                                <p className="text-small text-muted mb-2">CONTACT</p>
                                <a href="#" className="d-block body-link mb-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={17}
                                        height={17}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="acorn-icons acorn-icons-screen me-2"
                                    >
                                        <path d="M10 15V16V18M8 18H12" />
                                        <path d="M14.5 2C15.9045 2 16.6067 2 17.1111 2.33706C17.3295 2.48298 17.517 2.67048 17.6629 2.88886C18 3.39331 18 4.09554 18 5.5L18 11.5C18 12.9045 18 13.6067 17.6629 14.1111C17.517 14.3295 17.3295 14.517 17.1111 14.6629C16.6067 15 15.9045 15 14.5 15L5.5 15C4.09554 15 3.39331 15 2.88886 14.6629C2.67048 14.517 2.48298 14.3295 2.33706 14.1111C2 13.6067 2 12.9045 2 11.5L2 5.5C2 4.09554 2 3.39331 2.33706 2.88886C2.48298 2.67048 2.67048 2.48298 2.88886 2.33706C3.39331 2 4.09554 2 5.5 2L14.5 2Z" />
                                        <path d="M9 7 7 10M13.2412 7 11.2412 10" />
                                    </svg>
                                    <span className="align-middle">{_authUser?.website}</span>
                                </a>
                                <a href="#" className="d-block body-link">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={17}
                                        height={17}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="acorn-icons acorn-icons-email me-2"
                                    >
                                        <path d="M18 7L11.5652 10.2174C10.9086 10.5457 10.5802 10.7099 10.2313 10.7505C10.0776 10.7684 9.92238 10.7684 9.76869 10.7505C9.41977 10.7099 9.09143 10.5457 8.43475 10.2174L2 7" />
                                        <path d="M14.5 4C15.9045 4 16.6067 4 17.1111 4.33706C17.3295 4.48298 17.517 4.67048 17.6629 4.88886C18 5.39331 18 6.09554 18 7.5L18 12.5C18 13.9045 18 14.6067 17.6629 15.1111C17.517 15.3295 17.3295 15.517 17.1111 15.6629C16.6067 16 15.9045 16 14.5 16L5.5 16C4.09554 16 3.39331 16 2.88886 15.6629C2.67048 15.517 2.48298 15.3295 2.33706 15.1111C2 14.6067 2 13.9045 2 12.5L2 7.5C2 6.09554 2 5.39331 2.33706 4.88886C2.48298 4.67048 2.67048 4.48298 2.88886 4.33706C3.39331 4 4.09554 4 5.5 4L14.5 4Z" />
                                    </svg>
                                    <span className="align-middle">{_authUser?.email}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </>}







            </div>

        </AppLayout>
    )
}

export default Profile