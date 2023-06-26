import LogoImage from "../../common/Logo";
import DisplayPicture from "../../../assets/profile_in_pofolio-1.jpg";
const About = () => {
  return (
    <div className="bg-c_Black w-screen h-screen flex items-center justify-center">
      <LogoImage />
      <div className=" px-6 font-poppins f">
        <div className="md:flex justify-center items-center">
          <div className="text-center font-medium text-4xl md:text-6xl text-c_White flex flex-col space-y-6">
            <span>
              The most{" "}
              <span className="">Knowledgeable Experience </span>is
              the <br className="sm:hidden" />
              <span className="text-c_Orange">Experience</span> that has
              <span className="text-c_Orange"> Failure</span>.
            </span>
            <span>
              Not the <span className="text-c_Orange">Experience</span> full of{" "}
              <span className="text-c_Orange">Perfection</span>
              <br className="sm:hidden" /> and Immediate{" "} <br className="sm:hidden" />
              <span className="">Success</span>.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
