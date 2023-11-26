import AppLayout from '@/components/AppLayout'
import Timer from '@/components/Timer';
import { arrayUnion, collection, doc, getDoc, getDocs, orderBy, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";

import React, { useState, useRef, useEffect } from "react";
import { db } from '../../../firebase';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';


function AttemptQuiz() {
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        getQuiz();
    }, [])
    const _authUser = useSelector((state) => state.user.user);
    const timerExpire = () => {
        submitQuiz()
        alert("Time Up");
    }

    const [timer, setTimer] = useState(0);
    const [data, setData] = useState(null);
    let _answer = [];

    const getQuiz = async () => {

        const q = query(collection(db, "quizzes"), where('id', '==', id));
        const querySnapshot = await getDocs(q);

        let data = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            data.push(doc.data());

            //   setData((data) => [...data, doc.data()]);
        });

        if (data[0]) {
            const resp = data[0]
            console.log("Document data:", resp);

            if (confirm("Press OK to start!") == true) {
                setData(resp)

                // setTimer(parseInt(resp.time));
            } else {
                router.push("/all-quizzes")
            }


        } else {
            // docSnap.data() will be undefined in this case
            toast.error("Quiz Not Found!")
        }
    }

    const [answerState, setAnswerState] = useState([])

    const handelOptionClick = (questionNumber, selectedAnswer) => {
        console.log({ questionNumber, selectedAnswer });

        if (_answer.length === 0) {
            _answer.push({ questionNumber, selectedAnswer });
        } else {
            let flag = false;
            _answer.map((itm) => {
                if (itm.questionNumber === questionNumber) {
                    itm.selectedAnswer = selectedAnswer;
                    flag = true;
                }
            })

            if (!flag) {
                _answer.push({ questionNumber, selectedAnswer });
            }
        }

        console.log(_answer)
        // setAnswerState(_answer);
        // console.log(answerState);
    }

    let totalMarks = 0;

    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitQuiz = async () => {
        setIsSubmitted(true);
        const marksPerQuestion = parseInt(data.marks);
        data.questions.forEach((itm, i) => {
            for (let i = 0; i < _answer.length; i++) {
                if (_answer[i].questionNumber === itm.questionNumber && _answer[i].selectedAnswer === itm.correctOption) {
                    totalMarks = totalMarks + marksPerQuestion;
                }
            }
        });
        console.log(totalMarks);

        const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

        const _id = genRanHex(8)

        // console.log(data);
        const _data = {
            id: _id,
            studentName: _authUser?.name,
            quizTitle: data.quizTitle,
            completedOn: serverTimestamp(),
            publishedBy: "EduFlex",
            publisherAddress: "Gazibad Delhi 400142",
            totalMarks: totalMarks,
            outOf: marksPerQuestion * data.questions.length,
        }

        // console.log(data);

        try {

            const docRef = doc(db, "certificates", _id);
            const res = await setDoc(docRef, _data);
            toast.success("Certificate saved and published!");


        }
        catch (error) {
            toast.error("Something went wrong!")
        }


        const userRef = doc(db, "users", _authUser?.email);
        if (!((totalMarks / (marksPerQuestion * data.questions.length)) * 100 > 75)) {
            alert("You have failed the quiz got " + totalMarks + " out of " + marksPerQuestion * data.questions.length)
            router.push("/all-quizzes");
            return;
        }

        updateDoc(userRef, {
            attemptedQuiz: arrayUnion({
                quizId: id,
                marksObtained: totalMarks,
                outOf: marksPerQuestion * data.questions.length,
                certificateId: _id
            }),
        }).then(() => {
            router.push("/certificate/" + _id);
        });


    }

    return (
        <AppLayout isQuiz={true}>
            {data && <div className="container">
                <div className="page-title-container">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <h1 className="mb-0 pb-0 display-4" id="title">
                                {data.quizTitle}
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
                                        <a href="Quiz.List.html">Quizes</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-12 col-sm-6 d-flex align-items-start justify-content-end">
                            <div className="card">
                                <div style={{ width: "200px" }} className="card-body">
                                    <div id="timer">
                                        <div className="row gx-5">
                                            <div className="col-auto">
                                                {!isSubmitted &&
                                                    <>
                                                        <div className="display-5 text-primary mb-1"> <Timer expiryTimestamp={data.time} timerExpire={timerExpire}></Timer></div>
                                                        <div>Hrs Remaining</div>
                                                    </>
                                                }

                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5">

                    <div className="col-lg-12 col-xxl-12">
                        <h2 className="small-title">Questions</h2>
                        {data.questions.map((q, i) => (
                            <div key={i} className="card mb-3">
                                <div className="card-body">
                                    <div className="d-flex flex-row align-content-center align-items-center mb-5">
                                        <div className="sw-5 me-4">
                                            <div className="border border-1 border-primary rounded-xl sw-5 sh-5 text-primary d-flex justify-content-center align-items-center">
                                                {i + 1}
                                            </div>
                                        </div>
                                        <div className="heading mb-0">
                                            {q.question}
                                        </div>
                                    </div>
                                    <form>

                                        {q.options.map((opt, ind) => (
                                            <div key={opt + Math.random()} className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                                                <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                                                    <div className="d-flex justify-content-center align-items-center">

                                                        <input
                                                            disabled={isSubmitted}
                                                            type="radio"
                                                            className="btn-check"
                                                            id={"answer" + i + ind}
                                                            name={"option"}
                                                            value={"answer" + i + ind}
                                                            onClick={() => handelOptionClick(q.questionNumber, ind + 1)}
                                                        />
                                                        <label
                                                            className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link"
                                                            htmlFor={"answer" + i + ind}
                                                        >

                                                            {ind + 1}
                                                        </label>

                                                    </div>
                                                </div>
                                                <div className="mb-0 text-alternate">
                                                    {opt}
                                                </div>
                                            </div>
                                        ))}
                                    </form>



                                </div>
                            </div>
                        ))}


                        <div className="row">
                            <div className="col-12 text-center">
                                <button disabled={isSubmitted} onClick={submitQuiz} className="btn btn-outline-primary btn-icon btn-icon-end sw-25">
                                    <span>Done</span>
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
                                        className="acorn-icons acorn-icons-check undefined"
                                    >
                                        <path d="M16 5L7.7051 14.2166C7.32183 14.6424 6.65982 14.6598 6.2547 14.2547L3 11" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}


        </AppLayout>
    )
}

export default AttemptQuiz