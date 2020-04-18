import React from 'react';
import axios from "axios";
import Link from "next/link";

const SessionsPage = ({sessionsData}) => {
  return (
    <>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
    <ul>
      {sessionsData.map((session) => (
        <li key={session.id}>
          {session.title} {session.id}
        </li>
      ))}
    </ul>
    </>
  );
};

SessionsPage.getInitialProps = async () => {
  const response = {
    hasErrored: false,
    message: "",
    sessionsData: {},
  };

  try {
    const data = await axios.get("http://localhost:4000/sessions");
    response.sessionsData = data.data;
  } catch (e) {
    // console.log(e)
    response.message = e.message;
    response.hasErrored = true;
  }

  return { ...response };
}

export default SessionsPage;
