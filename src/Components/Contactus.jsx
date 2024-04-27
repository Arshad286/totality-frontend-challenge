
import React from "react";
import { SiLeetcode } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Contactus = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
        <p>My Name is Arshad Beg</p>
        <p>
        Full stack dev, Who loves❤️to explore real world🌎and tech world💻
        </p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
              <h3>Let's connect</h3>
              <div>
                <p>Phone</p>
                <span>+91 8265800669</span>
              </div>
              <div>
                <p>Email</p>
                <span>arshadbeg286@gmail.com</span>
              </div>
              <div>
                <p>Address</p>
                <span>No 1 Civil Lines Bareilly Club</span>
              </div>
              <ul>
                <Link to={"https://github.com/arshad286"} target="_blank">
                  <FaGithub />
                </Link>
                <Link to={"https://www.linkedin.com/in/arshad-beg-7a20781b6/"} target="_blank">
                  <CiLinkedin />
                </Link>
                <Link to={"https://leetcode.com/u/arshad286/"} target="_blank">
                  <SiLeetcode />
                </Link>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
