import React from "react";
import { useParams } from "react-router-dom";
import roboticsEvents from "../data/Eventdata";
import "../style/eventcard.css";
import { useEffect } from "react";
import download from "../assets/download-minimalistic-svgrepo-com (2).svg";
// import "bootstrap/dist/css/bootstrap.css";

function EventDetail() {
  const { eventName } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!eventName) {
    return <div className="error-message">Error: Event name not provided</div>;
  }

  const event = roboticsEvents.find(
    (e) => e.title.toLowerCase() === eventName.toLowerCase()
  );

  if (!event) {
    return <div className="error-message">404 - Event Not Found</div>;
  }

  return (
    <div className="event-detail-container">
      <h2>{event.title}</h2>
      <p className="decx">{event.description}</p>
      <div className="mainred">
        <a href={`/rulebooks/${eventName}.pdf`} download className="event-btn">
          Rule Book
          <img className="download" src={download} alt="download icon" />
        </a>

        {/* Register Button */}
        <a href={`/register/${eventName}`} className="event-btn register-btn">
          Register
        </a>
      </div>
      {event.extraimg &&
        Array.isArray(event.extraimg) &&
        event.extraimg.length > 0 && (
          <div className="extra-images-container">
            {event.extraimg.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Extra Arena Image ${index + 1}`}
                className="extra-img"
              />
            ))}
          </div>
        )}

      <div className="eventcard">
        <h3>Arena</h3>
        <p>{event.arena}</p>
      </div>

      <div className="eventcard">
        <h3>Team Composition</h3>
        <p>{event.teamComposition}</p>
      </div>

      <div className="eventcard">
        <h3>Rules</h3>
        <p>{event.robotMatchRules}</p>
      </div>

      <div className="eventcard">
        <h3>Scoring & Penalties</h3>
        <p>{event.scoringAndPenalties}</p>
      </div>

      <div className="eventcard">
        <h3>Technical Aspects</h3>
        <p>{event.technicalAspects}</p>
      </div>

      <div className="eventcard">
        <h3>Restrictions</h3>
        <p>{event.restrictions}</p>
      </div>
    </div>
  );
}

export default EventDetail;
