import React, { useEffect, useState } from "react";
import axios from "axios";
import SpeakerCard from "../src/SpeakerCard";

const SpeakersPage = ({ speakersData, isLoading }) => {
  const [fetchedData, setFetchedData] = useState(speakersData);
  const [isClientLoading, setIsClientLoading] = useState(isLoading);

  useEffect( () => {
    async function fetchData() {
      try {
        const data = await axios.get(process.env.RESTURL_SPEAKERS);
        setFetchedData(data.data);
        setIsClientLoading(false);
      } catch (e) {
        console.log(e)
      }
    }
    fetchData();

  }, [process.env.RESTURL_SPEAKERS]);

  return (
    <div className="container">
      <div className="card-deck">
        {fetchedData.map((speaker) => (
          <SpeakerCard speaker={speaker} key={speaker.id} isLoading={isClientLoading}/>
        ))}
      </div>
    </div>
  );
};

SpeakersPage.getInitialProps = async ({ req }) => {
  const isServer = !!req;

  const response = {
    hasErrored: false,
    message: "",
    speakersData: {},
    isLoading: false,
  };

  if (isServer) {
    try {
      const data = await axios.get(process.env.RESTURL_SPEAKERS);
      response.speakersData = data.data;
    } catch (e) {
      response.message = e.message;
      response.hasErrored = true;
    }

    return { ...response };
  } else {
    response.speakersData = [...Array(5)].map((_, i) => ({
      firstName: "",
      lastName: "",
      id: i,
    }));

    return { ...response, isLoading: true };
  }
};

export default SpeakersPage;
