import React from "react";
import styles from "../css/site.module.css";

const IndexPage = (props) => {
  console.log(props)

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className={["col", styles.margintopbottom].join(" ")}>
            <h2>Home</h2>
            <h6 className={styles.margintopbottom10}>
              Silicon Valley Code Camp is a community event where developers
              learn from fellow developers.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

IndexPage.getInitialProps = () => {
  return { ...process.env };
};

export default IndexPage;
