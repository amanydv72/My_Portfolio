import React from "react";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Prayag Station, Prayagraj</p>
              <p>Uttar Pradesh, India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              7236904597
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              amanydv879587@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the Portfolio</h4>
          <p>
            Welcome to my portfolio website! This site was built using ReactJS,
            allowing for a sleek and dynamic user experience. Thank you for
            visiting and feel free to contact me for any inquiries.{" "}
          </p>

          <div className="social">
            <Link to="https://www.facebook.com/profile.php?id=100026877156840">
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>

            <Link to="https://instagram.com/a_man_72_?igshid=ZDdkNTZiNTM=">
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>

            <Link to="https://www.linkedin.com/in/aman-yadav-34083b204/">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>

            <Link to="">
              <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
