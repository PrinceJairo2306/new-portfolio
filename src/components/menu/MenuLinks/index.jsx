const links = (props) => {
  return (
    <div
      className={`absolute flex justify-center items-center left-0 right-0 bottom-0 top-0 text-center ${
        props.isMenuOpen ? "text-orange-500" : "hidden text-black"
      }`}
    >
      <div>
        <div
          className={`mx-auto menu-titles font-poppins   text-center  space-y-12 text-4xl sm:text-3xl`}
        >
          <div
            className={`opacity-60 font-normal hover:font-medium hover:animate-pulse hover:opacity-30 ${
              props.isMenuOpen ? "about" : ""
            }`}
          >
            <span className="">{props.ismenuFinishedOpenning ? "about" : ""}</span>
          </div>
          <div
            className={` opacity-60 font-normal hover:font-medium hover:animate-pulse hover:opacity-30 ${
              props.isMenuOpen ? "projects" : ""
            }`}
          >
            <span>{props.ismenuFinishedOpenning ? "projects" : ""}</span>
          </div>
          <div
            className={`opacity-60 font-normal hover:font-medium hover:animate-pulse hover:opacity-30 ${
              props.isMenuOpen ? "experience" : ""
            }`}
          >
            <span>{props.ismenuFinishedOpenning ? "experience" : ""}</span>
          </div>
          <div
            className={`opacity-60 font-normal hover:font-medium hover:animate-pulse hover:opacity-30 ${
              props.isMenuOpen ? "contact" : ""
            }`}
          >
            <span>{props.ismenuFinishedOpenning ? "contact" : ""}</span>
          </div>
          <div
            className={`pb-1 opacity-60 font-normal hover:font-medium hover:animate-pulse hover:opacity-30 ${
              props.isMenuOpen ? "blogs" : ""
            }`}
          >
            <span>{props.ismenuFinishedOpenning ? "blogs" : ""}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default links;
