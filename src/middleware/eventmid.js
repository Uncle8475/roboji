import React from "react";
import { useParams } from "react-router-dom";
import roboticsEvents from "../data/Eventdata";
import "../style/eventcard.css";

function EventDetail() {
  const { eventName } = useParams();

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
      <p>{event.description}</p>

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
