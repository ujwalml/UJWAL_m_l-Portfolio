import React from "react";
//IMAGES
import Image from "../assets/MY_PHOTO_BG.png";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaDownload,
  FaGoogle,
} from "react-icons/fa";
//TYPE ANIMATION
import { TypeAnimation } from "react-type-animation";
//MOTION
import { motion } from "framer-motion";
//VARIANTS
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg-gap-x-12">
          {/*text*/}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] pb-1"
            >
              Ujwal <span>M L</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[55px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mx-1">I am </span>
              <TypeAnimation
                sequence={["a Software Developer", 2000, "an Artist", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 max-w-lg mx-auto lg:mx-0"
            >
              Passionate tech enthusiast with expertise in web development, SQL
              databases, and modern frameworks, dedicated to building responsive
              and impactful solutions.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a
                href="/UJWAL_M_L_RESUME_1.pdf"
                download="Ujwal_ML_Resume.pdf"
                className="btn btn-lg flex items-center gap-2"
              >
                <FaDownload />
                Resume
              </a>
              <a href="#contact" className="text-gradient btn-link">
                Contact me
              </a>
            </motion.div>
            {/*socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/ujwalml">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ujwal-m-l-87215730b/">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/comrade_arts03?igsh=YmF2ODJ6cjc4MThx">
                <FaInstagram />
              </a>
              <a href="mailto:mlujwal706@gmail.com?body=Hello Ujwal,">
                <FaGoogle />
              </a>
            </motion.div>
          </div>
          {/*image*/}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto pl-14"
          >
            <img src={Image} alt="" className="rounded-full"></img>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
