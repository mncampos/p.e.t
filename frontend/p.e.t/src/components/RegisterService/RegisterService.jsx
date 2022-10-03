import React, { useState, useContext, useEffect } from "react";
import pataIcon from '../../assets/pataIcon.png'
import boneIcon from '../../assets/boneIcon.png'
import {useLocation} from 'react-router-dom'
import { useNavigate } from "react-router";
import { UserContext } from "../../App";
import "./RegisterService.css";

export default function RegisterService(){

    const userContext = useContext(UserContext);

    const [values, setValues] = useState({
        name: '',
    });

    const [procedures, setProcedures] = useState([]);

    const [procedureToDelete, setProcedureToDelete] = useState({
        _id: '',
    });

    const navigate = useNavigate();
    function updateForm(value) {
        return setValues((prev) => {
          return { ...prev, ...value };
        });
      }

      function updateDeleteForm(value) {
        return setProcedureToDelete((prev) => {
          return { ...prev, ...value };
        });
      }

      async function onSubmit(e) {
        e.preventDefault();
        const res = await fetch('/api/registerProcedure', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: values.name,
                pet: petInfo.name,
                petOwner: userContext.name,
                petOwnerEmail: userContext.email
            }),
        }).catch( (error) => {
            window.alert(error);
            return;
        });

        const answer = await res.json()
        if(!res.ok){
            window.alert(answer.msg)
        }
        else {
            window.alert(answer.msg)
            setValues({ name: ""});
            navigate("/myPets");
        }
      }

    


      async function onDelete(e){
        e.preventDefault();
        

        const res = await fetch('/api/cancelProcedure', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: procedureToDelete._id,
            }),
        }).catch( (error) => {
            window.alert(error);
            return;
        });

        const answer = await res.json();
        window.alert(answer.msg);
        navigate("/myPets");

      }


    const location = useLocation();
    const { petInfo } = location.state; //Informaçoes do pet estão nesta variável

    const fetchProcedures = async () => {
        const data = await fetch('/api/getProcedures', {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify({
            pet : petInfo.name,
            owner : userContext.name
          }),
        }).catch( (error) => {
          window.alert(error);
          return;
        });
    
        const answer = await data.json();
        setProcedures(answer);
      }
      
      useEffect(() => {
        
        fetchProcedures();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);

      const createExistingProcedures = () => {
        let existingProcedures = [];
        for(let i = 0; i < procedures.length; i++) {
          existingProcedures.push(<option className=""key={i} value={procedures[i]._id}>{procedures[i].name}</option>);
        }
    
        if(existingProcedures.length === 0)
          return (<option className="blue" disabled>You don't have any procedures for the selected pet. Please, add one.</option>)
          else return existingProcedures;
      }
    

    return(
        <div className="container">

            <div className="petCard2">

                <div className="petCardInfo">

                    <div className="pic2">
                        <img src={pataIcon} alt="paw" />
                    </div>

                    <div className="petInfo2">

                        <p><strong>Name:</strong> {petInfo.name}</p>
                        <p><strong>Age:</strong> {petInfo.age}</p>
                        <p><strong>Species:</strong> {petInfo.specie}</p>
                        <p><strong>Weight:</strong> {petInfo.weight} Kg</p>

                        {/* Dados do pet, sem ajuda do meu amor não consigo T.T */}

                    </div>

                </div>

                <div className="petCardButton">
                    <button className="petButton cardButton">Histórico de Procedimentos</button>
                </div>

            </div>

            <div className="procedimentoContainer">

                <div className="procedimentoHeader">

                    <img className="boneLogoMedium" src={boneIcon} alt="bone" />

                    <p className="procedimentoHeaderText">Marcar Procedimento</p>

                </div>

                <div className="procedimentoDropDownBar">

                    <label className="inputLabel blue" htmlFor="cars">Procedimento</label>

                    <div className="selectDiv">
                        <form className="newProcedureForm" id="newProcedure" onSubmit={onSubmit}>
                        <select value={values.name} className="inputBar petBar selectBar" name="Procedimento"  onChange={(e) => updateForm({ name: e.target.value })} id="Procedimento" required>
                            <option value="" disabled hidden>Procedimento</option>
                            <option value="Tosa">Tosa</option>
                            <option value="Banho">Banho</option>
                            <option value="Tratamento Dentário">Tratamento dentário</option>
                            <option value="Exame de Rotina">Exame de rotina</option>
                            <option value="Raio-X">Raio-X</option>
                            <option value="Passeio">Passeio</option>
                            <option value="Exame de Sangue">Exame de Sangue</option>
                            <option value="Vacinação">Vacinação</option>
                            <option value="Consulta Médica">Consulta Médica</option>
                        </select>
                        </form>
                    </div>

                </div>

                <div>
                    <hr className="separator" />
                </div>

                <div className="serviceButton">

                    <input type='submit' form='newProcedure'className="petButton opaque serviceButtonButton" value="Marcar Procedimento"/>

                </div>
                
        
            </div>

            <div className="procedimentoContainer">

                <div className="procedimentoHeader">

                    <img className="boneLogoMedium" src={boneIcon} alt="bone" />

                    <p className="procedimentoHeaderText">Cancelar Procedimento</p>

                </div>

                <div className="procedimentoDropDownBar">

                    <label className="inputLabel blue" htmlFor="cars">Procedimento</label>

                    <div className="selectDiv">
                        <form id='deleteForm' onSubmit={onDelete}>
                        <select className="inputBar petBar selectBar" onChange={(e) => updateDeleteForm({_id: e.target.value})} name="Procedimento" id="Procedimento" required defaultValue={""}>
                            <option value="" disabled hidden> Procedimentos </option>
                            {createExistingProcedures()}
                        </select>
                        </form>
                    </div>

                </div>

                <div>
                    <hr className="separator" />
                </div>

                <div className="serviceButton">

                    <input type="submit" form="deleteForm" className="petButton opaque serviceButtonButton" value="Cancelar Procedimento"/>

                </div>

            </div>
            
        </div>
    );
}