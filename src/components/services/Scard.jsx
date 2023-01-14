import React from "react";
import "./Scard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Scard({ item }) {
  return (
    <>
      <div className="box top">
        <div className="left">
          <div className="desc">
            <h1>{item.titre}</h1>
            <p className="pdesc">{item.description}</p>
            <div className="options">
              {item.options.map((option, index) => {
                return (
                  <p className="cardOption" key={index}>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    {option} .
                  </p>
                );
              })}
            </div>
          </div>
          <div className="prix">{item.prix} € TTC</div>
        </div>
        <div className="right">
          <img src={item.imageUri} alt="" />
        </div>
      </div>
    </>
  );
}
