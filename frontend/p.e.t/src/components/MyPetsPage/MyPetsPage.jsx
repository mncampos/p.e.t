import React, { useContext, useEffect, useState} from "react";
import "./MyPetsPage.css";
import { UserContext } from "../../App";
import PetCard from "./PetCard/PetCard";
import { Link } from "react-router-dom";
import boneIcon from "../../assets/boneIcon.png";

export default function MyPetsPage() {
  const userContext = useContext(UserContext);

  const [pets, setPets] = useState([]);

  const fetchPets = async () => {
    const data = await fetch('/api/getPets', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        owner : userContext.email
      }),
    }).catch( (error) => {
      window.alert(error);
      return;
    });

    const answer = await data.json();
    setPets(answer);
  }

  useEffect(() => {
    fetchPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const createCards = () => {
    let cards = [];
    for(let i = 0; i < pets.length; i++) {
      cards.push(<PetCard key={i} name={pets[i].name} age={pets[i].age} weight={pets[i].weight} specie={pets[i].specie}/>);
    }
    return cards;
  }
  

  return (
    <div className="pageContainer">
    <div className="myPetsHeader">
      <div className="formTitle">
        <img className="boneLogoMedium" src={boneIcon} alt="paw" />
        <h3 className="pageTitle blue">Log In</h3>
      </div>
      <div className="headerButton">
        <Link to='/newPet'>
            <button className="petButton opaque"> + Add Pet</button>
        </Link>
      </div>
    </div>
    <div className="petCards">
      {createCards()}
    </div>
    </div>
  );
}
