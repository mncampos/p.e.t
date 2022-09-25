import React from 'react';
import pataIcon from '../../../assets/pataIcon.png'
import './petCard.css';

export default function PetCard(props){
    return(
        <div class="petCard">
            <div class="petPicture">
                <img class="pic" src={pataIcon} alt='petPicture'/>
            </div>
            <div class="petInfo">
                <p>Name: <span class="petProps">{props.name}</span></p>
                <p>Age: <span class="petProps">{props.age}</span></p>
                <p>Specie: <span class="petProps">{props.specie}</span></p>
                <p>Weight: <span class="petProps">{props.weight}</span> Kg</p>
            </div>
        </div>
    );
}