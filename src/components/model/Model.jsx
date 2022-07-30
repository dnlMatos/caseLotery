import React from "react";
import Trevo from "../../img/trevo.png"
import "./style.css"

export default function Model() {
  return (
    <div className="d-flex align-items-center">
      <img className="me-4" src={Trevo} />
      <h2 className="fw-bold tMega">MEGA-SENA</h2>
    </div>
  );
}
