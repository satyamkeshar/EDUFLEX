import { decrement, increment } from '@/Redux/userSlice'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Navbar() {

  const authUser = useSelector((state) => state.user.user);
  const dispatch = useDispatch()

  const [activeRoute, setActiveRoute] = useState("");
  //   const [activePageRoute, setActivePageRoute] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchActiveRoute();
    // console.log(router.pathname);
    // console.log(router.pathname.includes("feed"));
  }, [router.pathname]);

  function fetchActiveRoute() {
    if (router.pathname.includes("all-courses") || router.pathname.includes("add-course")) {
      setActiveRoute("all-courses");
    } else if (router.pathname.includes("all-quizzes") || router.pathname.includes("add-quiz")) {
      setActiveRoute("all-quizzes");
    } else if (router.pathname.includes("home")) {
      setActiveRoute("home");
    } else if (router.pathname.includes("profile")) {
      setActiveRoute("profile");
    }
  }

  return (
    
    <div id="nav" className="nav-container d-flex">
    <div className="nav-content d-flex">
      <img className='img-fluid' src="/assets/img/logo/eduflex.svg" alt="Eduflex logo" />
     
      <div className="user-container d-flex">
      
        <Link
          href="/profile"
          className="d-flex user position-relative mt-5"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            className="profile"
            src={authUser?.image}
            alt="profile"
                      
          />
          <div className="name mt-3">{authUser?.name}</div>
        </Link>
        
      </div>
      
      <div className="menu-container flex-grow-1 os-host os-theme-dark os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition">
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
          style={{ margin: 0, height: 372, width: 223 }}
        />
        <div className="os-padding">
          <div className="os-viewport os-viewport-native-scrollbars-invisible">
            <div
              className="os-content"
              style={{ padding: 0, height: "auto", width: "100%" }}
            >
              <ul id="menu" className="menu show">
                <li>
                  <Link
                    href="/home"
                    data-bs-toggle="collapse"
                    data-role="button"
                    aria-expanded="true"
                    className={`${
                      activeRoute === "home" ? "active" : ""
                    }`}
                    data-clicked="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="acorn-icons acorn-icons-home-garage icon"
                    >
                      <g clipPath="url(#clip0_630:3623)">
                        <path d="M3 11V16.25C3 16.9522 3 17.3033 3.16853 17.5556 3.24149 17.6648 3.33524 17.7585 3.44443 17.8315 3.69665 18 4.04777 18 4.75 18H5.25C5.95223 18 6.30335 18 6.55557 17.8315 6.66476 17.7585 6.75851 17.6648 6.83147 17.5556 7 17.3033 7 16.9522 7 16.25V3M7 8V16.25C7 16.9522 7 17.3033 7.16853 17.5556 7.24149 17.6648 7.33524 17.7585 7.44443 17.8315 7.69665 18 8.04777 18 8.75 18H15.25C15.9522 18 16.3033 18 16.5556 17.8315 16.6648 17.7585 16.7585 17.6648 16.8315 17.5556 17 17.3033 17 16.9522 17 16.25V8" />
                        <path d="M2 11.5 7 8.5M5.50024 2.49994 19.0002 8.99994" />
                        <path d="M14 18V13.875C14 13.5239 14 13.3483 13.9157 13.2222C13.8793 13.1676 13.8324 13.1207 13.7778 13.0843C13.6517 13 13.4761 13 13.125 13H10.875C10.5239 13 10.3483 13 10.2222 13.0843C10.1676 13.1207 10.1207 13.1676 10.0843 13.2222C10 13.3483 10 13.5239 10 13.875V18" />
                      </g>
                      <defs>
                        <clipPath id="clip0_630:3623">
                          <path d="M0 0H20V20H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="label">Dashboards</span>
                  </Link>
                  
                </li>
                <li>
                  <Link
                    href="/all-courses"
                    data-bs-toggle="collapse"
                    data-role="button"
                    aria-expanded="false"
                    className={`${
                      activeRoute === "all-courses" ? "active" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="acorn-icons acorn-icons-online-class icon"
                    >
                      <path d="M13.5 3C14.9045 3 15.6067 3 16.1111 3.33706 16.3295 3.48298 16.517 3.67048 16.6629 3.88886 17 4.39331 17 5.09554 17 6.5L17 10.5C17 11.9045 17 12.6067 16.6629 13.1111 16.517 13.3295 16.3295 13.517 16.1111 13.6629 15.6067 14 14.9045 14 13.5 14L6.5 14C5.09554 14 4.39331 14 3.88886 13.6629 3.67048 13.517 3.48298 13.3295 3.33706 13.1111 3 12.6067 3 11.9045 3 10.5L3 6.5C3 5.09554 3 4.39331 3.33706 3.88886 3.48298 3.67048 3.67048 3.48298 3.88886 3.33706 4.39331 3 5.09554 3 6.5 3L13.5 3zM16.5 14C16.9659 14 17.1989 14 17.3827 14.0761 17.6277 14.1776 17.8224 14.3723 17.9239 14.6173 18 14.8011 18 15.0341 18 15.5V15.5C18 15.9659 18 16.1989 17.9239 16.3827 17.8224 16.6277 17.6277 16.8224 17.3827 16.9239 17.1989 17 16.9659 17 16.5 17L3.5 17C3.03406 17 2.80109 17 2.61732 16.9239 2.37229 16.8224 2.17761 16.6277 2.07612 16.3827 2 16.1989 2 15.9659 2 15.5V15.5C2 15.0341 2 14.8011 2.07612 14.6173 2.17761 14.3723 2.37229 14.1776 2.61732 14.0761 2.80109 14 3.03406 14 3.5 14L16.5 14z" />
                      <circle cx={10} cy={8} r={2} />
                      <path d="M11.1972 11H8.80278C8.54207 11 8.41171 11 8.29195 11.03C8.13227 11.0701 7.98494 11.1489 7.86304 11.2596C7.77162 11.3426 7.69932 11.451 7.5547 11.6679C7.10693 12.3396 6.88304 12.6754 6.86968 12.9517C6.85188 13.3201 7.03826 13.6683 7.35464 13.8579C7.59192 14 7.99554 14 8.80278 14H11.1972C12.0045 14 12.4081 14 12.6454 13.8579C12.9617 13.6683 13.1481 13.3201 13.1303 12.9517C13.117 12.6754 12.8931 12.3396 12.4453 11.6679C12.3007 11.451 12.2284 11.3426 12.137 11.2596C12.0151 11.1489 11.8677 11.0701 11.7081 11.03C11.5883 11 11.4579 11 11.1972 11Z" />
                    </svg>
                    <span className="label">Courses</span>
                  </Link>
                  
                </li>
                <li>
                  <Link
                    href="/all-quizzes"
                    data-bs-toggle="collapse"
                    data-role="button"
                    aria-expanded="false"
                    className={`${
                      activeRoute === "all-quizzes" ? "active" : ""
                    }`}
                    
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="acorn-icons acorn-icons-quiz icon"
                    >
                      <path d="M9.63882 4.76087 7.65184 6.74787C7.45657 6.94313 7.13999 6.94313 6.94473 6.74786L6.12803 5.93115M9.63882 8.76087 7.65184 10.7479C7.45657 10.9431 7.13999 10.9431 6.94473 10.7479L6.12803 9.93115M9.63882 12.7609 7.65184 14.7479C7.45657 14.9431 7.13999 14.9431 6.94473 14.7479L6.12803 13.9311M14 6.5H12.5M14 10.5H12.5M14 14.5H12.5" />
                      <path d="M3 5.5C3 4.09554 3 3.39331 3.33706 2.88886C3.48298 2.67048 3.67048 2.48298 3.88886 2.33706C4.39331 2 5.09554 2 6.5 2H13.5C14.9045 2 15.6067 2 16.1111 2.33706C16.3295 2.48298 16.517 2.67048 16.6629 2.88886C17 3.39331 17 4.09554 17 5.5V14.5C17 15.9045 17 16.6067 16.6629 17.1111C16.517 17.3295 16.3295 17.517 16.1111 17.6629C15.6067 18 14.9045 18 13.5 18H6.5C5.09554 18 4.39331 18 3.88886 17.6629C3.67048 17.517 3.48298 17.3295 3.33706 17.1111C3 16.6067 3 15.9045 3 14.5V5.5Z" />
                    </svg>
                    <span className="label">Quiz</span>
                  </Link>
                 
                </li>
               
                
                
              </ul>
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
        <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-unusable os-scrollbar-auto-hidden">
          <div className="os-scrollbar-track os-scrollbar-track-off">
            <div
              className="os-scrollbar-handle"
              style={{ height: "100%", transform: "translate(0px, 0px)" }}
            />
          </div>
        </div>
        <div className="os-scrollbar-corner" />
      </div>
      <div className="mobile-buttons-container">
        <a
          href="#"
          id="scrollSpyButton"
          className="spy-button"
          data-bs-toggle="dropdown"
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
            className="acorn-icons acorn-icons-menu-dropdown undefined"
          >
            <path d="M2 3 18 3M2 10 18 10M13 15 10.3536 17.6464C10.1583 17.8417 9.84171 17.8417 9.64645 17.6464L7 15" />
          </svg>
        </a>
        <div className="dropdown-menu dropdown-menu-end" id="scrollSpyDropdown" />
        <a href="#" id="mobileMenuButton" className="menu-button">
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
            className="acorn-icons acorn-icons-menu undefined"
          >
            <path d="M2 3 18 3M2 10 18 10M2 17 18 17" />
          </svg>
        </a>
      </div>
    </div>
    <div className="nav-shadow" />
  </div>
  )
}

export default Navbar