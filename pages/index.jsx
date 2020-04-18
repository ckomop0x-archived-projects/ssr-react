import React from "react";
import axios from "axios";
import Link from 'next/link';

const IndexPage = ({ speakersData }) => {
  return (
    <>
    <div>
      <Link href='/sessions'>
        <a>Sessions</a>
      </Link>
    </div>
    <ul>
      {speakersData.map((speaker) => (
        <li key={speaker.id}>
          {speaker.firstName} {speaker.lastName}
        </li>
      ))}
    </ul>
    </>
  );
};

IndexPage.getInitialProps = async () => {
  const response = {
    hasErrored: false,
    message: "",
    speakersData: {},
  };

  try {
    const data = await axios.get("http://localhost:4000/speakers");
    response.speakersData = data.data;
  } catch (e) {
    response.message = e.message;
    response.hasErrored = true;
  }

  return { ...response };
};

export default IndexPage;
