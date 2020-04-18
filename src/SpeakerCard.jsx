import React from "react";
import Link from "next/link";

const SpeakerCard = ({ speaker }) => {
  return (
    <div className="col-12 col-sm-4">
      <img
        src={`/speakers/Speaker-${speaker.id}.jpg`}
        alt={`${speaker.firstName} ${speaker.lastName}`}
        className="card-img-top"
      />
      <div className="card-body">
        <Link
          href={{
            pathname: "speaker",
            query: { speakerId: speaker.id },
          }}
          as={`speaker/${speaker.id}`}
        >
          <a className="btn btn-lg btn-block btn-outline-primary">Details</a>
        </Link>
        <h4 className="card-title">{speaker.firstName}</h4>
        <p className="card-text">{speaker.bioShort}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
