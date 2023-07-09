import LogoImage from "../../common/Logo";
import DisplayPicture from "../../../assets/profile_in_pofolio-1.jpg";
import { useRef, useEffect, useContext, useState } from "react";
import "../main.scss";
import { gsap } from "gsap";
import { MenuContext } from "../../../store/MenuContext";

import AboutfirstSection from "./FirstSection";

const About = (props) => {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <>
      <AboutfirstSection isMenuOpen={isMenuOpen} />

      <div className="bg-c_Black w-screen h-screen"></div>
    </>
  );
};

export default About;
