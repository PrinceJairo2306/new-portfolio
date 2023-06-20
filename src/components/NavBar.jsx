import "./NavBar.css";
import myLogo from "../../public/prince_logo.png";
import { useState, useEffect } from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
import { GrFacebook } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrMail } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ismenuFinishedOpenning, setIsMenuFinishedOpenning] = useState(false);
  const [isMenuFinishedDelayDone, setIsMenuFinishedDelayDone] = useState(false);

  const clickMenuHandler = () => {
    setIsMenuOpen((prevState) => !prevState);

    setTimeout(() => {
      setIsMenuFinishedOpenning((prevState) => !prevState);
      setTimeout(() => {
        setIsMenuFinishedDelayDone((prevState) => !prevState);
      }, 1000);
    }, 500);
  };
  const lineStyle = {
    stroke: isMenuOpen ? "#F97316" : "#F97316",
  };
  return (
    <>
      <div className=" flex justify-between">
        {/* the logo */}
        <div className="w-16 ml-2 mt-1 z-10">
          {/* <img src={myLogo} alt="" /> */}
        </div>
        {/* the logo */}

        <div className="flex">
          {/* toggle night mode */}
          <div className="flex items-center z-10">
            {/* <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                className="fill-sky-400/20 stroke-sky-500"
              ></path>
              <path
                d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                className="stroke-sky-500"
              ></path>
            </svg> */}
            {/* toggle night mode */}
          </div>

          {/*the hamburger*/}
          <button
            className="menu  m-3 z-10 "
            onClick={() => {
              document.querySelector(".menu").classList.toggle("opened");
              document
                .querySelector(".menu")
                .setAttribute(
                  "aria-expanded",
                  document.querySelector(".menu").classList.contains("opened")
                );
              clickMenuHandler();
            }}
            aria-label="Main Menu"
          >
            <svg width={43} height={43} viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
          {/*the hamburger*/}
        </div>
      </div>
      {/* curtain */}
      <div className="overflow-x-hidden text-white">
        <div
          className={`absolute inset-x-0 top-0 h-1/4 bg-black transition-all duration-300 ease-in-out delay-150 ${
            isMenuOpen ? "" : "translate-x-full"
          }`}
        ></div>
        <div
          className={`absolute inset-x-0 top-1/4 h-1/4  bg-black transition-all duration-300 ease-in-out delay-200 ${
            isMenuOpen ? "" : "translate-x-full"
          }`}
        ></div>
        <div
          className={`absolute inset-x-0 top-2/4 h-1/4  bg-black transition-all duration-300 ease-in-out delay-300 ${
            isMenuOpen ? "" : "translate-x-full"
          }`}
        ></div>
        <div
          className={`absolute inset-x-0 top-3/4 h-1/4  bg-black transition-all duration-300 ease-in-out delay-500 ${
            isMenuOpen ? "" : "translate-x-full"
          }`}
        ></div>
      </div>
      {/* curtain */}

      {/* logos */}
      <div className="sm:hidden absolute right-5 bottom-20 text-orange-900 space-y-7">
        <div className="">
          <GrLinkedin className="text-3xl opacity-60 hover:opacity-100" />
        </div>
        <div>
          <GrTwitter className="text-3xl opacity-60 hover:opacity-100" />
        </div>
        <div>
          <GrFacebook className="text-3xl opacity-60 hover:opacity-100" />
        </div>
        <div>
          <GrGithub className="text-3xl opacity-60 hover:opacity-100" />
        </div>
        <div>
          <GrMail className="text-3xl opacity-60 hover:opacity-100" />
        </div>
      </div>
      {/* logos */}

      {/*menu links*/}
      <div
        className={`absolute m-auto left-0 right-0 top-56 text-center  ${
          isMenuOpen ? "text-orange-500" : "hidden text-black"
        }`}
      >
        <div>
          <div
            className={`mx-auto menu-titles font-poppins   text-center  space-y-12 text-4xl sm:text-3xl`}
          >
            <div
              className={`opacity-60 font-normal hover:font-medium hover:animate-pulse hover:opacity-30 ${
                isMenuOpen ? "about" : ""
              }`}
            >
              <span className="">{ismenuFinishedOpenning ? "about" : ""}</span>
            </div>
            <div
              className={` opacity-60 font-normal hover:font-medium hover:animate-pulse hover:opacity-30 ${
                isMenuOpen ? "projects" : ""
              }`}
            >
              <span>{ismenuFinishedOpenning ? "projects" : ""}</span>
            </div>
            <div
              className={`opacity-60 font-normal hover:font-medium hover:animate-pulse hover:opacity-30 ${
                isMenuOpen ? "experience" : ""
              }`}
            >
              <span>{ismenuFinishedOpenning ? "experience" : ""}</span>
            </div>
            <div
              className={`opacity-60 font-normal hover:font-medium hover:animate-pulse hover:opacity-30 ${
                isMenuOpen ? "contact" : ""
              }`}
            >
              <span>{ismenuFinishedOpenning ? "contact" : ""}</span>
            </div>
            <div
              className={`pb-1 opacity-60 font-normal hover:font-medium hover:animate-pulse hover:opacity-30 ${
                isMenuOpen ? "blogs" : ""
              }`}
            >
              <span>{ismenuFinishedOpenning ? "blogs" : ""}</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "" : "hidden "
        }copyright text-orange-400 bottom-5 absolute text-center right-0 left-0`}
      >
        <div
          className={`${
            isMenuFinishedDelayDone ? "c-message" : ""
          } font-thin flex flex-col text-sm opacity-40`}
        >
          {isMenuFinishedDelayDone ? (
            <>
              <span>
                Designed and Made with{" "}
                <span className="text-orange-400">Passion and </span>
                <span className="text-orange-400"> Love</span>
              </span>
              <span>
                Prince Jairo Fortuna{" "}
                <div
                  style={{ display: "inline-block", verticalAlign: "middle" }}
                >
                  <AiOutlineCopyright />
                </div>{" "}
                2022
              </span>
            </>
          ) : null}
        </div>
      </div>

      {/*menu links */}
    </>
  );
};

export default NavBar;
