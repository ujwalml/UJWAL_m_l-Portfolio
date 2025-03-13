import React from "react";
//COUNTUP
import CountUp from "react-countup";
//INTERSECTION OBSERVER HOOK
import "../index.css";
import { useInView } from "react-intersection-observer";
//MOTION
import { fadeIn } from "../variants";
//VARIANT
import { motion } from "framer-motion";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 min-h-screen">
          {/*img */}
          {/*text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent text-center lg:text-left">
              About me
            </h2>
            <p className="mb-6 text-justify">
              I am a motivated and detail-oriented Computer Science Engineering
              student with a strong foundation in programming languages such as
              Java, C, and JavaScript, along with web development technologies
              like HTML, CSS, and JavaScript. I am proficient in full-stack web
              development, utilizing frameworks such as React.js to create
              dynamic, responsive, and user-friendly applications, while also
              leveraging modern UI frameworks like Bootstrap and Tailwind CSS.
              Additionally, I have strong expertise in SQL databases, enabling
              efficient data management and backend development. I am
              well-versed in version control systems, particularly GitHub, and
              possess excellent communication and teamwork skills, along with a
              strong analytical mindset for problem-solving and innovation.
              During my internship at Xcel Corp, I refined my skills in
              front-end development, while my experience at Cranes Varsity
              enhanced my expertise in IoT and embedded systems. Beyond coding,
              I am a passionate artist and designer, skilled in realistic
              portrait drawing and poster design, and currently serve as the Art
              and Creative Lead at KSIT. With strong problem-solving abilities,
              a keen analytical mindset, and a passion for continuous learning,
              I am eager to contribute to cutting-edge technology and innovative
              solutions in the ever-evolving tech landscape.
            </p>
            {/*stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 ">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={8} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Project <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Certifications <br />
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <a href="#contact" className="btn btn-lg flex items-center">
                Contact
              </a>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
