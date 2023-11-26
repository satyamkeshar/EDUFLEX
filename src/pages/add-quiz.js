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

function AddQuiz() {

    const [courseData, setCourseData] = useState(_courseData);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [marks, setMarks] = useState("")
    const [time, setTime] = useState("")
    const [level, setLevel] = useState("Beginner")
    const [content, setContent] = useState("");
    const [chapterTitle, setChapterTitle] = useState("")
    const [chapters, setChapters] = useState([{ chapterTitle: "", content: "" }]);
    const [image, setImage] = useState(null);

    const [question, setQuestion] = useState("");

    const [quizQuestions, setQuizQuestions] = useState({ questionNumber: "", question: "", options: ["", "", "", ""] });
    const [quesionNumber, setQuestionNumber] = useState([1]);
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");

    const authUser = useSelector((state) => state.user.user);
    const router = useRouter()

    useEffect(() => {

        if(authUser?.userType === "Student") {
            router.back();
        }

    },[])


    const ImageRef = useRef();

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

        if (title === "" || description === "" || image === "" || marks === "" || time == "") {
            toast.error("Please fill all the data");
            return
        }


        const data = {
            quizTitle: title,
            quizDescription: description,
            marks: marks,
            image: image,
            time: time,
            questions: allQuestions,
            level: level
        }
        // console.log(chapterTitle);
        // console.log(chapters[chapters.length - 1].chapterTitle);

        // if (chapterTitle != chapters[chapters.length - 1].chapterTitle) {
        //     chapters.pop();
        //     chapters.push({ chapterTitle: chapterTitle, content: content });
        // }

        // if (chapters[chapters.length - 1].chapterTitle === "") {
        //     chapters.pop();
        // }

        const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

        const _id = genRanHex(8)

        // console.log(data);
        data.id =_id

        // console.log(data);

        try {

            const docRef = doc(db, "quizzes", _id);
            const res = await setDoc(docRef, data);
            toast.success("Quiz saved and published!");
            // if(res) {

            //     setLoading(false);
            // }
            setAllQuestions([]);
            setMarks("");
            setTime("");
            setLevel("Beginner")
            setTitle("");
            setDescription("");
            setImage("");
            setQuestionNumber([1])
            setOption1("")
            setOption2("")
            setOption3("")
            setOption4("")
            setQuestion("");
            setCorrectOption("");

        } catch (error) {
            toast.error("Something went wrong!")
        }



        // console.log(res);
    }


    const [correctOption, setCorrectOption] = useState("");
    const [allQuestions, setAllQuestions] = useState([]);

    const addNewQuestion = () => {
        
        if(question === "") {
            toast.error("Question cannot be empty");
            return;
        }
        if(option1 === "" || option2 === "" || option3 === "" || option4 ==="") {
            toast.error("Options cannot be empty");
            return
        }
        if(correctOption === "") {
            toast.error("Please select a correct option");
            return;
        }
        const _questionNumber = quesionNumber[quesionNumber.length - 1] + 1;
        const newQuestion = {
            questionNumber: _questionNumber - 1,
            question: question,
            options: [option1, option2, option3, option4],
            correctOption: correctOption
        }

        setAllQuestions((_question) => [..._question, newQuestion])

        // console.log(allQuestions);

        setQuestionNumber((qu) => [...qu, _questionNumber]);
        setOption1("")
        setOption2("")
        setOption3("")
        setOption4("")
        setQuestion("");
        setCorrectOption("");
    }


    return (
        <>
            <AppLayout>
                <div className="page-title-container">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <h1 className="mb-0 pb-0 display-4" id="title">Add Quiz</h1>
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
                    <div className="col-lg-7 col-xxl-8">
                        <h2 className="small-title">Questions</h2>

                        {allQuestions.length > 0 && allQuestions.map((qt) => (
                            <div key={Math.random()} className="card mb-3">
                                <div className="card-body">
                                    <div className="d-flex flex-row align-content-center align-items-center mb-5">
                                        <div className="sw-5 me-4">
                                            <div className="border border-1 border-primary rounded-xl sw-5 sh-5 text-primary d-flex justify-content-center align-items-center">
                                                {qt?.questionNumber}
                                            </div>
                                        </div>
                                        <div className="heading mb-0">
                                            {qt?.question}
                                        </div>
                                    </div>

                                    {qt.options.map((_opt, index) => (

                                        <div key={_opt} className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                                            <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <input
                                                        type="radio"
                                                        className="btn-check"

                                                        name="radioOutline"
                                                        id={index + 1}
                                                        onChange={() => { }}
                                                        checked={qt.correctOption === (index + 1) ? true : false}

                                                    />
                                                    <label
                                                        className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center"
                                                        htmlFor={index + 1}
                                                        style={qt.correctOption === (index + 1) ? { border: "1px solid var(--primary)" } : {}}

                                                    >
                                                        {index + 1}
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="mb-0 text-alternate">
                                                {_opt}
                                            </div>
                                        </div>
                                    ))}



                                </div>
                            </div>

                        ))}

                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="d-flex flex-row align-content-center align-items-center mb-5">
                                    <div className="sw-5 me-4">
                                        <div className="border border-1 border-primary rounded-xl sw-5 sh-5 text-primary d-flex justify-content-center align-items-center">
                                            {quesionNumber[quesionNumber.length - 1]}
                                        </div>
                                    </div>
                                    <div className="heading mb-0 w-100">
                                        <input placeholder='Question' className="form-control " type='text' value={question} onChange={(e) => setQuestion(e.target.value)} />
                                    </div>
                                </div>
                                <h6 className='mb-3'>Also select the correct option</h6>
                                <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                                    <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <input
                                                type="radio"
                                                className="btn-check"
                                                id="answer1_1"
                                                name="radioOutline"
                                                onChange={(e) => setCorrectOption(1)}
                                                checked={correctOption === 1 ? true : false}
                                            />
                                            <label
                                                className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center "
                                                htmlFor="answer1_1"
                                            >
                                                1
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-0 text-alternate w-100">
                                        <input placeholder={"Option 1"} className="form-control w-100" type='text' value={option1} onChange={(e) => setOption1(e.target.value)} />
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                                    <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <input
                                                type="radio"
                                                className="btn-check"
                                                id="answer1_2"
                                                name="radioOutline"
                                                onChange={(e) => setCorrectOption(2)}
                                                checked={correctOption === 2 ? true : false}
                                            />
                                            <label
                                                className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center "
                                                htmlFor="answer1_2"
                                            >
                                                2
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-0 text-alternate w-100">
                                        <input placeholder={"Option 2"} className="form-control w-100" type='text' value={option2} onChange={(e) => setOption2(e.target.value)} />
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                                    <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <input
                                                type="radio"
                                                className="btn-check"
                                                id="answer1_3"
                                                name="radioOutline"
                                                onChange={(e) => setCorrectOption(3)}
                                                checked={correctOption === 3 ? true : false}
                                            />
                                            <label
                                                className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center "
                                                htmlFor="answer1_3"
                                            >
                                                3
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-0 text-alternate w-100">
                                        <input placeholder={"Option 3"} className="form-control w-100" type='text' value={option3} onChange={(e) => setOption3(e.target.value)} />
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                                    <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <input
                                                type="radio"
                                                className="btn-check"
                                                id="answer1_4"
                                                name="radioOutline"
                                                onChange={(e) => setCorrectOption(4)}
                                                checked={correctOption === 4 ? true : false}
                                            />
                                            <label
                                                className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center "
                                                htmlFor="answer1_4"
                                            >
                                                4
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-0 text-alternate w-100">
                                        <input placeholder={"Option 4"} className="form-control w-100" type='text' value={option4} onChange={(e) => setOption4(e.target.value)} />
                                    </div>
                                </div>

                            </div>
                        </div>



                        <div className="row">
                            <div className="col-12 text-center">
                                <button onClick={addNewQuestion} className="btn btn-outline-primary btn-icon btn-icon-end ">
                                    <span>Save and Add New Question</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-xxl-4">
                        <h2 className="small-title">Quiz Info</h2>
                        <div className="card mb-5">
                            {image ? <img className="card-img-top sh-25" src={image} alt="course title" /> : <input ref={ImageRef} onChange={pickImage} type="file" className='input-select card-img-top sh-25' accept="image/png, image/jpeg" style={{padding:"23%"}} />}

                            <div className="card-body">
                                <div className="mb-3 text-muted">
                                    <h6>Quiz Title</h6>
                                    <input className="form-control mb-3" type='email' value={title} onChange={(e) => setTitle(e.target.value)} />
                                    <h6>Quiz Description</h6>
                                    <textarea rows="6" className="form-control mb-3" value={description} onChange={(e) => setDescription(e.target.value)} />

                                </div>
                                <div className="row g-0 align-items-center mb-3">
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
                                                <div className="text-alternate sh-4 d-flex align-items-center lh-1-25 justify-content-between">
                                                    Marks per question
                                                    <input className="form-control w-25" type='text' value={marks} onChange={(e) => setMarks(e.target.value)} />

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="row g-0 align-items-center mb-3">
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
                                                <div className="text-alternate sh-4 d-flex align-items-center lh-1-25 justify-content-between">
                                                    Time in minutes
                                                    <input className="form-control w-25" type='number' value={time} onChange={(e) => setTime(e.target.value)} />

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="row g-0 align-items-center">
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
                                                <div className="text-alternate sh-4 d-flex align-items-center lh-1-25 justify-content-between">
                                                    Level
                                                    <select onChange={(e) => setLevel(e.target.value)} className='form-control w-60' value={level}>
                                                        <option value={"Beginner"}>Beginner</option>
                                                        <option value={"Intermediate"}>Intermediate</option>
                                                        <option value={"Advance"}>Advance</option>
                                                    </select>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            </AppLayout>

        </>
    )
}

export default AddQuiz