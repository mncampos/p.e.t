import React from 'react';
import pataIcon from '../../../assets/pataIcon.png'
import './petCard.css';

export default function PetCard(props){
    return(
        <div className="petCard">
            <div className="petPicture">
                <img className="pic" src={pataIcon} alt='petPicture'/>
            </div>
            <div className="petInfo">
                <p>Name: <span className="petProps">{props.name}</span></p>
                <p>Age: <span className="petProps">{props.age}</span></p>
                <p>Specie: <span className="petProps">{props.specie}</span></p>
                <p>Weight: <span className="petProps">{props.weight}</span> Kg</p>
            </div>
        </div>
    );
}