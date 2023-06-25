import "./menu.css";

import { useState } from "react";

import HamburgerBtn from "./Hamburger";
import CurtainEffect from "./Curtain";
import Icons from "../common/Icons";
import Links from "./MenuLinks";
import Footer from "./MenuFooter";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ismenuFinishedOpenning, setIsMenuFinishedOpenning] = useState(false);
  const [isMenuFinishedDelayDone, setIsMenuFinishedDelayDone] = useState(false);

  const menuClickHandler = () => {
    setIsMenuOpen((prevState) => !prevState);
    setTimeout(() => {
      setIsMenuFinishedOpenning((prevState) => !prevState);
      setTimeout(() => {
        setIsMenuFinishedDelayDone((prevState) => !prevState);
      }, 1000);
    }, 500);
  };

  return (
    <>
      <HamburgerBtn onClickHandler={menuClickHandler} />
      <CurtainEffect
        isMenuOpen={isMenuOpen}
        ismenuFinishedOpenning={ismenuFinishedOpenning}
      />
      <Icons
        isMenuOpen={isMenuOpen}
        isMenuFinishedDelayDone={isMenuFinishedDelayDone}
      />
      <Links
        isMenuOpen={isMenuOpen}
        ismenuFinishedOpenning={ismenuFinishedOpenning}
      />
      <Footer
        isMenuOpen={isMenuOpen}
        isMenuFinishedDelayDone={isMenuFinishedDelayDone}
      />
    </>
  );
};

export default Menu;
