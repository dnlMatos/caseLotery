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
      <div class="colorMega">
        <div className="container d-flex mobile">
          <div className="container col-md-4 col-12">
            <div className="row">
              <div className="header m-0 d-flex align-items-center">
                <Header />
              </div>
            </div>
            <div className="row">
              <div className="model d-flex align-items-center">
                <Model />
              </div>
            </div>
            <div className="row">
              <div className="concurso d-flex">
                <Concurso />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row none">
              <div className="d-flex align-items-center"></div>
            </div>
            <div className="row">
              <div className="d-flex align-items-center justify-content-end balls">
                <Game />
              </div>
            </div>
            <div className="row">
              <div className="d-flex align-items-center justify-content-end">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="color2">2</div>
    </div>
  );
}
