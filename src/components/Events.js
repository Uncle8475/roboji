import React from "react";
import "../style/Events.css";
import eventsData from "../data/Eventdata";
import { Link } from "react-router-dom";
function Events() {
  console.log(eventsData); // Debugging: Check if it's an array

  if (!Array.isArray(eventsData)) {
    return <p>Error: eventsData is not an array</p>;
  }

  return (
    <>
      <div id="events">
        <div className="content">
          <button id="eventbtn">Events</button>
          <h1>WARTECH</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            aperiam reiciendis voluptate pariatur labore impedit! Architecto
            necessitatibus eaque laudantium dolorem qui. Dignissimos, nihil!
          </p>
        </div>
      </div>
      <div id="event-list" className="intersection-trigger">
        {eventsData.map((event, index) => (
          <div key={index} className="event-box">
            <Link
              to={`/events/${event.title}`}
              key={index}
              className="event-link"
            >
              <img src={event.img} alt={event.title} />
              <h2 className="element-title">{event.title}</h2>
              <p>{event.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Events;
