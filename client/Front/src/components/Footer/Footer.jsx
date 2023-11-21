import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
       
        <div className="item">
          <h1>About</h1>
          <span>
            Thailand No.1 card community
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            094-156-5494
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Card Enthusiast</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
       
      </div>
    </div>
  );
};

export default Footer;