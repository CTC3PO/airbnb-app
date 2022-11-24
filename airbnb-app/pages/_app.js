import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Router from "next/router";

//import Progress bar (extra library)
import ProgressBar from "@badrap/bar-of-progress";

//create a custom progress bar
const progressBar = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

//invoke progressBar to display when router changes
Router.events.on("routeChangeStart", progressBar.start);
Router.events.on("routeChangeComplete", progressBar.finish);
Router.events.on("routerChangeError", progressBar.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
