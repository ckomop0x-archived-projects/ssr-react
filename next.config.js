const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        /* development only config options here */
        RESTURL_SPEAKERS: "http://localhost:4000/speakers",
        RESTURL_SPEAKER: "http://localhost:4000/speakers",
        RESTURL_SESSIONS: "http://localhost:4000/sessions",
      },
    };
  }

  return {
    /* config options for all phases except development here */
    env: {
      RESTURL_SPEAKERS: "https://www.siliconvalley-codecamp.com/rest/speakers/ps",
      RESTURL_SPEAKER: "https://www.siliconvalley-codecamp.com/rest/Speaker",
      RESTURL_SESSIONS: "https://www.siliconvalley-codecamp.com/rest/sessions/ps",
    }
  };
};
