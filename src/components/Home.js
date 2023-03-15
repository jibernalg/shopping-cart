import React from "react";
import Iphone from "./Iphone";
import MacBook from "./MacBook";

function Home() {
  return (
    <div className="Home">
      <h1 className="homeh1">
        The Latest iPhones and MacBooks at unbeatable prices!
      </h1>
      <div className="topItems">
        <MacBook macId={5} />
        <Iphone iphoneId={5} />
      </div>
    </div>
  );
}

export default Home;
