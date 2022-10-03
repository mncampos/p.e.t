import React, { useEffect, useContext, useState } from "react";
import "../ServicesHistory/ServicesHistory.css";
import "../RegisterService/RegisterService.css";
import "./EmployeeServices.css";
import boneIcon from "../../assets/boneIcon.png";
import userIcon from "../../assets/userBig.png";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function EmployeeServices() {
  const userContext = useContext(UserContext);
  const [values, setValues] = useState([]);

  const navigate = useNavigate();

  const fetchProcedures = async () => {
    const data = await fetch("/api/getEmployeeDelegatedProcedures", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        employee: userContext.email,
      }),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    const procedures = await data.json();
    setValues(procedures);
  };

  const completeProcedure = async (e) => {
    const data = await fetch("/api/completeProcedure", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: e,
      }),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    const ans = await data.json();
    window.alert(ans.msg);
    navigate("/");
  };

  const onClick = (e) => {
    if (
      window.confirm(
        "Are you sure you want to mark the procedure as completed?"
      )
    )
      completeProcedure(e);
    else return;
  };

  useEffect(() => {
    fetchProcedures();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createProcedureCards = () => {
    let procedureCard = [];
    for (let i = 0; i < values.length; i++) {
      procedureCard.push(
        <div key={i} className="petCardButton">
          <button
            key={i}
            onClick={(e) => onClick(e.target.value)}
            value={values[i]._id}
            className="petButton cardButton"
          >{`${values[i].name} - Pet: ${values[i].pet}`}</button>
        </div>
      );
    }
    return procedureCard;
  };

  return (
    <div className="container">
      <div className="procedimentoContainer">
        <div className="servicesHistoryHeader">
          <div className="servicesHistoryHeaderInfo">
            <div className="pic2">
              <img src={userIcon} alt="user" />
            </div>

            <div className="petInfo2">
              <div className="employeeInfo">
                <p>
                  <strong>Name:</strong> {userContext.name}
                </p>
                <p>
                  <strong>E-mail:</strong> {userContext.email}
                </p>
                <p>{userContext.userType}</p>
              </div>
            </div>
          </div>

          <Link to="/">
            <button className="petButton opaque">Back</button>
          </Link>
        </div>

        <div>
          <hr className="separator" />
        </div>

        <div className="procedimentoHeader">
          <img className="boneLogoMedium" src={boneIcon} alt="bone" />

          <p className="procedimentoHeaderText">Procedimentos Pendentes</p>
        </div>

        <div className="procedureCardsContainer">{createProcedureCards()}</div>
      </div>
    </div>
  );
}
