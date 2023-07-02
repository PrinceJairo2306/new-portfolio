import { GrLinkedin } from "react-icons/gr";
import { GrFacebook } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrMail } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";

const Icons = (props) => {
    return ( 
        <div
        className={`${
          props.isMenuOpen ? "" : "hidden "
        }logos-container hidden md:block fixed right-5 bottom-20 text-c_Orange z-20 `}
      >
        <div
          className={`${
            props.isMenuFinishedDelayDone ? "logos " : ""
          } font-thin flex flex-col text-sm opacity-800 space-y-7 `}
        >
          {props.isMenuFinishedDelayDone ? (
            <>
              <span>
                <GrLinkedin className="text-3xl opacity-60 hover:opacity-100" />
              </span>
              <span>
                <GrTwitter className="text-3xl opacity-60 hover:opacity-100" />
              </span>
              <span>
                <GrFacebook className="text-3xl opacity-60 hover:opacity-100" />
              </span>
              <span>
                <GrGithub className="text-3xl opacity-60 hover:opacity-100" />
              </span>
              <span>
                <GrMail className="text-3xl opacity-60 hover:opacity-100" />
              </span>
            </>
          ) : null}
        </div>
      </div>
     );
}
 
export default Icons;