import React, { useRef, useEffect } from "react";
import "../style/App.css";
import Events from "./Events";
import wave from "../assets/customdiv.svg";
import Milestone from "./Milestones";
import Aboutus from "./aboutus";
import { useLocation } from "react-router-dom";

const Home = () => {
  const eventRef = useRef(null);
  const aboutRef = useRef(null);
  const milestoneRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#events" && eventRef.current) {
      eventRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#Milestones" && milestoneRef.current) {
      milestoneRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <div className="upper">
        <p>Center for Excellence of</p>
        <p>AI and Robotics</p>
        <img src={wave} className="wave" alt="Wave" />
      </div>

      <div ref={eventRef}>
        <Events />
      </div>

      <div ref={milestoneRef}>
        <Milestone />
      </div>

      <div ref={aboutRef}>
        <Aboutus />
      </div>
    </>
  );
};

export default Home;
