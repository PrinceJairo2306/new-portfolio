import LogoImage from "../../common/Logo";
import DisplayPicture from "../../../assets/profile_in_pofolio-1.jpg";
import { useRef, useEffect, useContext, useState } from "react";
import "../main.scss";
import { gsap } from "gsap";
import MenuContext from "../../../store/menu-context";

const About = (props) => {
  const menuContextValue = useContext(MenuContext);
  const [isMenuOpen, setIsMenuOpen] = useState(menuContextValue.isMenuOpen);

  useEffect(() => {
    // This effect will be triggered whenever the context value changes.
    setIsMenuOpen(menuContextValue.isMenuOpen);
  }, [menuContextValue.isMenuOpen]);
  console.log(isMenuOpen);
  
  const overlayRef = useRef(null); // Create a ref for the overlay element

  useEffect(() => {
    // Get the overlay element using the ref
    const overlay = overlayRef.current;

    // Check if the overlay exists before proceeding with the animation
    if (overlay) {
      window.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const x = Math.round((clientX / window.innerWidth) * 100);
        const y = Math.round((clientY / window.innerHeight) * 100);

        gsap.to(overlay, {
          "--x": `${x}%`,
          "--y": `${y}%`,
          duration: 0.3,
          ease: "sine.out",
        });
      });
    }
  }, []);

  // span.addEventListener("click", () => {
  //   overlay.classList.toggle("is-open");
  // });

  return (
    <MenuContext.Provider value={{ isMenuOpen: isMenuOpen }}>
      <div className="hidden bg-c_Black w-screen h-screen flex items-center justify-center">
        <div className="w-screen flex justify-center items-center h-screen px-70 font-poppins ">
          <div className="md:w-3/4 lg:w-5/6  flex justify-center items-center">
            <div className="text-c_White px-8  max-w-sm text-center space-y-6 font-extrabold text-4xl   md:max-w-4xl md:text-5xl lg:max-w-max lg:text-6xl  flex flex-col ">
              <span className="leading-tight">
                The most <span className="">Knowledgeable Experience </span>
                is the
                <span className="text-c_Orange"> Experience</span> that has
                <span className="text-c_Orange"> Failure</span>.
              </span>
              <span className="leading-tight">
                Not the <span className="text-c_Orange">Experience</span> full
                of <span className="text-c_Orange">Perfection </span>
                and Immediate <span className="">Success</span>.
              </span>
            </div>
          </div>
        </div>

        <div
          ref={overlayRef}
          className=" overlay px-6 font-poppins bg-c_White hidden md:block"
        >
          <div className="w-screen flex justify-center items-center h-screen px-70 font-poppins ">
            <div className="md:w-3/4 lg:w-5/6 justify-center items-center">
              <div className="text-c_black px-8  max-w-sm text-center space-y-6 font-extrabold text-4xl   md:max-w-4xl md:text-5xl lg:max-w-max lg:text-6xl  flex flex-col ">
                <span className="leading-tight">
                  The most <span className="">Knowledgeable Experience </span>is
                  the
                  <span className="text-c_Black"> Experience</span> that has
                  <span className="text-c_Black"> Failure</span>.
                </span>
                <span className="leading-tight">
                  Not the <span className="text-c_Black">Experience</span> full
                  of <span className="text-c_Black">Perfection </span>
                  and Immediate <span className="">Success</span>.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MenuContext.Provider>
  );
};

export default About;
