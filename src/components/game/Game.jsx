import React from "react";
import Ball from "../ball/Ball";
import "./style.css";

export default function Game() {
  return (
    <div className="container-balls">
      <Ball />
      <Ball />
      <Ball />
      <Ball />
      <Ball />
      <Ball />
    </div>
  );
}
