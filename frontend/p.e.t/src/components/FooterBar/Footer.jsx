import React from 'react'
import pataIcon from '../../assets/pataSmall.png'
import './Footer.css'

export default function Footer(){
    return(
    <footer className="petFooter">
        <img className="smallIcon" src={pataIcon} alt="pataSmall"/>
        <h1 className="petText white">Engenharia de Software - Grupo 3</h1>
    </footer>
    );
}