import React, { useContext } from "react";
import "./MyPetsPage.css";
import { UserContext } from "../../App";
import PetCard from "./PetCard/PetCard";
import { Link } from "react-router-dom";
import boneIcon from "../../assets/boneIcon.png";

export default function MyPetsPage() {
  const userContext = useContext(UserContext);

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
        <PetCard/>
        <PetCard/>
        <PetCard/>
        <PetCard/>
    </div>
    </div>
  );
}
