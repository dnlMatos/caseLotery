import React from 'react'
import Game from '../game/Game'
import Header from '../header/Header'
import './style.css'


export default function Body() {
  return (
    <div class="container-fluid p-0">
      <div class="color1">
        <div className="container mt-5">
          <Header />
          <Game/>
        </div>
      </div>
      <div class="color2">2</div>
    </div>
  )
}