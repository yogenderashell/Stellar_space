import React from "react";
import "./Footer.css";
import Button from "./Button";
function Footer() {
  return (
    <footer>
      <h1>Ready to explore the cosmos?</h1>
      <p>Start your space exploration journey today.</p>
      <div className="btn">
        <Button text="Get started" href="#"/>
      </div>
      <div className="acp">
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="acp">
        <ul>
          <li><a target="_blank" href="https://www.facebook.com/bhanu.jangir.921/"><img src="/src/images/fb.svg" alt="facebook_icon" /></a></li>
          <li><a target="_blank" href="https://instagram.com/sweet__error"><img src="/src/images/ig.svg" alt="instagram_icon" /></a></li>
          <li><a target="_blank" href="https://twitter.com/Yogender_4532"><img src="/src/images/tw.svg" alt="twitter_icon" /></a></li>
        </ul>
      </div>
      <p>&copy; 2024 Stellar Space</p>
    </footer>
  );
}

export default Footer;
