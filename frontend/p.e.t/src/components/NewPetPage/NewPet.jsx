import React from "react";
import "./NewPet.css";
import boneIcon from "../../assets/boneIcon.png";
import {Link} from 'react-router-dom';

export default function NewPet() {
  return (
    <div className="pageContainer">
      <div className="pageDetailedContainer">
        <div className="formTitle">
          <img className="boneLogoMedium" src={boneIcon} alt="paw" />
          <h3 className="pageTitle blue">Log In</h3>
        </div>
        <form className="newPetForm">
          <div className="inputBars newPetBars">
            <label className="inputLabel blue" htmlFor="name">
              Name
            </label>
            <input
              className="inputBar petBar"
              type="text"
              id="name"
              placeholder=" Name"
            />
          </div>
          <div className="inputBars newPetBarsm">
            <label className="inputLabel blue" htmlFor="name">
              Age
            </label>
            <input
              className="inputBar petBar"
              type="text"
              id="name"
              placeholder=" Name"
            />
          </div>
          <div className="inputBars newPetBars">
            <label className="inputLabel blue" htmlFor="name">
              Specie
            </label>
            <input
              className="inputBar petBar"
              type="text"
              id="name"
              placeholder=" Name"
            />
          </div>
          <div className="inputBars newPetBars">
            <label className="inputLabel blue" htmlFor="name">
              Weight
            </label>
            <input
              className="inputBar petBar"
              type="text"
              id="name"
              placeholder=" Name"
            />
          </div>
        </form>
        <div className="line"/>
        <div className="loginButtons">
                <input
                  type="submit"
                  className="petButton opaque loginButton"
                  value="+ Create Pet"
                ></input>
              <Link to="../myPets">
                <button className="petButton transparent loginButton">
                  Cancel
                </button>
              </Link>
            </div>
      </div>
    </div>
  );
}
