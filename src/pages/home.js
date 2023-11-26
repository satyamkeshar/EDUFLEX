import React, { useEffect } from 'react'
import AppLayout from '@/components/AppLayout'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { SignUp } from '@/services/signUp'
import { useDispatch } from 'react-redux'
import { setAuthUser } from '@/Redux/userSlice'
import toast from 'react-hot-toast'
import { db } from '../../firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'

function Home() {

  useEffect(()=> {
    // SignUp("mayank@test.com" , 123456)
    // getUser();
    setData();
  } ,[]);

  const dispatch = useDispatch();

  const setData = async () => {
    // const res = await db.collection('users').doc("test@mail.com").set({ "email": "test@mail.com" });
    const docRef = doc(db, "users", "test+19@mail.com");
    const res = await setDoc(docRef,{ "email": "test@mail.com" })
  
    console.log(res);
  }

  const getUser = async () => {
    const docRef = doc(db, "users", "manish@distinctcloud.io");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          dispatch(
            setAuthUser({
              user: docSnap.data()
            })
          );
          toast.success("Login Success")
          // setLoading(false);
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
          toast.error("User Not Found")
          // setLoading(false);
        }
  }

  return (
    <AppLayout>
  <div className="container">
  <div className="page-title-container">
    <div className="row">
      <div className="col-12 col-md-7">
        <h1 className="mb-0 pb-0 display-4" id="title">
          Dashboard
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
              <a href="#">Dashboards</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-xl-6 mb-5">
      <h2 className="small-title">Continue Learning</h2>
      <div className="scroll-out">
        <div
          className="scroll-by-count os-host os-theme-dark os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition"
          data-count={3}
          style={{ height: "360.008px", marginBottom: "-8px" }}
        >
          <div className="os-resize-observer-host observed">
            <div
              className="os-resize-observer"
              style={{ left: 0, right: "auto" }}
            />
          </div>
          <div
            className="os-size-auto-observer observed"
            style={{ height: "calc(100% + 1px)", float: "left" }}
          >
            <div className="os-resize-observer" />
          </div>
          <div
            className="os-content-glue"
            style={{ margin: "0px -15px", width: 708, height: 367 }}
          />
          <div className="os-padding">
            <div
              className="os-viewport os-viewport-native-scrollbars-invisible"
              style={{ overflowY: "scroll" }}
            >
              <div
                className="os-content"
                style={{ padding: "0px 15px", height: "100%", width: "100%" }}
              >
                <div className="card mb-2">
                  <div className="row g-0 sh-14">
                    <div className="col-auto">
                      <a
                        href="Course.Detail.html"
                        className="d-block position-relative h-100"
                      >
                        <img
                          src="/assets/img/course/small/course-1.webp"
                          alt="alternate text"
                          className="card-img card-img-horizontal sw-14 sw-lg-18"
                        />
                      </a>
                    </div>
                    <div className="col">
                      <div className="card-body pt-0 pb-0 h-100 d-flex align-items-center">
                        <div className="w-100">
                          <div className="d-flex flex-row justify-content-between mb-2">
                            <a
                              href="Course.Detail.html"
                              className="font-heading mb-1"
                            >
                              React Web Developer Course
                            </a>
                            <div className="text-muted">67%</div>
                          </div>
                          <div className="progress mb-2">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow={67}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "67%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="row g-0 sh-14">
                    <div className="col-auto">
                      <a
                        href="Course.Detail.html"
                        className="d-block position-relative h-100"
                      >
                        <img
                          src="/assets/img/course/small/course-2.webp"
                          alt="alternate text"
                          className="card-img card-img-horizontal sw-14 sw-lg-18"
                        />
                      </a>
                    </div>
                    <div className="col">
                      <div className="card-body pt-0 pb-0 h-100 d-flex align-items-center">
                        <div className="w-100">
                          <div className="d-flex flex-row justify-content-between mb-2">
                            <a
                              href="Course.Detail.html"
                              className="font-heading mb-1"
                            >
                              Python: From Zero to Expert
                            </a>
                            <div className="text-muted">85%</div>
                          </div>
                          <div className="progress mb-2">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow={85}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "85%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="row g-0 sh-14">
                    <div className="col-auto">
                      <a
                        href="Course.Detail.html"
                        className="d-block position-relative h-100"
                      >
                        <img
                          src="/assets/img/course/small/course-3.webp"
                          alt="alternate text"
                          className="card-img card-img-horizontal sw-14 sw-lg-18"
                        />
                      </a>
                    </div>
                    <div className="col">
                      <div className="card-body pt-0 pb-0 h-100 d-flex align-items-center">
                        <div className="w-100">
                          <div className="d-flex flex-row justify-content-between mb-2">
                            <a
                              href="Course.Detail.html"
                              className="font-heading mb-1"
                            >
                              Learn and Understand NodeJS
                            </a>
                            <div className="text-muted">14%</div>
                          </div>
                          <div className="progress mb-2">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow={14}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "14%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="row g-0 sh-14">
                    <div className="col-auto">
                      <a
                        href="Course.Detail.html"
                        className="d-block position-relative h-100"
                      >
                        <img
                          src="/assets/img/course/small/course-4.webp"
                          alt="alternate text"
                          className="card-img card-img-horizontal sw-14 sw-lg-18"
                        />
                      </a>
                    </div>
                    <div className="col">
                      <div className="card-body pt-0 pb-0 h-100 d-flex align-items-center">
                        <div className="w-100">
                          <div className="d-flex flex-row justify-content-between mb-2">
                            <a
                              href="Course.Detail.html"
                              className="font-heading mb-1"
                            >
                              HTML 5 - The Complete Guide
                            </a>
                            <div className="text-muted">63%</div>
                          </div>
                          <div className="progress mb-2">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow={63}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "63%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="row g-0 sh-14">
                    <div className="col-auto">
                      <a
                        href="Course.Detail.html"
                        className="d-block position-relative h-100"
                      >
                        <img
                          src="/assets/img/course/small/course-5.webp"
                          alt="alternate text"
                          className="card-img card-img-horizontal sw-14 sw-lg-18"
                        />
                      </a>
                    </div>
                    <div className="col">
                      <div className="card-body pt-0 pb-0 h-100 d-flex align-items-center">
                        <div className="w-100">
                          <div className="d-flex flex-row justify-content-between mb-2">
                            <a
                              href="Course.Detail.html"
                              className="font-heading mb-1"
                            >
                              Getting Started with Gulpjs
                            </a>
                            <div className="text-muted">36%</div>
                          </div>
                          <div className="progress mb-2">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow={46}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "46%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
            <div className="os-scrollbar-track os-scrollbar-track-off">
              <div
                className="os-scrollbar-handle"
                style={{ width: "100%", transform: "translate(0px, 0px)" }}
              />
            </div>
          </div>
          <div
            className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden"
            style={{ height: "calc(100% - 8px)" }}
          >
            <div className="os-scrollbar-track os-scrollbar-track-off">
              <div
                className="os-scrollbar-handle"
                style={{ height: "60%", transform: "translate(0px, 139px)" }}
              />
            </div>
          </div>
          <div className="os-scrollbar-corner" />
        </div>
      </div>
    </div>
    <div className="col-xl-6 mb-5">
      <h2 className="small-title">Recommended for You</h2>
      <div className="card w-100 sh-50 sh-md-40 h-xl-100-card hover-img-scale-up position-relative">
        <img
          src="/assets/img/banner/cta-standard-3.webp"
          className="card-img h-100 scale position-absolute"
          alt="card image"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
          <div>
            <div className="cta-1 mb-3 text-white w-75 w-sm-50 opacity-75">
              Complete Web Developer Zero to Mastery
            </div>
            <div className="w-50 text-white mb-3 opacity-75">
              Liquorice caramels chupa chups bonbon. Jelly-o candy sugar
              chocolate cake caramels apple pie lollipop jujubes.
            </div>
            <div className="mb-2">
              <div className="br-wrapper br-theme-cs-icon d-inline-block">
                <div className="br-wrapper">
                  <select
                    className="rating"
                    name="rating"
                    autoComplete="off"
                    data-readonly="true"
                    data-initial-rating={5}
                    style={{ display: "none" }}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                  <div className="br-widget br-readonly">
                    <a
                      href="#"
                      data-rating-value={1}
                      data-rating-text={1}
                      className="br-selected"
                    />
                    <a
                      href="#"
                      data-rating-value={2}
                      data-rating-text={2}
                      className="br-selected"
                    />
                    <a
                      href="#"
                      data-rating-value={3}
                      data-rating-text={3}
                      className="br-selected"
                    />
                    <a
                      href="#"
                      data-rating-value={4}
                      data-rating-text={4}
                      className="br-selected"
                    />
                    <a
                      href="#"
                      data-rating-value={5}
                      data-rating-text={5}
                      className="br-selected br-current"
                    />
                    <div className="br-current-rating">5</div>
                  </div>
                </div>
              </div>
              <div className="text-muted d-inline-block text-small align-text-top">
                (572)
              </div>
            </div>
            <div>$ 27.50</div>
          </div>
          <div>
            <a
              href="Course.Detail.html"
              className="btn btn-icon btn-icon-start btn-primary mt-3 stretched-link"
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
              <span>View</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h2 className="small-title">Achievements</h2>
  <div className="row gx-2">
    <div className="col-12 p-0">
      <div
        className="glide glide--ltr glide--slider glide--swipeable"
        id="glideAchievements"
      >
        <div className="glide__track" data-glide-el="track">
          <div
            className="glide__slides"
            style={{
              transition: "transform 0ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s",
              width: "1661.25px",
              transform: "translate3d(0px, 0px, 0px)"
            }}
          >
            <div
              className="glide__slide glide__slide--active"
              style={{ width: "332.25px", marginRight: 0 }}
            >
              <div className="card mb-5 sh-25">
                <div className="card-body text-center align-items-center d-flex flex-column justify-content-between">
                  <div className="d-flex sw-6 sh-6 bg-gradient-light mb-4 align-items-center justify-content-center rounded-xl position-relative mt-3">
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
                      className="acorn-icons acorn-icons-badge text-white"
                    >
                      <path d="M13 11L13.8819 17.1734C13.9258 17.4809 13.9478 17.6347 13.8803 17.7191C13.8518 17.7547 13.8142 17.7819 13.7713 17.7976C13.6699 17.835 13.531 17.7655 13.2532 17.6266L10.3913 16.1957C10.2271 16.1136 10.1451 16.0725 10.0578 16.0624C10.0194 16.0579 9.98059 16.0579 9.94217 16.0624C9.85494 16.0725 9.77286 16.1136 9.60869 16.1957L6.74684 17.6266C6.46901 17.7655 6.3301 17.835 6.22866 17.7976C6.18584 17.7819 6.14815 17.7547 6.11967 17.7191C6.05219 17.6347 6.07416 17.4809 6.11809 17.1734L7 11" />
                      <circle cx={10} cy={7} r={5} />
                    </svg>
                    <div className="achievement bg position-absolute">
                      <svg
                        width={75}
                        height={75}
                        viewBox="0 0 75 75"
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.3422 7.24333C21.5482 2.69119 29.2117 0 37.5 0C45.7883 0 53.4518 2.69119 59.6578 7.24333C60.5562 7.90233 60.7431 9.15516 60.0752 10.0416C59.4073 10.9281 58.1375 11.1124 57.2391 10.4534C51.7048 6.39402 44.8833 4 37.5 4C30.1167 4 23.2952 6.39403 17.7609 10.4535C16.8625 11.1124 15.5927 10.9281 14.9248 10.0416C14.2569 9.15516 14.4438 7.90233 15.3422 7.24333ZM65.0942 15.1001C66.006 14.4592 67.2717 14.6688 67.9213 15.5684C72.3763 21.7377 75 29.3164 75 37.5C75 45.6836 72.3763 53.2623 67.9213 59.4316C67.2717 60.3311 66.006 60.5408 65.0942 59.8999C64.1825 59.2589 63.97 58.0101 64.6196 57.1105C68.599 51.5998 70.9459 44.8284 70.9459 37.5C70.9459 30.1716 68.599 23.4002 64.6196 17.8895C63.97 16.9899 64.1825 15.7411 65.0942 15.1001ZM9.90579 15.1001C10.8175 15.7411 11.03 16.9899 10.3804 17.8895C6.40105 23.4002 4.05405 30.1716 4.05405 37.5C4.05405 44.8284 6.40105 51.5998 10.3804 57.1105C11.03 58.0101 10.8175 59.2589 9.90579 59.8999C8.99405 60.5408 7.72832 60.3312 7.07871 59.4316C2.62373 53.2623 0 45.6836 0 37.5C0 29.3164 2.62373 21.7377 7.07871 15.5684C7.72832 14.6689 8.99404 14.4592 9.90579 15.1001ZM14.9248 64.9584C15.5927 64.0719 16.8625 63.8876 17.7609 64.5466C23.2952 68.606 30.1167 71 37.5 71C44.8833 71 51.7048 68.606 57.2391 64.5465C58.1375 63.8876 59.4073 64.0719 60.0752 64.9584C60.7431 65.8448 60.5562 67.0977 59.6578 67.7567C53.4518 72.3088 45.7883 75 37.5 75C29.2117 75 21.5483 72.3088 15.3422 67.7567C14.4438 67.0977 14.2569 65.8448 14.9248 64.9584Z"
                        />
                      </svg>
                    </div>
                    <div className="achievement level position-absolute">
                      <svg
                        width={75}
                        height={75}
                        viewBox="0 0 75 75"
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.3422 7.24333C21.5482 2.69119 29.2117 0 37.5 0C45.7883 0 53.4517 2.69119 59.6578 7.24333C60.5562 7.90233 60.7431 9.15516 60.0752 10.0416C59.4073 10.9281 58.1375 11.1124 57.2391 10.4534C51.7048 6.39402 44.8833 4 37.5 4C30.1167 4 23.2952 6.39403 17.7609 10.4535C16.8625 11.1124 15.5927 10.9281 14.9248 10.0416C14.2569 9.15516 14.4438 7.90233 15.3422 7.24333Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="card-text mb-0 d-flex">Javascript Novice</p>
                  <p className="text-center mb-0 d-flex text-primary">
                    Level 1
                  </p>
                </div>
              </div>
            </div>
            <div
              className="glide__slide"
              style={{ width: "332.25px", marginLeft: 0, marginRight: 0 }}
            >
              <div className="card mb-5 sh-25">
                <div className="card-body text-center align-items-center d-flex flex-column justify-content-between">
                  <div className="d-flex sw-6 sh-6 bg-gradient-light mb-4 align-items-center justify-content-center rounded-xl position-relative mt-3">
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
                      className="acorn-icons acorn-icons-prize text-white"
                    >
                      <path d="M13.9648 4.65556C14.0116 3.91 14.035 3.53723 13.8812 3.15792C13.8154 2.99559 13.6774 2.78085 13.5641 2.66421C13.2992 2.39166 13.0438 2.34054 12.5329 2.23828C11.8795 2.1075 11.0294 2 10 2C8.97063 2 8.12048 2.1075 7.4671 2.23828C6.95624 2.34054 6.70081 2.39166 6.43592 2.66421C6.32255 2.78085 6.18462 2.99559 6.11879 3.15792C5.96498 3.53723 5.98839 3.91 6.0352 4.65556L6.22934 7.74712C6.38376 10.1446 8.01734 11.9953 9.9834 12H10.0166C11.9827 11.9953 13.6162 10.1446 13.7707 7.74712L13.9648 4.65556Z" />
                      <path d="M14 9.00001 14.8112 8.84227C15.1077 8.78463 15.2559 8.75581 15.3851 8.7118 16.0292 8.49235 16.5176 7.96043 16.6814 7.29992 16.7142 7.16743 16.7303 7.01731 16.7625 6.71706V6.71706C16.8017 6.3505 16.8214 6.16722 16.813 6.00794 16.771 5.20807 16.2559 4.51039 15.5038 4.23483 15.3541 4.17996 15.1731 4.14477 14.8112 4.07441L14.4286 4M6 9.00001 5.18876 8.84227C4.89235 8.78463 4.74414 8.75581 4.61493 8.7118 3.97078 8.49235 3.4824 7.96043 3.31865 7.29992 3.2858 7.16743 3.26971 7.01731 3.23754 6.71706V6.71706C3.19827 6.3505 3.17863 6.16722 3.18699 6.00794 3.22896 5.20807 3.7441 4.51039 4.49617 4.23483 4.64594 4.17996 4.82688 4.14477 5.18876 4.07441L5.57143 4" />
                      <path d="M12.5 15C12.9659 15 13.1989 15 13.3827 15.0761C13.6277 15.1776 13.8224 15.3723 13.9239 15.6173C14 15.8011 14 16.0341 14 16.5V16.5C14 16.9659 14 17.1989 13.9239 17.3827C13.8224 17.6277 13.6277 17.8224 13.3827 17.9239C13.1989 18 12.9659 18 12.5 18L7.5 18C7.03406 18 6.80109 18 6.61732 17.9239C6.37229 17.8224 6.17761 17.6277 6.07612 17.3827C6 17.1989 6 16.9659 6 16.5V16.5C6 16.0341 6 15.8011 6.07612 15.6173C6.17761 15.3723 6.37229 15.1776 6.61732 15.0761C6.80109 15 7.03406 15 7.5 15L12.5 15Z" />
                      <path d="M10 12L10 15" />
                    </svg>
                    <div className="achievement bg position-absolute">
                      <svg
                        width={75}
                        height={75}
                        viewBox="0 0 75 75"
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.3422 7.24333C21.5482 2.69119 29.2117 0 37.5 0C45.7883 0 53.4518 2.69119 59.6578 7.24333C60.5562 7.90233 60.7431 9.15516 60.0752 10.0416C59.4073 10.9281 58.1375 11.1124 57.2391 10.4534C51.7048 6.39402 44.8833 4 37.5 4C30.1167 4 23.2952 6.39403 17.7609 10.4535C16.8625 11.1124 15.5927 10.9281 14.9248 10.0416C14.2569 9.15516 14.4438 7.90233 15.3422 7.24333ZM65.0942 15.1001C66.006 14.4592 67.2717 14.6688 67.9213 15.5684C72.3763 21.7377 75 29.3164 75 37.5C75 45.6836 72.3763 53.2623 67.9213 59.4316C67.2717 60.3311 66.006 60.5408 65.0942 59.8999C64.1825 59.2589 63.97 58.0101 64.6196 57.1105C68.599 51.5998 70.9459 44.8284 70.9459 37.5C70.9459 30.1716 68.599 23.4002 64.6196 17.8895C63.97 16.9899 64.1825 15.7411 65.0942 15.1001ZM9.90579 15.1001C10.8175 15.7411 11.03 16.9899 10.3804 17.8895C6.40105 23.4002 4.05405 30.1716 4.05405 37.5C4.05405 44.8284 6.40105 51.5998 10.3804 57.1105C11.03 58.0101 10.8175 59.2589 9.90579 59.8999C8.99405 60.5408 7.72832 60.3312 7.07871 59.4316C2.62373 53.2623 0 45.6836 0 37.5C0 29.3164 2.62373 21.7377 7.07871 15.5684C7.72832 14.6689 8.99404 14.4592 9.90579 15.1001ZM14.9248 64.9584C15.5927 64.0719 16.8625 63.8876 17.7609 64.5466C23.2952 68.606 30.1167 71 37.5 71C44.8833 71 51.7048 68.606 57.2391 64.5465C58.1375 63.8876 59.4073 64.0719 60.0752 64.9584C60.7431 65.8448 60.5562 67.0977 59.6578 67.7567C53.4518 72.3088 45.7883 75 37.5 75C29.2117 75 21.5483 72.3088 15.3422 67.7567C14.4438 67.0977 14.2569 65.8448 14.9248 64.9584Z"
                        />
                      </svg>
                    </div>
                    <div className="achievement level position-absolute">
                      <svg
                        width={75}
                        height={75}
                        viewBox="0 0 75 75"
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.3422 7.24333C21.5482 2.69119 29.2117 0 37.5 0C45.7883 0 53.4517 2.69119 59.6578 7.24333C60.5562 7.90233 60.7431 9.15516 60.0752 10.0416C59.4073 10.9281 58.1375 11.1124 57.2391 10.4534C51.7048 6.39402 44.8833 4 37.5 4C30.1167 4 23.2952 6.39403 17.7609 10.4535C16.8625 11.1124 15.5927 10.9281 14.9248 10.0416C14.2569 9.15516 14.4438 7.90233 15.3422 7.24333ZM65.0942 15.1001C66.006 14.4592 67.2717 14.6688 67.9213 15.5684C72.3763 21.7377 75 29.3164 75 37.5C75 45.6836 72.3763 53.2623 67.9213 59.4316C67.2717 60.3311 66.006 60.5408 65.0942 59.8999C64.1825 59.2589 63.97 58.0101 64.6196 57.1105C68.599 51.5998 70.9459 44.8284 70.9459 37.5C70.9459 30.1716 68.5989 23.4002 64.6196 17.8895C63.97 16.9899 64.1825 15.7411 65.0942 15.1001ZM14.9248 64.9584C15.5927 64.0719 16.8625 63.8876 17.7609 64.5466C23.2952 68.606 30.1167 71 37.5 71C44.8833 71 51.7048 68.606 57.2391 64.5465C58.1375 63.8876 59.4073 64.0719 60.0752 64.9584C60.7431 65.8448 60.5562 67.0977 59.6578 67.7567C53.4517 72.3088 45.7883 75 37.5 75C29.2117 75 21.5482 72.3088 15.3422 67.7567C14.4438 67.0977 14.2569 65.8448 14.9248 64.9584Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="card-text mb-0 d-flex">CSS Expert</p>
                  <p className="text-center mb-0 d-flex text-primary">
                    Level 3
                  </p>
                </div>
              </div>
            </div>
            <div
              className="glide__slide"
              style={{ width: "332.25px", marginLeft: 0, marginRight: 0 }}
            >
              <div className="card mb-5 sh-25">
                <div className="card-body text-center align-items-center d-flex flex-column justify-content-between">
                  <div className="d-flex sw-6 sh-6 bg-gradient-light mb-4 align-items-center justify-content-center rounded-xl position-relative mt-3">
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
                      className="acorn-icons acorn-icons-medal text-white"
                    >
                      <circle cx={10} cy={14} r={4} />
                      <path d="M13 11L15.7501 4.81228C16.3379 3.4897 15.3698 2 13.9225 2H10H6.07752C4.63021 2 3.66209 3.4897 4.2499 4.81228L7 11" />
                      <path d="M11 14H9M10 15 10 13" />
                    </svg>
                    <div className="achievement bg position-absolute">
                      <svg
                        width={75}
                        height={75}
                        viewBox="0 0 75 75"
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.3422 7.24333C21.5482 2.69119 29.2117 0 37.5 0C45.7883 0 53.4518 2.69119 59.6578 7.24333C60.5562 7.90233 60.7431 9.15516 60.0752 10.0416C59.4073 10.9281 58.1375 11.1124 57.2391 10.4534C51.7048 6.39402 44.8833 4 37.5 4C30.1167 4 23.2952 6.39403 17.7609 10.4535C16.8625 11.1124 15.5927 10.9281 14.9248 10.0416C14.2569 9.15516 14.4438 7.90233 15.3422 7.24333ZM65.0942 15.1001C66.006 14.4592 67.2717 14.6688 67.9213 15.5684C72.3763 21.7377 75 29.3164 75 37.5C75 45.6836 72.3763 53.2623 67.9213 59.4316C67.2717 60.3311 66.006 60.5408 65.0942 59.8999C64.1825 59.2589 63.97 58.0101 64.6196 57.1105C68.599 51.5998 70.9459 44.8284 70.9459 37.5C70.9459 30.1716 68.599 23.4002 64.6196 17.8895C63.97 16.9899 64.1825 15.7411 65.0942 15.1001ZM9.90579 15.1001C10.8175 15.7411 11.03 16.9899 10.3804 17.8895C6.40105 23.4002 4.05405 30.1716 4.05405 37.5C4.05405 44.8284 6.40105 51.5998 10.3804 57.1105C11.03 58.0101 10.8175 59.2589 9.90579 59.8999C8.99405 60.5408 7.72832 60.3312 7.07871 59.4316C2.62373 53.2623 0 45.6836 0 37.5C0 29.3164 2.62373 21.7377 7.07871 15.5684C7.72832 14.6689 8.99404 14.4592 9.90579 15.1001ZM14.9248 64.9584C15.5927 64.0719 16.8625 63.8876 17.7609 64.5466C23.2952 68.606 30.1167 71 37.5 71C44.8833 71 51.7048 68.606 57.2391 64.5465C58.1375 63.8876 59.4073 64.0719 60.0752 64.9584C60.7431 65.8448 60.5562 67.0977 59.6578 67.7567C53.4518 72.3088 45.7883 75 37.5 75C29.2117 75 21.5483 72.3088 15.3422 67.7567C14.4438 67.0977 14.2569 65.8448 14.9248 64.9584Z"
                        />
                      </svg>
                    </div>
                    <div className="achievement level position-absolute">
                      <svg
                        width={75}
                        height={75}
                        viewBox="0 0 75 75"
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.3422 7.24333C21.5482 2.69119 29.2117 0 37.5 0C45.7883 0 53.4517 2.69119 59.6578 7.24333C60.5562 7.90233 60.7431 9.15516 60.0752 10.0416C59.4073 10.9281 58.1375 11.1124 57.2391 10.4534C51.7048 6.39402 44.8833 4 37.5 4C30.1167 4 23.2952 6.39403 17.7609 10.4535C16.8625 11.1124 15.5927 10.9281 14.9248 10.0416C14.2569 9.15516 14.4438 7.90233 15.3422 7.24333ZM65.0942 15.1001C66.006 14.4592 67.2717 14.6688 67.9213 15.5684C72.3763 21.7377 75 29.3164 75 37.5C75 45.6836 72.3763 53.2623 67.9213 59.4316C67.2717 60.3311 66.006 60.5408 65.0942 59.8999C64.1825 59.2589 63.97 58.0101 64.6196 57.1105C68.599 51.5998 70.9459 44.8284 70.9459 37.5C70.9459 30.1716 68.5989 23.4002 64.6196 17.8895C63.97 16.9899 64.1825 15.7411 65.0942 15.1001Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="card-text mb-0 d-flex">HTML Apprentice</p>
                  <p className="text-center mb-0 d-flex text-primary">
                    Level 2
                  </p>
                </div>
              </div>
            </div>
            <div
              className="glide__slide"
              style={{ width: "332.25px", marginLeft: 0, marginRight: 0 }}
            >
              <div className="card mb-5 sh-25">
                <div className="card-body text-center align-items-center d-flex flex-column justify-content-between">
                  <div className="d-flex sw-6 sh-6 bg-gradient-light mb-4 align-items-center justify-content-center rounded-xl position-relative mt-3">
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
                      className="acorn-icons acorn-icons-star text-white"
                    >
                      <path d="M9.09413 2.93747C9.45349 2.16887 10.5465 2.16887 10.9059 2.93747L12.4188 6.17326C12.5602 6.47565 12.8431 6.68755 13.173 6.73816L16.6418 7.2702C17.4452 7.39343 17.7738 8.37275 17.2073 8.9556L14.6304 11.6071C14.4098 11.834 14.3097 12.152 14.3604 12.4644L14.9594 16.1503C15.0933 16.9748 14.2174 17.5904 13.4871 17.1851L10.4852 15.5193C10.1834 15.3518 9.81658 15.3518 9.51477 15.5193L6.51293 17.1851C5.78261 17.5904 4.90669 16.9748 5.04064 16.1503L5.63956 12.4644C5.69032 12.152 5.5902 11.834 5.36961 11.6071L2.79266 8.9556C2.22619 8.37275 2.55478 7.39343 3.35816 7.2702L6.82695 6.73816C7.1569 6.68755 7.43984 6.47565 7.58122 6.17326L9.09413 2.93747Z" />
                    </svg>
                    <div className="achievement bg position-absolute">
                      <svg
                        width={75}
                        height={75}
                        viewBox="0 0 75 75"
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.3422 7.24333C21.5482 2.69119 29.2117 0 37.5 0C45.7883 0 53.4518 2.69119 59.6578 7.24333C60.5562 7.90233 60.7431 9.15516 60.0752 10.0416C59.4073 10.9281 58.1375 11.1124 57.2391 10.4534C51.7048 6.39402 44.8833 4 37.5 4C30.1167 4 23.2952 6.39403 17.7609 10.4535C16.8625 11.1124 15.5927 10.9281 14.9248 10.0416C14.2569 9.15516 14.4438 7.90233 15.3422 7.24333ZM65.0942 15.1001C66.006 14.4592 67.2717 14.6688 67.9213 15.5684C72.3763 21.7377 75 29.3164 75 37.5C75 45.6836 72.3763 53.2623 67.9213 59.4316C67.2717 60.3311 66.006 60.5408 65.0942 59.8999C64.1825 59.2589 63.97 58.0101 64.6196 57.1105C68.599 51.5998 70.9459 44.8284 70.9459 37.5C70.9459 30.1716 68.599 23.4002 64.6196 17.8895C63.97 16.9899 64.1825 15.7411 65.0942 15.1001ZM9.90579 15.1001C10.8175 15.7411 11.03 16.9899 10.3804 17.8895C6.40105 23.4002 4.05405 30.1716 4.05405 37.5C4.05405 44.8284 6.40105 51.5998 10.3804 57.1105C11.03 58.0101 10.8175 59.2589 9.90579 59.8999C8.99405 60.5408 7.72832 60.3312 7.07871 59.4316C2.62373 53.2623 0 45.6836 0 37.5C0 29.3164 2.62373 21.7377 7.07871 15.5684C7.72832 14.6689 8.99404 14.4592 9.90579 15.1001ZM14.9248 64.9584C15.5927 64.0719 16.8625 63.8876 17.7609 64.5466C23.2952 68.606 30.1167 71 37.5 71C44.8833 71 51.7048 68.606 57.2391 64.5465C58.1375 63.8876 59.4073 64.0719 60.0752 64.9584C60.7431 65.8448 60.5562 67.0977 59.6578 67.7567C53.4518 72.3088 45.7883 75 37.5 75C29.2117 75 21.5483 72.3088 15.3422 67.7567C14.4438 67.0977 14.2569 65.8448 14.9248 64.9584Z"
                        />
                      </svg>
                    </div>
                    <div className="achievement level position-absolute">
                      <svg
                        width={75}
                        height={75}
                        viewBox="0 0 75 75"
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.3422 7.24333C21.5482 2.69119 29.2117 0 37.5 0C45.7883 0 53.4517 2.69119 59.6578 7.24333C60.5562 7.90233 60.7431 9.15516 60.0752 10.0416C59.4073 10.9281 58.1375 11.1124 57.2391 10.4534C51.7048 6.39402 44.8833 4 37.5 4C30.1167 4 23.2952 6.39403 17.7609 10.4535C16.8625 11.1124 15.5927 10.9281 14.9248 10.0416C14.2569 9.15516 14.4438 7.90233 15.3422 7.24333Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="card-text mb-0 d-flex">Php Novice</p>
                  <p className="text-center mb-0 d-flex text-primary">
                    Level 1
                  </p>
                </div>
              </div>
            </div>
            <div
              className="glide__slide"
              style={{ width: "332.25px", marginLeft: 0 }}
            >
              <div className="card mb-5 sh-25">
                <div className="card-body text-center align-items-center d-flex flex-column justify-content-between">
                  <div className="d-flex sw-6 sh-6 bg-gradient-light mb-4 align-items-center justify-content-center rounded-xl position-relative mt-3">
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
                      className="acorn-icons acorn-icons-crown text-white"
                    >
                      <path d="M16.6886 7.08684C17.3413 6.6952 17.6677 6.49938 17.8904 6.57894C17.9835 6.61222 18.0647 6.67236 18.1236 6.75176C18.2646 6.94164 18.1723 7.31088 17.9877 8.04936L16.6628 13.3489C16.3913 14.4347 16.2556 14.9776 15.9125 15.3518C15.7628 15.515 15.587 15.6522 15.3923 15.7579C14.9461 16 14.3865 16 13.2673 16L6.73272 16C5.61349 16 5.05387 16 4.60765 15.7579C4.41299 15.6522 4.23723 15.515 4.08753 15.3518C3.7444 14.9776 3.60867 14.4347 3.33722 13.3489L2.01234 8.04936C1.82772 7.31088 1.73541 6.94164 1.87637 6.75176C1.93532 6.67236 2.01648 6.61222 2.10961 6.57894C2.3323 6.49938 2.65867 6.6952 3.3114 7.08684L5.74037 8.54422C6.04484 8.7269 6.19707 8.81824 6.34979 8.8101C6.41588 8.80658 6.48061 8.78997 6.54023 8.76124C6.678 8.69485 6.76746 8.5415 6.94636 8.2348L9.24419 4.29567C9.52938 3.80678 9.67197 3.56234 9.87113 3.50921C9.95557 3.48669 10.0444 3.48669 10.1289 3.50921C10.328 3.56234 10.4706 3.80678 10.7558 4.29567L13.0536 8.2348C13.2325 8.5415 13.322 8.69485 13.4598 8.76124C13.5194 8.78997 13.5841 8.80658 13.6502 8.8101C13.8029 8.81824 13.9552 8.7269 14.2596 8.54422L16.6886 7.08684Z" />
                    </svg>
                    <div className="achievement bg position-absolute">
                      <svg
                        width={75}
                        height={75}
                        viewBox="0 0 75 75"
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.3422 7.24333C21.5482 2.69119 29.2117 0 37.5 0C45.7883 0 53.4518 2.69119 59.6578 7.24333C60.5562 7.90233 60.7431 9.15516 60.0752 10.0416C59.4073 10.9281 58.1375 11.1124 57.2391 10.4534C51.7048 6.39402 44.8833 4 37.5 4C30.1167 4 23.2952 6.39403 17.7609 10.4535C16.8625 11.1124 15.5927 10.9281 14.9248 10.0416C14.2569 9.15516 14.4438 7.90233 15.3422 7.24333ZM65.0942 15.1001C66.006 14.4592 67.2717 14.6688 67.9213 15.5684C72.3763 21.7377 75 29.3164 75 37.5C75 45.6836 72.3763 53.2623 67.9213 59.4316C67.2717 60.3311 66.006 60.5408 65.0942 59.8999C64.1825 59.2589 63.97 58.0101 64.6196 57.1105C68.599 51.5998 70.9459 44.8284 70.9459 37.5C70.9459 30.1716 68.599 23.4002 64.6196 17.8895C63.97 16.9899 64.1825 15.7411 65.0942 15.1001ZM9.90579 15.1001C10.8175 15.7411 11.03 16.9899 10.3804 17.8895C6.40105 23.4002 4.05405 30.1716 4.05405 37.5C4.05405 44.8284 6.40105 51.5998 10.3804 57.1105C11.03 58.0101 10.8175 59.2589 9.90579 59.8999C8.99405 60.5408 7.72832 60.3312 7.07871 59.4316C2.62373 53.2623 0 45.6836 0 37.5C0 29.3164 2.62373 21.7377 7.07871 15.5684C7.72832 14.6689 8.99404 14.4592 9.90579 15.1001ZM14.9248 64.9584C15.5927 64.0719 16.8625 63.8876 17.7609 64.5466C23.2952 68.606 30.1167 71 37.5 71C44.8833 71 51.7048 68.606 57.2391 64.5465C58.1375 63.8876 59.4073 64.0719 60.0752 64.9584C60.7431 65.8448 60.5562 67.0977 59.6578 67.7567C53.4518 72.3088 45.7883 75 37.5 75C29.2117 75 21.5483 72.3088 15.3422 67.7567C14.4438 67.0977 14.2569 65.8448 14.9248 64.9584Z"
                        />
                      </svg>
                    </div>
                    <div className="achievement level position-absolute">
                      <svg
                        width={75}
                        height={75}
                        viewBox="0 0 75 75"
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.3422 7.24333C21.5482 2.69119 29.2117 0 37.5 0C45.7883 0 53.4518 2.69119 59.6578 7.24333C60.5562 7.90233 60.7431 9.15516 60.0752 10.0416C59.4073 10.9281 58.1375 11.1124 57.2391 10.4534C51.7048 6.39402 44.8833 4 37.5 4C30.1167 4 23.2952 6.39403 17.7609 10.4535C16.8625 11.1124 15.5927 10.9281 14.9248 10.0416C14.2569 9.15516 14.4438 7.90233 15.3422 7.24333ZM65.0942 15.1001C66.006 14.4592 67.2717 14.6688 67.9213 15.5684C72.3763 21.7377 75 29.3164 75 37.5C75 45.6836 72.3763 53.2623 67.9213 59.4316C67.2717 60.3311 66.006 60.5408 65.0942 59.8999C64.1825 59.2589 63.97 58.0101 64.6196 57.1105C68.599 51.5998 70.9459 44.8284 70.9459 37.5C70.9459 30.1716 68.599 23.4002 64.6196 17.8895C63.97 16.9899 64.1825 15.7411 65.0942 15.1001ZM9.90579 15.1001C10.8175 15.7411 11.03 16.9899 10.3804 17.8895C6.40105 23.4002 4.05405 30.1716 4.05405 37.5C4.05405 44.8284 6.40105 51.5998 10.3804 57.1105C11.03 58.0101 10.8175 59.2589 9.90579 59.8999C8.99405 60.5408 7.72832 60.3312 7.07871 59.4316C2.62373 53.2623 0 45.6836 0 37.5C0 29.3164 2.62373 21.7377 7.07871 15.5684C7.72832 14.6689 8.99404 14.4592 9.90579 15.1001ZM14.9248 64.9584C15.5927 64.0719 16.8625 63.8876 17.7609 64.5466C23.2952 68.606 30.1167 71 37.5 71C44.8833 71 51.7048 68.606 57.2391 64.5465C58.1375 63.8876 59.4073 64.0719 60.0752 64.9584C60.7431 65.8448 60.5562 67.0977 59.6578 67.7567C53.4518 72.3088 45.7883 75 37.5 75C29.2117 75 21.5483 72.3088 15.3422 67.7567C14.4438 67.0977 14.2569 65.8448 14.9248 64.9584Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="card-text mb-0 d-flex">Python Master</p>
                  <p className="text-center mb-0 d-flex text-primary">
                    Level 2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h2 className="small-title">Trending Courses</h2>
  <div className="row row-cols-1 row-cols-md-2 row-cols-xl-5 g-2 mb-5">
    <div className="col">
      <div className="card h-100">
        <img
          src="/assets/img/course/small/course-4.webp"
          className="card-img-top sh-22"
          alt="card image"
        />
        <div className="card-body">
          <h5 className="heading mb-0">
            <a href="Course.Detail.html" className="body-link stretched-link">
              Introduction to Bread Making
            </a>
          </h5>
        </div>
        <div className="card-footer border-0 pt-0">
          <div className="mb-2">
            <div className="br-wrapper br-theme-cs-icon d-inline-block">
              <div className="br-wrapper">
                <select
                  className="rating"
                  name="rating"
                  autoComplete="off"
                  data-readonly="true"
                  data-initial-rating={5}
                  style={{ display: "none" }}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
                <div className="br-widget br-readonly">
                  <a
                    href="#"
                    data-rating-value={1}
                    data-rating-text={1}
                    className="br-selected"
                  />
                  <a
                    href="#"
                    data-rating-value={2}
                    data-rating-text={2}
                    className="br-selected"
                  />
                  <a
                    href="#"
                    data-rating-value={3}
                    data-rating-text={3}
                    className="br-selected"
                  />
                  <a
                    href="#"
                    data-rating-value={4}
                    data-rating-text={4}
                    className="br-selected"
                  />
                  <a
                    href="#"
                    data-rating-value={5}
                    data-rating-text={5}
                    className="br-selected br-current"
                  />
                  <div className="br-current-rating">5</div>
                </div>
              </div>
            </div>
            <div className="text-muted d-inline-block text-small align-text-top">
              (39)
            </div>
          </div>
          <div className="card-text mb-0">
            <div className="text-muted text-overline text-small">
              <del>$ 42.25</del>
            </div>
            <div>$ 27.50</div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img
          src="/assets/img/course/small/course-5.webp"
          className="card-img-top sh-22"
          alt="card image"
        />
        <div className="card-body">
          <h5 className="heading mb-0">
            <a href="Course.Detail.html" className="body-link stretched-link">
              14 Facts About Sugar
            </a>
          </h5>
        </div>
        <div className="card-footer border-0 pt-0">
          <div className="mb-2">
            <div className="br-wrapper br-theme-cs-icon d-inline-block">
              <div className="br-wrapper">
                <select
                  className="rating"
                  name="rating"
                  autoComplete="off"
                  data-readonly="true"
                  data-initial-rating={5}
                  style={{ display: "none" }}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
                <div className="br-widget br-readonly">
                  <a
                    href="#"
                    data-rating-value={1}
                    data-rating-text={1}
                    className="br-selected"
                  />
                  <a
                    href="#"
                    data-rating-value={2}
                    data-rating-text={2}
                    className="br-selected"
                  />
                  <a
                    href="#"
                    data-rating-value={3}
                    data-rating-text={3}
                    className="br-selected"
                  />
                  <a
                    href="#"
                    data-rating-value={4}
                    data-rating-text={4}
                    className="br-selected"
                  />
                  <a
                    href="#"
                    data-rating-value={5}
                    data-rating-text={5}
                    className="br-selected br-current"
                  />
                  <div className="br-current-rating">5</div>
                </div>
              </div>
            </div>
            <div className="text-muted d-inline-block text-small align-text-top">
              (221)
            </div>
          </div>
          <div className="card-text mb-0">
            <div className="text-muted text-overline text-small">
              <del>$ 36.50</del>
            </div>
            <div>$ 15.25</div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <span className="badge rounded-pill bg-primary me-1 position-absolute e-3 t-3 z-index-1">
          POPULAR
        </span>
        <img
          src="/assets/img/course/small/course-6.webp"
          className="card-img-top sh-22"
          alt="card image"
        />
        <div className="card-body">
          <h5 className="heading mb-0">
            <a href="Course.Detail.html" className="body-link stretched-link">
              Apple Cake Recipe
            </a>
          </h5>
        </div>
        <div className="card-footer border-0 pt-0">
          <div className="mb-2">
            <div className="br-wrapper br-theme-cs-icon d-inline-block">
              <div className="br-wrapper">
                <select
                  className="rating"
                  name="rating"
                  autoComplete="off"
                  data-readonly="true"
                  data-initial-rating={5}
                  style={{ display: "none" }}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
                <div className="br-widget br-readonly">
                  <a
                    href="#"
                    data-rating-value={1}
                    data-rating-text={1}
                    className="br-selected"
                  />
                  <a
                    href="#"
                    data-rating-value={2}
                    data-rating-text={2}
                    className="br-selected"
                  />
                  <a
                    href="#"
                    data-rating-value={3}
                    data-rating-text={3}
                    className="br-selected"
                  />
                  <a
                    href="#"
                    data-rating-value={4}
                    data-rating-text={4}
                    className="br-selected"
                  />
                  <a
                    href="#"
                    data-rating-value={5}
                    data-rating-text={5}
                    className="br-selected br-current"
                  />
                  <div className="br-current-rating">5</div>
                </div>
              </div>
            </div>
            <div className="text-muted d-inline-block text-small align-text-top">
              (572)
            </div>
          </div>
          <div className="card-text mb-0">
            <div className="text-muted text-overline text-small">
              <del>$ 51.00</del>
            </div>
            <div>$ 36.80</div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img
          src="/assets/img/course/small/course-7.webp"
          className="card-img-top sh-22"
          alt="card image"
        />
        <div className="card-body">
          <h5 className="heading mb-0">
            <a href="Course.Detail.html" className="body-link stretched-link">
              Dough for the Molds
            </a>
          </h5>
        </div>
        <div className="card-footer border-0 pt-0">
          <div className="mb-2">
            <div className="br-wrapper br-theme-cs-icon d-inline-block">
              <div className="br-wrapper">
                <select
                  className="rating"
                  name="rating"
                  autoComplete="off"
                  data-readonly="true"
                  data-initial-rating={5}
                  style={{ display: "none" }}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
                <div className="br-widget br-readonly">
                  <a
                    href="#"
                    data-rating-value={1}
                    data-rating-text={1}
                    className="br-selected"
                  />
                  <a
                    href="#"
                    data-rating-value={2}
                    data-rating-text={2}
                    className="br-selected"
                  />
                  <a
                    href="#"
                    data-rating-value={3}
                    data-rating-text={3}
                    className="br-selected"
                  />
                  <a
                    href="#"
                    data-rating-value={4}
                    data-rating-text={4}
                    className="br-selected"
                  />
                  <a
                    href="#"
                    data-rating-value={5}
                    data-rating-text={5}
                    className="br-selected br-current"
                  />
                  <div className="br-current-rating">5</div>
                </div>
              </div>
            </div>
            <div className="text-muted d-inline-block text-small align-text-top">
              (25)
            </div>
          </div>
          <div className="card-text mb-0">
            <div className="text-muted text-overline text-small">
              <del>$ 18.25</del>
            </div>
            <div>$ 11.00</div>
          </div>
        </div>
      </div>
    </div>
    <div className="col d-none d-xl-block">
      <div className="card h-100">
        <img
          src="/assets/img/course/small/course-9.webp"
          className="card-img-top sh-22"
          alt="card image"
        />
        <div className="card-body">
          <h5 className="heading mb-0">
            <a href="Course.Detail.html" className="body-link stretched-link">
              Fruit Decorations
            </a>
          </h5>
        </div>
        <div className="card-footer border-0 pt-0">
          <div className="mb-2">
            <div className="br-wrapper br-theme-cs-icon d-inline-block">
              <div className="br-wrapper">
                <select
                  className="rating"
                  name="rating"
                  autoComplete="off"
                  data-readonly="true"
                  data-initial-rating={5}
                  style={{ display: "none" }}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
                <div className="br-widget br-readonly">
                  <a
                    href="#"
                    data-rating-value={1}
                    data-rating-text={1}
                    className="br-selected"
                  />
                  <a
                    href="#"
                    data-rating-value={2}
                    data-rating-text={2}
                    className="br-selected"
                  />
                  <a
                    href="#"
                    data-rating-value={3}
                    data-rating-text={3}
                    className="br-selected"
                  />
                  <a
                    href="#"
                    data-rating-value={4}
                    data-rating-text={4}
                    className="br-selected"
                  />
                  <a
                    href="#"
                    data-rating-value={5}
                    data-rating-text={5}
                    className="br-selected br-current"
                  />
                  <div className="br-current-rating">5</div>
                </div>
              </div>
            </div>
            <div className="text-muted d-inline-block text-small align-text-top">
              (472)
            </div>
          </div>
          <div className="card-text mb-0">
            <div className="text-muted text-overline text-small">
              <del>$ 24.00</del>
            </div>
            <div>$ 14.90</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
 
</div>

 </AppLayout>

  )
}

export default Home