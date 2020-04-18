import React from "react";
import Link from "next/link";
import ReactPlaceholder from "react-placeholder";
import {
  MediaBlock,
} from "react-placeholder/lib/placeholders";

const SpeakerCard = ({ speaker, isLoading }) => {
  const awesomePlaceholder = (
    <MediaBlock className="col-12 col-sm-4 card-body" color="#E0E0E0" rows={2}/>
  );

  return (
    <>
      <ReactPlaceholder
        type="media"
        delay={2500}
        rows={6}
        ready={!isLoading}
        showLoadingAnimation
        customPlaceholder={awesomePlaceholder}
      >
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
              <a className="btn btn-lg btn-block btn-outline-primary">
                Details
              </a>
            </Link>
            <h4 className="card-title">{speaker.firstName}</h4>
            <p className="card-text">{speaker.bioShort}</p>
          </div>
        </div>
      </ReactPlaceholder>
    </>
  );
};

export default SpeakerCard;
