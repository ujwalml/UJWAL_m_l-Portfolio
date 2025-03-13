import React from "react";
//MOTION
import { motion } from "framer-motion";
//VARIANTS
import { fadeIn } from "../variants";
//IMG
import Img1 from "../assets/Paint_canvas_bg.png";
import Img2 from "../assets/Musical_Instruments.png";
import Img3 from "../assets/UJWAL_DIGITAL_PORTFOLIO_bg.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/*text */}
            <div>
              <h2 className="h2 leading-tight text-accent text-center lg:text-left">
                My Projects
              </h2>
              <p className="max-w-sm mb-8 text-justify hidden lg:block">
                Throughout my career as an engineering student, I have worked on
                a diverse range of projects that demonstrate my technical
                skills, creativity, and problem-solving abilities. Each project
                has provided me with valuable experience in different aspects of
                software development, including frontend and backend
                development, as well as web app creation.
              </p>
              <a href="#contact" className="btn btn-lg items-center p-4">
                Contact
              </a>
            </div>
            {/*image */}
            <a
              href="https://ujwalml.github.io/Basic_Paint_Undo_Clear/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl flex items-center justify-center h-[450px]">
                {/*overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/*img */}
                <img
                  className="group-hover:scale-125 transition-all duration-500 object-contain max-h-full"
                  src={Img1}
                  alt=""
                />
                {/*pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Frontend Project</span>
                </div>
                {/*title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Responsive Canvas</span>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/*image */}
            <a
              href="https://umlsoundsafari.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl flex items-center justify-center h-[450px] lg:h-[360px]">
                {/*overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/*img */}
                <img
                  className="group-hover:scale-125 transition-all duration-500 object-contain max-h-full"
                  src={Img2}
                  alt=""
                />
                {/*pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Frontend Project</span>
                </div>
                {/*title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Sound Safari</span>
                </div>
              </div>
            </a>
            {/*image */}
            <a
              href="https://ujwal-m-l-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl flex items-center justify-center h-[450px]">
                {/*overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/*img */}
                <img
                  className="group-hover:scale-125 transition-all duration-500 object-contain max-h-full"
                  src={Img3}
                  alt=""
                />
                {/*pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">React.js Project</span>
                </div>
                {/*title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">My Portfolio</span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
