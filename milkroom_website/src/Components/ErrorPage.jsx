import React from "react";
import { Link } from "@reach/router";
import Error from "./images/Error404.jpg";
const ErrorPage = (props) => {
  return (
    <main className="errorPageMain">
      <div className="errorPage">
        {props.err ? (
          <>
            <h1>{props.err.response.status}</h1>
            <h2>{props.err.response.statusText}</h2>
          </>
        ) : (
          <div className="errorPageFlex">
            <Link to="/">
              {" "}
              <img className="Error404" src={Error} alt="404Error"></img>
              <p className="ErrorP">
                Ooops try clicking here to go back to themilkroom homepage
              </p>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default ErrorPage;
