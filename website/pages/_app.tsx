import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "aos/dist/aos.css";
import { AppProps } from "next/app";
import { SSRProvider } from "react-bootstrap";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
};

export default App;
