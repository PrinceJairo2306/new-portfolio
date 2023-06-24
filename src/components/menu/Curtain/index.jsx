const CurtainEffect = (props) => {
    return ( 
        <div className="overflow-x-hidden text-white">
        <div
          className={`absolute inset-x-0 top-0 h-1/4 bg-black transition-all duration-300 ease-in-out delay-150 ${
            props.isMenuOpen ? "" : "translate-x-full"
          }`}
        ></div>
        <div
          className={`absolute inset-x-0 top-1/4 h-1/4  bg-black transition-all duration-300 ease-in-out delay-200 ${
            props.isMenuOpen ? "" : "translate-x-full"
          }`}
        ></div>
        <div
          className={`absolute inset-x-0 top-2/4 h-1/4  bg-black transition-all duration-300 ease-in-out delay-300 ${
            props.isMenuOpen ? "" : "translate-x-full"
          }`}
        ></div>
        <div
          className={`absolute inset-x-0 top-3/4 h-1/4  bg-black transition-all duration-300 ease-in-out delay-500 ${
            props.isMenuOpen ? "" : "translate-x-full"
          }`}
        ></div>
      </div>
     );
}
 
export default CurtainEffect;