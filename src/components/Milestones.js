import React from "react";
import "../style/milestone.css";

const datas = [
  {
    imgSrc: require("../assets/bagroundmilestone.png"),
    title: "1st Position in IIT Bombay Techfest - Meshmerize",
    description:
      "We bagged 1st position in Mesmerize by the team from RnD cell in collaboration with CEAR, making the name of AIT known to all the top colleges in the IIT Bombay Techfest.",
  },
  {
    imgSrc: require("../assets/bagroundmilestone.png"),
    title: "2nd Place in National Robotics Championship",
    description:
      "Our team secured 2nd place in the National Robotics Championship, showcasing innovation and technical excellence in autonomous robotics.",
  },
  {
    imgSrc: require("../assets/WhatsApp Image 2023-10-28 at 13.57 1.png"),
    title: "Finalists in International Drone Competition",
    description:
      "We reached the finals of the International Drone Competition, competing against some of the best drone tech innovators from across the globe.",
  },
  {
    imgSrc: require("../assets/WhatsApp Image 2023-10-28 at 13.57 1.png"),
    title: "Winners of AI Hackathon 2024",
    description:
      "Our team developed an AI-powered traffic management system and won 1st place in the 2024 AI Hackathon, beating over 100 teams worldwide.",
  },
  {
    imgSrc: require("../assets/WhatsApp Image 2023-10-28 at 13.57 1.png"),
    title: "Best Innovation Award - TechExpo 2023",
    description:
      "We received the 'Best Innovation Award' at TechExpo 2023 for our groundbreaking robotic prosthetic limb with real-time sensory feedback.",
  },
  {
    imgSrc: require("../assets/WhatsApp Image 2023-10-28 at 13.57 1.png"),
    title: "Top 5 in International RoboRace",
    description:
      "Our high-speed autonomous racing bot finished in the Top 5 at the prestigious International RoboRace event, competing with teams from 15+ countries.",
  },
  {
    imgSrc: require("../assets/WhatsApp Image 2023-10-28 at 13.57 1.png"),
    title: "Gold Medal in National Drone Swarm Competition",
    description:
      "We won the Gold Medal in the National Drone Swarm Challenge, demonstrating exceptional coordination and precision in multi-drone flight formations.",
  },
  {
    imgSrc: require("../assets/WhatsApp Image 2023-10-28 at 13.57 1.png"),
    title: "Champions in Autonomous Underwater Robotics Contest",
    description:
      "Our underwater robotic system excelled in complex navigation and object retrieval tasks, winning the top prize in the Autonomous Underwater Robotics Contest.",
  },
];

function Milestone() {
  return (
    <>
      <div id="events">
        <div className="content">
          <button style={{ width: "25vh" }} id="eventbtn">
            Milestone
          </button>
          <h1>What All We Did</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            aperiam reiciendis voluptate pariatur labore impedit! Architecto
            necessitatibus eaque laudantium dolorem qui. Dignissimos, nihil!
          </p>
        </div>
      </div>

      <div className="milecontainer">
        {datas.map((stone, index) => (
          <div className="milebox1" key={index}>
            <img src={stone.imgSrc} alt={stone.title} />
            <h2 className="mileboxcontent1">{stone.title}</h2>
            <p>{stone.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Milestone;
