import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d9jabzw", // Replace with your EmailJS Service ID
        "template_p1ry7ag", // Replace with your EmailJS Template ID
        formRef.current,
        "RN8hTllsTUSc1Fd6Q" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);

          // Hide the success message after 3 seconds
          setTimeout(() => {
            setDone(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text Section */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h2 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h2>
              <h4 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's Connect
              </h4>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your Name"
              name="from_name"
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Your Email"
              name="from_email"
              required
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Message"
              name="message"
              required
            ></textarea>
            <button type="submit" className="btn btn-lg">
              Send Mail
            </button>

            {/* Success Message */}
            {done && (
              <p className="text-green-500 mt-2 transition-opacity duration-500">
                Message Sent Successfully!
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
