import React, { useState, useEffect } from "react";
// IMPORT ICONS
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { PiCertificate } from "react-icons/pi";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutgoingMail } from "react-icons/md";

// LINK
import { Link } from "react-scroll";

const Nav = () => {
  const [offsetValue, setOffsetValue] = useState(-150);
  const [hovered, setHovered] = useState(null); // Track hovered icon

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 960) {
        setOffsetValue(-2); // Adjust for smaller screens
      } else {
        setOffsetValue(-150); // Adjust for larger screens
      }
    };

    handleResize(); // Call initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* NAV INNER */}
        <div className="w-full bg-black/25 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          
          {/* HOME */}
          <div 
            className="relative" 
            onMouseEnter={() => setHovered("Home")} 
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === "Home" && (
              <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm rounded-md px-2 py-1">
                Home
              </div>
            )}
            <Link
              to="home"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-200}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <BiHomeAlt />
            </Link>
          </div>

          {/* ABOUT */}
          <div 
            className="relative" 
            onMouseEnter={() => setHovered("About")} 
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === "About" && (
              <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm rounded-md px-2 py-1">
                About
              </div>
            )}
            <Link
              to="about"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <BiUser />
            </Link>
          </div>

          {/* CERTIFICATIONS */}
          <div 
            className="relative" 
            onMouseEnter={() => setHovered("Certifications")} 
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === "Certifications" && (
              <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm rounded-md px-2 py-1">
                Certifications
              </div>
            )}
            <Link
              to="services"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <PiCertificate />
            </Link>
          </div>

          {/* PROJECTS */}
          <div 
            className="relative" 
            onMouseEnter={() => setHovered("Projects")} 
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === "Projects" && (
              <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm rounded-md px-2 py-1">
                Projects
              </div>
            )}
            <Link
              to="work"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={offsetValue}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <GoProjectSymlink />
            </Link>
          </div>

          {/* CONTACT */}
          <div 
            className="relative" 
            onMouseEnter={() => setHovered("Contact")} 
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === "Contact" && (
              <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm rounded-md px-2 py-1">
                Contact
              </div>
            )}
            <Link
              to="contact"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-1}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <MdOutgoingMail />
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Nav;
