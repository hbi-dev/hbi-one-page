import React from "react";
import "./home.css";
import logo from "./hbi.png";

function Home() {
  return (
    <>
      <div className="hcontainer">
        <div className="hlogo">
          <img src={logo} alt="hbi logo" />
        </div>
        <div className="hcontent">
          <h1>Titre principal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure rerum
            harum voluptas facilis porro cupiditate iste nesciunt, dicta quos
            omnis est saepe ex sunt incidunt in eligendi natus? Est, quo
            delectus distinctio temporibus velit, odit et facere saepe provident
            ipsam eos. Obcaecati porro quia ipsam corporis mollitia assumenda
            veniam quas.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;

//https://reactgo.com/settimeout-in-react-hooks/
