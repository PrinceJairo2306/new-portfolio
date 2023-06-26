import { AiOutlineCopyright } from "react-icons/ai";

const Footer = (props) => {
  return (
    <div
      className={`${
        props.isMenuOpen ? "" : "hidden "
      }copyright text-c_Orange bottom-5 absolute text-center right-0 left-0`}
    >
      <div
        className={`${
          props.isMenuFinishedDelayDone ? "c-message" : ""
        } font-thin flex flex-col text-sm `}
      >
        {props.isMenuFinishedDelayDone ? (
          <>
            <span>
              Designed and Made with{" "}
              <span className="text-c_White">Passion and </span>
              <span className="text-c_White"> Love</span>
            </span>
            <span>
              Prince Jairo Fortuna{" "}
              <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                <AiOutlineCopyright />
              </div>{" "}
              2022
            </span>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Footer;
