import React from "react";
import "./App.css";
import Main from "./components/sections";
import { MenuProvider } from "./store/MenuContext";

function App() {
  return (
    <MenuProvider>
      <div className="">
        <Main />
      </div>
    </MenuProvider>
  );
}

export default App;
