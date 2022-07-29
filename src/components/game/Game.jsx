import React from 'react'
import Trevo from "../../img/trevo.png"
import Ball from '../ball/Ball'
import './style.css'


export default function Game() {
    return (
        <div className="container d-flex align-items-center p-0">
            <div className="container-game d-flex align-items-center">
                <img className="me-4" src={Trevo} />
                <h2>MEGA-SENA</h2>
                <div className="container-balls">
                    <Ball />
                    <Ball />
                    <Ball />
                    <Ball />
                    <Ball />
                    <Ball />
                </div>
            </div>
        </div>
    )
}