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

import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiJquery } from "react-icons/si";

import { SiLaravel } from "react-icons/si";
import { DiYii } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiPhp } from "react-icons/si";

import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BsGit } from "react-icons/bs";

import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { DiFirebase } from "react-icons/di";

import AboutfirstSection from "./FirstSection";

const About = (props) => {
  const { isMenuOpen } = useContext(MenuContext);
  const { isLastCurtainDone } = useContext(MenuContext);

  return (
    <>
      <div></div>
      <section className="flex px-20 pl-0 bg-black">
        {/*border-r rounded-full border-orange-900 */}
        <div className="pb-10 w-[45%] h-[100vh] "></div>
        <div className="pb-10 pl-10 fixed  w-[30%] h-[100vh] rounded flex justify-end items-end  bg-[#1a1a1a]">
          {/* put the side scroll here  bg-[#1a1a1a]*/}
          <div className="py-2">
            {/* intro */}
            <div className="w-3/4    font-poppins flex  text-c_White ">
              <div className=" ">
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

                <div className="space-y-6 pt-2 ">
                  <div className=" text-left text-sm w-[67%]  ">
                    {" "}
                    People would usually call me Prince or Jai. However, any
                    name you use is perfectly
                    <div>
                      fine with me. Just refrain <br /> from calling me cute , I
                      wouldn't want to start believing it.
                    </div>
                  </div>

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
              <div></div>
              <div className="absolute z-10 top-[47%] left-[40%]  ">
                <img
                  className="w-[250px]  rounded-[100%]"
                  src={DisplayPicture}
                  alt=""
                />
              </div>
              <div className="z-0 absolute left-[220px] bottom-[120px]">
                <div className="">
                  <div className=" md:w-[150px] md:h-[150px] opacity-100 bg-c_White rounded-full  filter    animate-blob animation-delay-4000"></div>
                </div>
              </div>

              {/* image */}

              <div>
                {/* blobs */}
                {/* <div class="absolute top-0 -left-4 w-72 h-72 bg-orange-900  animate-blob"></div>
            <div class="absolute top-0 -right-4 w-72 h-72 bg-orange-900 rounded-full  filter opacity-50  blur-xl   animate-blob animation-delay-2000"></div> */}
                {/* rounded-full filter opacity-50  blur-xl  */}

                {/* blobs */}
              </div>
              {/* content */}
            </div>
            {/* intro */}
          </div>
        </div>

        <div className="w-full h-[300vh] ">
          {/* the about content */}
          <div className="pt-12 pl-16 font-poppins text-c_White">
            <div className="space-y-10">
              <div>
                <h1 className="text-3xl font-semibold pb-2 text-right pr-12">
                  ABOUT
                </h1>
                <div className=" rounded">
                <p className="leading-loose mx-auto  py-5  opacity-95 w-11/12 indent-10 text-justify">
                    Currently based in the Philippines, I am a full-stack
                    developer who specializes in web development. If not{" "}
                    <span className="text-c_Orange">coding</span>, you'll
                    usually find me reading{" "}
                    <span className="text-c_Orange">manga</span> and{" "}
                    <span className="text-c_Orange">manhwa</span> or browsing
                    <span className="text-c_Orange">
                      {" "}
                      tech-related stuff
                    </span>{" "}
                    on the internet. If you have any cool web-related ideas,
                    let's make them happen! I love exploring and executing new
                    things. Recently, I've also taken an interest in studying
                    UX, with the goal of enhancing my skills in that area.
                  </p>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-semibold pb-2  text-right  pr-12">
                  ARSENAL
                </h1>
                {/* bg-[#1a1a1a] */}
                <div className=" rounded">
                  <div className="pl-6 w-11/12 mx-auto opacity-95 py-5 indent-10 text-justify">
                    <div className="flex justify-between ">
                      <div className="space-y-6 ">
                        <span className="flex items-center  ">
                          <SiJavascript className="text-[35px]" />
                          <p className="text-sm relative -left-7 ">
                            Javascript(ES6+)
                          </p>
                        </span>
                        <span className="flex items-center  ">
                          <GrReactjs className="text-[35px] " />
                          <p className="text-sm relative -left-7 ">React</p>
                        </span>
                        <span className="flex items-center  ">
                          <SiRedux className="text-[35px] " />
                          <p className="text-sm relative -left-7 ">Redux</p>
                        </span>
                        <span className="flex items-center  ">
                          <FaNodeJs className="text-[35px] " />
                          <p className="text-sm relative -left-7 ">NodeJs</p>
                        </span>
                      </div>
                      <div className="space-y-6 ">
                        <span className="flex items-center  ">
                          <SiPhp className="text-[35px]" />
                          <p className="text-sm relative -left-7 ">Php</p>
                        </span>
                        <span className="flex items-center  ">
                          <SiLaravel className="text-[35px] " />
                          <p className="text-sm relative -left-7 ">Laravel</p>
                        </span>
                        <span className="flex items-center  ">
                          <DiYii className="text-[35px] " />
                          <p className="text-sm relative -left-7 ">Yii(1.1)</p>
                        </span>
                        <span className="flex items-center  ">
                          <SiJquery className="text-[35px] " />
                          <p className="text-sm relative -left-7 ">Jquery</p>
                        </span>
                      </div>
                      <div className="space-y-6 ">
                        <span className="flex items-center  ">
                          <SiMicrosoftsqlserver className="text-[35px]" />
                          <p className="text-sm relative -left-7 ">MsSQL</p>
                        </span>
                        <span className="flex items-center  ">
                          <SiMysql className="text-[35px] " />
                          <p className="text-sm relative -left-7 ">Mysql</p>
                        </span>
                        <span className="flex items-center  ">
                          <BsGit className="text-[35px] " />
                          <p className="text-sm relative -left-7 ">Git</p>
                        </span>
                        <span className="flex items-center  ">
                          <FaNodeJs className="text-[35px] " />
                          <p className="text-sm relative -left-7 ">NodeJs</p>
                        </span>
                      </div>
                      <div className="space-y-6 ">
                        <span className="flex items-center  ">
                          <IoLogoCss3 className="text-[35px] " />
                          <p className="text-sm relative -left-7 ">Css</p>
                        </span>
                        <span className="flex items-center  ">
                          <SiTailwindcss className="text-[35px] " />
                          <p className="text-sm relative -left-7 ">Tailwind</p>
                        </span>
                        <span className="flex items-center  ">
                          <FaBootstrap className="text-[35px] " />
                          <p className="text-sm relative -left-7 ">Bootstrap</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default About;
