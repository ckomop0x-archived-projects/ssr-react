import React from "react";

const SessionsCard = ({ session }) => {
  return (
    <div className="col-4" >
      <div className="card-body">
        <h4 className="card-title">{session.speakersNamesCsv}</h4>
        <p className="card-text">{session.descriptionShort}</p>
      </div>
    </div>
  );
};

export default SessionsCard;
