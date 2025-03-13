import React from "react";
//IMAGES
import Logo from "../assets/Logo_ML.png";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/*Logo*/}
          <a href="#">
            <img src={Logo}></img>
          </a>
          {/*button*/}
          <a href="#" className="btn btn-sm flex items-center">
            My Portfolio
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
