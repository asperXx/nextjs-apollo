import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.scss";
import AppNavbar from "@/components/shared/Navbar";
import Hero from "../components/shared/Hero";
import App from 'next/app';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="">
      <AppNavbar />
      {Component.name === "Home" && <Hero />}
      <div className="container">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

MyApp.getInitialProps = async (context) => {
  const initialProps = App.getInitialProps && await App.getInitialProps(context);

  return {pageProps: {appData: "Hello _App", ...initialProps}}
}

export default MyApp;
