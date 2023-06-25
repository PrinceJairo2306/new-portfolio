import LogoImage from "../../common/Logo";
import DisplayPicture from "../../../assets/profile_in_pofolio-1.jpg";
const About = () => {
  return (
    <div>
      {/* <p className="">
        Hey! How nice of you to look at my personal site, Thank you! I am
        software engineer that specializes at backend apis, front end
        integration, recently found myself studying UX too.
      </p> */}
      <div className="bg-black w-screen h-screen">
        <LogoImage />

        <div className="md:hidden pt-24">
            <div className="w-4/5 mx-auto">
              <img className="rounded-sm" src={DisplayPicture} alt="" />
            </div>
        </div>

        <div className="px-5 py-5 md:px-32 md:pt-32 md:flex justify-center items-center">

          <div className="md:w-1/2 md:pl-20 ">
            <div className="text-white font-poppins ">
              <div className="space-y-2">
                <p className="text-base font-thin  text-orange-300">
                  Ohh you found me?. iihh uh! I am
                </p>

                <div className="text-6xl font-black flex flex-col text-gray-300 md:text-8xl ">
                  <span>PRINCE JAIRO</span>
                  <span className="">FORTUNA</span>
                  <span className="text-base font-thin  text-orange-300">
                    Or you could call me{" "}
                    <span className="text-white">Prince.</span> That works
                    too . . .
                  </span>
                </div>

                <h3 className="text-3xl font-light text-gray-300">
                  Software Developer
                </h3>
                <p className="text-gray-500 md:w-1/2">
                  Hey! How nice of you to look at my personal site, Thank you! I
                  am software Developer that specializes at copy pasting code, Chat-GPT
                  , recently found myself studying Chakra Manipulation too.
                </p>
              </div>
            </div>
          </div>

          <div className="w-1/2 hidden md:block ">
            <div className="w-1/2 mx-auto ">
              <img className="rounded" src={DisplayPicture} alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
