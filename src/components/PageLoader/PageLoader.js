import React, { useLayoutEffect } from "react";
import { ProgressBar } from "react-loader-spinner";
import "./PageLoader.css";

function PageLoader() {
  let Listener = null;
  useLayoutEffect(() => {
    if (document.readyState === "complete") {
      setTimeout(() => {
        document.getElementById("page-loader-wrapper").style.opacity = "0";
      }, 1000);
    } else {
      Listener = window.addEventListener("load", (event) => {
        setTimeout(() => {
          document.getElementById("page-loader-wrapper").style.opacity = "0";
        }, 1000);
      });
    }

    const watchLoaderTransistion = document
      .getElementById("page-loader-wrapper")
      .addEventListener("transitionend", () => {
        document.getElementById("page-loader-wrapper").style.display = "none";
      });

    return () => {
      Listener && window.removeEventListener("load", Listener);
      document
        .getElementById("page-loader-wrapper")
        .removeEventListener("transitionend", watchLoaderTransistion);
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
