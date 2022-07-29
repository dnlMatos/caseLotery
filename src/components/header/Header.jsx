import React from 'react'
import './style.css'


export default function Header() {
    return (
        <select className="form-select">
            <option selected>Selecione o jogo</option>
            <option value="1">MEGA-SENA</option>
            <option value="2">QUINA</option>
            <option value="3">LOTOFÁCIL</option>
            <option value="4">LOTOMANIA</option>
            <option value="5">TIMEMANIA</option>
            <option value="6">DIA DE SORTE</option>
        </select>
    )
}