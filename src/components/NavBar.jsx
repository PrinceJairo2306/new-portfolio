import "./NavBar.css";
import myLogo from "../../public/prince_logo.png";
import { useState, useEffect } from "react";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clickMenuHandler = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const lineStyle = {
    stroke: isMenuOpen ? "white" : "black",
  };
  return (
    <>
      <div className=" flex justify-between">
        {/* the logo */}
        <div className="w-16 ml-2 mt-1 z-10">
          <img src={myLogo} alt="" />
        </div>
        {/* the logo */}

        <div className="flex">
          {/* toggle night mode */}
          <div className="flex items-center z-10">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-6 h-6"
            >
              <path
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                class="fill-sky-400/20 stroke-sky-500"
              ></path>
              <path
                d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                class="stroke-sky-500"
              ></path>
            </svg>
            {/* toggle night mode */}
          </div>

          {/*the hamburger*/}
          <button
            className="menu m-3 z-10 "
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
                style={lineStyle}
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                style={lineStyle}
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

      <div
        className={`${
          isMenuOpen ? " text-white" : "animate-fade-in text-black"
        } bg-slate-700 w-full z-30`}
      >
        <span
          className={`absolute ${
            isMenuOpen
              ? "top-[10%] left-[50%] transform translate-y-[-50%] ease-in-out duration-1000"
              : "top-[50%] left-[50%] transform translate-y-[-100%] ease-in-out duration-1000"
          }`}
        >
          about
        </span>
      </div>
    </>
  );
};

export default NavBar;
