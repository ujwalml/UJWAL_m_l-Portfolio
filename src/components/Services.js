import React from "react";
//ICON
import { BsArrowUpRight } from "react-icons/bs";
//MOTION
import { motion } from "framer-motion";
//VARIANTS
import { fadeIn } from "../variants";
//SERVICES DATA
const Certifications = [
  {
    name: "Web Development",
    description:
      "Through this course, I gained hands-on experience in frontend and backend development, strengthening my skills in building full-stack applications.",
    link: "/Udemy_Web_Development_Certificate.png",
  },
  {
    name: "Java",
    description:
      "Through this course, I developed a strong foundation in Java programming, gaining hands-on experience with object-oriented principles, data structures, and problem-solving.",
    link: "/Ksit_Java_Certificate.jpeg",
  },
  {
    name: "Python",
    description:
      "Through this course, I built a strong foundation in Python, gaining essential programming skills and practical experience.",
    link: "/Sololearn_Python_Certificate.jpeg",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/*text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6 text-center lg:text-left">
              Certifications
            </h2>
            <h3 className="h3 max-w-[450px] mb-16">
              I hold 10+ certifications, demonstrating my dedication to
              continuous learning and growing proficiency in software
              development, project management, and emerging technologies.
            </h3>
            <a href="#contact" className="btn btn-lg items-center p-4">
                Contact
              </a>
          </motion.div>
          {/*services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/*services list*/}
            <div>
              {Certifications.map((Certification, index) => {
                //destructuring of the Certifications
                const { name, description, link } = Certification;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href={link}
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a
                        href={link}
                        className="text-gradient text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
