import React from "react";
import axios from "axios";
import SessionsCard from "../src/SessionCard";

const SessionsPage = ({ sessionsData }) => {
  return (
    <div className="container">
      <div className="card-deck">
        {sessionsData.map((session) => (
          <SessionsCard session={session} key={session.id} />
        ))}
      </div>
    </div>
  );
};

SessionsPage.getInitialProps = async () => {
  const response = {
    hasErrored: false,
    message: "",
    sessionsData: {},
  };

  try {
    const data = await axios.get(process.env.RESTURL_SESSIONS);
    response.sessionsData = data.data;
  } catch (e) {
    response.message = e.message;
    response.hasErrored = true;
  }

  return { ...response };
};

export default SessionsPage;
