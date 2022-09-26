import React, { useState, useContext } from "react";
import "./NewPet.css";
import boneIcon from "../../assets/boneIcon.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { UserContext } from "../../App";

export default function NewPet() {

  const userContext = useContext(UserContext);

  const [form, setForm] = useState({
    name: "",
    age: "",
    specie: "",
    weight: "",
  });
  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  
  async function onSubmit(e) {
    e.preventDefault();

    const res = await fetch('/api/addPet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        age: form.age,
        specie: form.specie,
        weight: form.weight,
        owner: userContext.email,
      }),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    const answer = await res.json()
    if(!res.ok){
        window.alert(answer.msg)
    }
    else {
        window.alert(answer.msg)
        setForm({ name: "", age:"", specie:"", weight:""});
        navigate("../myPets");
    }
  }


  return (
    <div className="pageContainer">
      <div className="pageDetailedContainer">
        <div className="formTitle">
          <img className="boneLogoMedium" src={boneIcon} alt="paw" />
          <h3 className="pageTitle blue">New Pet</h3>
        </div>
        <form className="newPetForm" onSubmit={onSubmit} id="formNewPet">
          <div className="inputBars newPetBars">
            <label className="inputLabel blue" htmlFor="name">
              Name
            </label>
            <input
              className="inputBar petBar"
              type="text"
              id="name"
              placeholder=" Name"
              onChange={(e) => updateForm({ name: e.target.value })}
              value={form.name}
            />
          </div>
          <div className="inputBars newPetBarsm">
            <label className="inputLabel blue" htmlFor="age">
              Age
            </label>
            <input
              className="inputBar petBar"
              type="number"
              id="age"
              placeholder=" Age"
              onChange={(e) => updateForm({ age: e.target.value })}
              value={form.age}
            />
          </div>
          <div className="inputBars newPetBars">
            <label className="inputLabel blue" htmlFor="specie">
              Specie
            </label>
            <select
              className="inputBar petBar selectBar"
              id="specie"
              onChange={(e) => updateForm({ specie: e.target.value })}
              value={form.specie}
              name="Specie"
            >
              <option disabled hidden value="">
                Choose an Specie
              </option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Bird">Bird</option>
              <option value="Horse">Horse</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="inputBars newPetBars">
            <label className="inputLabel blue" htmlFor="weight">
              Weight
            </label>
            <input
              className="inputBar petBar"
              type="number"
              id="weight"
              placeholder=" Weight"
              onChange={(e) => updateForm({ weight: e.target.value })}
              value={form.weight}
            />
          </div>
        </form>
        <div className="line" />
        <div className="loginButtons">
          <input
            type="submit"
            form="formNewPet"
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
