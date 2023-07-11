import LogoImage from "../../common/Logo";
import DisplayPicture from "../../../assets/nobackgroundsquare.jpg.png";
import { useRef, useEffect, useContext, useState } from "react";
import "../main.scss";
import { gsap } from "gsap";
import { MenuContext } from "../../../store/MenuContext";

import { GrLinkedin } from "react-icons/gr";
import { GrFacebook } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrMail } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";

import AboutfirstSection from "./FirstSection";

const About = (props) => {
  const { isMenuOpen } = useContext(MenuContext);
  const { isLastCurtainDone } = useContext(MenuContext);

  return (
    <>
      {/* <AboutfirstSection isMenuOpen={isMenuOpen} /> */}

      <div className=" bg-c_Black w-screen h-screen">
        {/* side content */}
        <div className="absolute pt-[15%] w-10/12 ">
          {/* intro */}
          <div className="w-11/12  mx-auto items-center font-poppins flex  text-c_White ">
            <div className="w-11/12  md:w-1/4  ">
              <p className=""> Hello, the name is </p>
              <p></p>
              <div className="text-3xl md:text-4xl font-bold">
                <h1>PRINCE JAIRO </h1>
                <span className="text-[56px] md:text-6xl text-c_Orange">
                  FORTUNA.
                </span>
              </div>
              <p className="text-base text-c_Orange font-extrabold">
                Software Developer
              </p>

              <div className="space-y-6 pt-2">
                <p className="text-sm w-3/4">
                  {" "}
                  People usually call me Prince or Jai. However, any name you
                  use is perfectly fine with me, just refrain from calling me
                  cute , I wouldn't want to start believing it.
                </p>

                <button className="bg-c_Black border text-white border-c_Orange p-3 font-extralight">
                  Get in touch!
                </button>

                <div className="text-2xl text-c_Orange flex justify-between w-40 md:w-44">
                  <span>
                    <GrLinkedin className="" />
                  </span>
                  <span>
                    <GrTwitter className="" />
                  </span>
                  <span>
                    <GrFacebook className="" />
                  </span>
                  <span>
                    <GrGithub className="" />
                  </span>
                  <span>
                    <GrMail className="" />
                  </span>
                </div>
              </div>
            </div>
            {/* image */}
            <div className="z-10 relative top-10 -left-32">
              <img
                className="w-[250px]  rounded-[100%]"
                src={DisplayPicture}
                alt=""
              />
            </div>
            {/* image */}

            <div>
              {/* blobs */}
              {/* <div class="absolute top-0 -left-4 w-72 h-72 bg-orange-900  animate-blob"></div>
            <div class="absolute top-0 -right-4 w-72 h-72 bg-orange-900 rounded-full  filter opacity-50  blur-xl   animate-blob animation-delay-2000"></div> */}
              {/* rounded-full filter opacity-50  blur-xl  */}
              <div className="z-0 relative top-16 -left-80">
                <div className="">
                  <div className=" md:w-[150px] md:h-[150px] opacity-100 bg-c_White rounded-full  filter    animate-blob animation-delay-4000"></div>
                </div>
              </div>
              {/* blobs */}
            </div>

            {/* content */}
            {/* <div className="w-1/4">
            I`ve been coding professionally for 7 years now and currently
            working as a Software Engineer that focuses on architecture, APIs,
            nitty-gritty business logics and even front end integration stuff
            now, how time flies! Here are few technologies that are cup of my
            tea coffee .
          </div> */}
          </div>
          {/* intro */}
        </div>

        {/* side content */}
        {/* main content */}
        <div>
          <div className="py-12 w-[65%] ml-auto font-poppins text-c_White">
            <div className="space-y-14">
              <div>
                <h1 className="text-3xl font-semibold">ABOUT</h1>
                <p className="pt-3 pl-5  opacity-95 w-11/12 indent-10 text-justify">
                  Currently based in the Philippines, I am a full-stack
                  developer who specializes in web development. You'll usually
                  find me reading manga and manhwa or browsing tech-related
                  stuff on the internet. If you have any cool web-related ideas,
                  let's make them happen! I love exploring and executing new
                  things. Recently, I've also taken an interest in studying UX,
                  with the goal of enhancing my skills in that area.
                </p>
              </div>
              <div>
                <h1 className="text-3xl font-semibold">ARSENAL</h1>
              </div>
            </div>
          </div>
        </div>
        {/* main content */}
      </div>
    </>
  );
};

export default About;
