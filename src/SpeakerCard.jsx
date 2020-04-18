import React from "react";

const SpeakerCard = ({ speaker }) => {
  return (
    <div className="col-4" >
      <img
        src={`/speakers/Speaker-${speaker.id}.jpg`}
        alt={`${speaker.firstName} ${speaker.lastName}`}
        className="card-img-top"
      />
      <div className="card-body">
        <h4 className="card-title">{speaker.firstName}</h4>
        <p className="card-text">{speaker.bioShort}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
