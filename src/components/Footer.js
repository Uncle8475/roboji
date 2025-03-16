import React from "react";
import "../style/footere.css";
import logo from "../assets/Cear-logo.png";
import instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/LinkedIn.png";
import Facebook from "../assets/Facebook.png";
import TwitterX from "../assets/TwitterX.png";
import { Link } from "react-router-dom";
function footer() {
  return (
    <div class="foot">
      <div class="footbox1">
        <img id="lastlogo" src={logo} alt="" />
        <h3>Address</h3>
        <p>
          Army Institute of Technology, Alandi Road, Pune, Maharashtra Pin Code
          - 411015
        </p>
      </div>
      <div class="footbox1">
        <h3>Menu</h3>
        <Link to="/">Home</Link>
        <Link to="/Events">Events</Link>
        <Link to="/Milestones">Milestones</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Contact Us</Link>
      </div>
      <div class="footbox1 lastbox">
        <h3>Connect with us</h3>
        <div class="contactus">
          <img href="#" src={instagram} alt="" />
          <img href="#" src={LinkedIn} alt="" />
          <img href="#" src={Facebook} alt="" />
          <img href="#" src={TwitterX} alt="" />
        </div>

        <form>
          <input id="email" type="email" placeholder="abc@xyz.com" required />
          <button className="email-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default footer;
