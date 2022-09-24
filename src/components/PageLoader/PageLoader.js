import React, { useLayoutEffect } from "react";
import { ProgressBar } from "react-loader-spinner";
import "./PageLoader.css";

function PageLoader() {
  useLayoutEffect(() => {
    const Listener = window.addEventListener("load", (event) => {
      setTimeout(() => {
        document.getElementById("page-loader-wrapper").style.opacity = "0";
      }, 1000);
    });

    return () => {
      window.removeEventListener("load", Listener);
    };
  }, []);
  return (
    <div id="page-loader-wrapper">
      <ProgressBar
        height="200"
        width="200"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="rgb(203 213 225)"
        barColor="#4764e6"
      />
    </div>
  );
}

export default PageLoader;
