import { _courseData } from '@/Data/courseData'
import AppLayout from '@/components/AppLayout'
import ContentEditor from '@/components/ContentEditor'
import React, { use, useEffect, useRef, useState } from 'react'
import {
    deleteObject,
    getDownloadURL,
    getStorage,
    ref,
    uploadBytes,
} from "firebase/storage";
import { app, db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

function AddCourse() {

    const [courseData, setCourseData] = useState(_courseData);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [content, setContent] = useState("");
    const [chapterTitle, setChapterTitle] = useState("")
    const [chapters, setChapters] = useState([{ chapterTitle: "", content: "" }]);
    const [image, setImage] = useState(null);


    const ImageRef = useRef();

    const authUser = useSelector((state) => state.user.user);
    const router = useRouter()

    useEffect(() => {

        if (authUser?.userType === "Student") {
            router.back();
        }

    }, [])

    const handelAddCourse = () => {
        const lastIndex = chapters.length - 1;
        chapters.pop()
        const _chapter = [...chapters, {
            chapterTitle: chapterTitle,
            content: content
        }]
        _chapter.push({ chapterTitle: "", content: "" });

        setChapters(_chapter)
        setContent("");
        setChapterTitle("");

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

    const saveCourse = async () => {

        if (title === "" || description === "" || image === "") {
            toast.error("Please fill all the data");
            return
        }


        const data = {
            title,
            chapters,
            description,
            image,
        }
        console.log(chapterTitle);
        console.log(chapters[chapters.length - 1].chapterTitle);

        if (chapterTitle != chapters[chapters.length - 1].chapterTitle) {
            chapters.pop();
            chapters.push({ chapterTitle: chapterTitle, content: content });
        }

        if (chapters[chapters.length - 1].chapterTitle === "") {
            chapters.pop();
        }

        const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

        const _id = genRanHex(8)

        // console.log(data);
        data.id = _id

        try {

            const docRef = doc(db, "courses", _id);
            const res = await setDoc(docRef, data);
            toast.success("Course saved and published!");
            // if(res) {

            //     setLoading(false);
            // }
            setChapters([{ chapterTitle: "", content: "" }]);
            setTitle("");
            setDescription("");
            setImage("");

        } catch (error) {
            toast.error("Something went wrong!")
        }



        // console.log(res);
    }

    return (
        <>
            <AppLayout>
                <div className="page-title-container">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <h1 className="mb-0 pb-0 display-4" id="title">Add Course</h1>
                            <nav className="breadcrumb-container d-inline-block" aria-label="breadcrumb">
                                <ul className="breadcrumb pt-0">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item"><a href="Course.Explore.html">Courses</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-12 col-sm-6 d-flex align-items-start justify-content-end">
                            <button onClick={saveCourse} className="btn btn-icon btn-lg btn-icon-start btn-primary position-fixed w-100 w-sm-auto z-index-1000">

                                <span className='fs-6'>Save</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-5">
                        <h2 className="small-title">Preview</h2>
                        <div className="card-img-top">
                            {image ? <img className="plyr__poster w-100" src={image} alt="course title" /> : <input ref={ImageRef} onChange={pickImage} type="file" className='input-select' accept="image/png, image/jpeg" />}


                        </div>
                        <div className="card mb-5">

                            <div className="card-body">
                                <h6>Course Title</h6>
                                <input className="form-control mb-3" type='email' value={title} onChange={(e) => setTitle(e.target.value)} />
                                <h6>Course Description</h6>
                                <textarea rows="6" className="form-control mb-3" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>

                        </div>
                        <h2 className="small-title">Table of Contents</h2>
                        <div className="card mb-5">
                            <div className="card-body">


                                <div className="row g-0">

                                    <div className="col mb-4">
                                        <div className="h-100">
                                            <div className="d-flex flex-column justify-content-start">
                                                {chapters.map((itm) => (
                                                    <div key={itm.chapterTitle} className="d-flex flex-column ">
                                                        <p className="heading">Chapter Title</p>
                                                        {itm.chapterTitle ? <input className="form-control mb-3" type='email' value={itm.chapterTitle} onChange={() => { }} /> : <input className="form-control mb-3" type='email' value={chapterTitle} onChange={(e) => setChapterTitle(e.target.value)} />}

                                                        <p className="heading">Chapter Content</p>
                                                        {itm.content && <div dangerouslySetInnerHTML={{ __html: itm.content }} className="form-control mb-7" ></div>}

                                                    </div>
                                                ))}
                                                <ContentEditor content={content} setContent={setContent} />

                                            </div>
                                        </div>
                                    </div>
                                </div>




                                <button onClick={handelAddCourse} className="btn btn-icon btn-icon-start btn-primary w-100 w-sm-auto float-end mt-5">
                                    <span>Add Chapter</span>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </AppLayout>

        </>
    )
}

export default AddCourse