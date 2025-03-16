import React from "react";
import "../style/App.css";
import Events from "./Events";
import wave from "../assets/customdiv.svg";
import Milestone from "./Milestones";
import Aboutus from "./aboutus";
const Home = () => {
  return (
    <>
      <div class="upper">
        <p>Center for Excellence of</p>
        <p>AI and Robotics</p>

        <img src={wave} class="wave" alt="Wave" />
      </div>

      <Events />
      <Milestone />
      <Aboutus />
    </>
  );
};

export default Home;
