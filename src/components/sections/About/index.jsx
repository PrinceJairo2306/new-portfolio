import LogoImage from "../../common/Logo";
import DisplayPicture from "../../../assets/profile_in_pofolio-1.jpg";
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
      <div className={`${isLastCurtainDone ? "" : ""}`}>
          <div className=" font-poppins text-c_White md:p-10">
            <div className=" md:w-1/4 absolute bottom-20 ">
              <p className=" pb-1"> Hello, The name is </p>
              <p></p>
              <div className="text-6xl font-bold">
                <h1>PRINCE JAIRO </h1>
                <span className="text-8xl text-c_Orange">FORTUNA.</span>
              </div>
              <p className="text-c_Orange font-semibold">Software Developer</p>

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

                <div className="text-2xl text-c_Orange flex justify-between  w-44">
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

              {/* <p className="text-gray-500">
              I am a Full-Stack Coder who specializes in Web Development.
              Recently, I have also taken an interest in studying UX, aiming to
              enhance my skills in that area.
            </p> */}
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

          {/* blobs */}
          <div className="bottom-0 -left-36 absolute  flex items-center justify-center px-16 ">
            {/* rounded-full filter opacity-50  blur-xl  */}
            <div className=" w-full max-w-lg">
              {/* <div class="absolute top-0 -left-4 w-72 h-72 bg-orange-900  animate-blob"></div>
            <div class="absolute top-0 -right-4 w-72 h-72 bg-orange-900 rounded-full  filter opacity-50  blur-xl   animate-blob animation-delay-2000"></div> */}
              <div className="blur-3xl  w-[600px] h-[600px]  opacity-30 bg-c_White rounded-full  filter    animate-blob animation-delay-4000"></div>
            </div>
          </div>
          {/* blobs */}
        </div>
      </div>
    </>
  );
};

export default About;
