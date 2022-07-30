import React from "react";
import Concurso from "../components/concurso/Concurso";
import Footer from "../components/footer/Footer";
import Game from "../components/game/Game";
import Header from "../components/header/Header";
import Model from "../components/model/Model";
import "./style.css";

export default function MainPage() {
  return (
    <div class="container-fluid p-0">
      <div class="color1">
        <div className="container col-6">
          <div className="row">
            <div className="header col-sm-6 col-12 d-flex align-items-center">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="model col-sm-6 col-12 d-flex align-items-center">
              <Model />
            </div>
          </div>
          <div className="row">
            <div className="concurso col-sm-6 col-12 d-flex align-items-center">
              <Concurso />
            </div>
          </div>
        </div>
        <div className="container col-6">
          <div className="row">
            <div className="col-sm-6 col-12 d-flex align-items-center"></div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-12 d-flex align-items-center">
              <Game />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-12 d-flex align-items-center">
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <div class="color2">2</div>
    </div>
  );
}
