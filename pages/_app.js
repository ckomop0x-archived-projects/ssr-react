import "bootstrap/dist/css/bootstrap.min.css";
import "react-placeholder/lib/reactPlaceholder.css";
import Layout from "../src/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
