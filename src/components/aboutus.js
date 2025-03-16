import React from "react";
import "../style/Events.css";
import "../style/Aboutus.css";
function Aboutus() {
  return (
    <>
      <div className="whole">
        <div id="events">
          <div className="content">
            <button style={{ width: "25vh" }} id="eventbtn">
              About Us
            </button>
            <h1>As Club CEAR...</h1>
          </div>
        </div>
        <div className="work">
          <div id="work1">
            <h1>We create...</h1>
            <p>
              We are active leaders and passionate community builders who work
              towards a collective goal of providing equal opportunities and
              exposure to all the tech enthusiasts out there. We are determined
              to cultivate an ambiance where individuals can coact to create an
              inclusive environment to devise, grasp and develop solutions.
            </p>
          </div>
          <div id="work2">
            <h1>We create...</h1>
            <p>
              As a team of aspirants we welcome growth as a part of our journey.
              So, here we are, organising one of the great Robo-fest...with
              enormous capabilities to level up the community reach.
            </p>
          </div>
        </div>
        <div id="fun">
          <span id="med">We make </span>
          <span id="big">AI and Robotics</span>
          <span id="vbig">Fun!!</span>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
