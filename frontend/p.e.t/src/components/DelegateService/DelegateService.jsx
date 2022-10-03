import React, { useState, useEffect } from "react";
import boneIcon from "../../assets/boneIcon.png";
import { useNavigate } from "react-router";
import "../RegisterService/RegisterService.css";
import "./DelegateService.css";

export default function DelegateService() {

    const navigate = useNavigate();
  const [values, setValues] = useState({
    procedures: [],
    employees: [],
  });

  const [delegatedValues, setDelegatedValues] = useState({
    procedure: '',
    employee: ''
  });

  function updateDelegatedValues(value) {
    return setDelegatedValues((prev) => {
      return { ...prev, ...value };
    });
  }

  const fetchPageInfo = async () => {
    const proceduresData = await fetch("/api/getOpenProcedures");
    const proceduresArray = await proceduresData.json();
    const employeeData = await fetch("/api/getEmployees");
    const employeeArray = await employeeData.json();

    const pageInfo = {
      procedures: proceduresArray,
      employees: employeeArray,
    };

    setValues(pageInfo);
  };

  async function onSubmit(e) {
    e.preventDefault();
    const data = await fetch('/api/updateProcedure', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          _id : delegatedValues.procedure,
          employee : delegatedValues.employee
        }),
      }).catch( (error) => {
        window.alert(error);
        return;
      });

      const answer = await data.json();
      window.alert(answer.msg);
      navigate("/")
  }

  const createEmployees = () => {
    let employeesBar = [];
    for (let i = 0; i < values.employees.length; i++) {
      employeesBar.push(
        <option className="" key={i} value={values.employees[i].email}>
          {values.employees[i].name}
        </option>
      );
    }
    return employeesBar;
  };

  const createProcedures = () => {
    let proceduresBar = [];
    for (let i = 0; i < values.procedures.length; i++) {
      proceduresBar.push(
        <option
          className=""
          key={i * 4}
          value={values.procedures[i]._id}
        >{`${values.procedures[i].name} from ${values.procedures[i].petOwner} [Pet Name : ${values.procedures[i].pet}]`}</option>
      );
    }
    return proceduresBar;
  };

  useEffect(() => {
    fetchPageInfo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="procedimentoContainer">
        <div className="procedimentoHeader">
          <img className="boneLogoMedium" src={boneIcon} alt="bone" />

          <p className="procedimentoHeaderText">Delegar Procedimento</p>
        </div>

        <div className="procedimentoDropDownBar">
          <div className="delegateServiceDropDownBar">
            <div className="delegateServiceDropDownBarUnit">
              <label className="inputLabel blue" htmlFor="cars">
                Procedures
              </label>

              <div className="selectDiv">
                <form id='delegations' onSubmit={onSubmit}>
                <select
                  className="inputBar petBar selectBar"
                  name="Procedimento"
                  id="Procedimento"
                  onChange={(e) => updateDelegatedValues({ procedure: e.target.value })}
                  required
                  defaultValue={""}
                >
                  <option value="" disabled hidden>
                    {" "}
                    Procedimentos{" "}
                  </option>
                  {createProcedures()}
                </select>
                </form>
              </div>
            </div>

            <div className="delegateServiceDropDownBarUnit">
              <label className="inputLabel blue" htmlFor="cars">
                Employees
              </label>

              <div className="selectDiv">
                <select
                  className="inputBar petBar selectBar"
                  name="Procedimento"
                  id="Procedimento"
                  form="delegations"
                  onChange={(e) => updateDelegatedValues({ employee: e.target.value })}
                  required
                  defaultValue={""}
                >
                  <option value="" disabled hidden>
                    {" "}
                    Employee{" "}
                  </option>
                  {createEmployees()}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div>
          <hr className="separator" />
        </div>

        <div className="serviceButton">
          <input type='submit'  form='delegations' className="petButton opaque serviceButtonButton" value="Delegate Procedure"/>
        </div>
      </div>

      <div className="margemFechaPagina"></div>
    </div>
  );
}
