import React from "react";
import axios from "axios";

const SpeakerPage = (props) => (
  <div className="container">
    <div className="row">
      <h2>
        {props.speakerData.firstName} {props.speakerData.lastName}
      </h2>
      <p>{props.speakerData.bio}</p>
    </div>
  </div>
);

SpeakerPage.getInitialProps = async ({ query }) => {
  const response = {
    hasErrored: false,
    message: "",
    speakerData: {},
  };

  try {
    const data = await axios.get(
      `${process.env.RESTURL_SPEAKER}/${query.speaker}`
    );
    response.speakerData = data.data;
  } catch (e) {
    response.message = e.message;
    response.hasErrored = true;
  }

  return { ...response };
};

export default SpeakerPage;
