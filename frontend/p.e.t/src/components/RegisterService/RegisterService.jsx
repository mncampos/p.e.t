import React from "react";
import pataIcon from '../../assets/pataIcon.png'
import boneIcon from '../../assets/boneIcon.png'
import "./RegisterService.css";

export default function RegisterService(){
    return(
        <div className="container">

            <div className="petCard2">

                <div className="petCardInfo">

                    <div className="pic2">
                        <img src={pataIcon} alt="paw" />
                    </div>

                    <div className="petInfo2">

                        <p><strong>Name:</strong> Ratata</p>
                        <p><strong>Age:</strong> 12</p>
                        <p><strong>Species:</strong> Unidentified</p>
                        <p><strong>Weight:</strong> 1Kg</p>

                        {/* Dados do pet, sem ajuda do meu amor não consigo T.T */}

                    </div>

                </div>

                <div className="petCardButton">
                    <button className="petButton cardButton">Histórico de Procedimentos</button>
                </div>

            </div>

            <div class="procedimentoContainer">

                <div class="procedimentoHeader">

                    <img class="boneLogoMedium" src={boneIcon} alt="bone" />

                    <p class="procedimentoHeaderText">Marcar Procedimento</p>

                </div>

                <div class="procedimentoDropDownBar">

                    <label class="inputLabel blue" for="cars">Procedimento</label>

                    <div className="selectDiv">
                        <select class="inputBar petBar selectBar" name="Procedimento" id="Procedimento" required>
                            <option className="placeholderOption" value="" disabled selected> <span class="inputPlaceholderCollor">Procedimento</span></option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>

                </div>

                <div>
                    <hr className="separator" />
                </div>

                <div className="serviceButton">

                    <button className="petButton opaque serviceButtonButton">Marcar Procedimento</button>

                </div>
                
        
            </div>

            <div class="procedimentoContainer">

                <div class="procedimentoHeader">

                    <img class="boneLogoMedium" src={boneIcon} alt="bone" />

                    <p class="procedimentoHeaderText">Cancelar Procedimento</p>

                </div>

                <div class="procedimentoDropDownBar">

                    <label class="inputLabel blue" for="cars">Procedimento</label>

                    <div className="selectDiv">
                        <select class="inputBar petBar selectBar" name="Procedimento" id="Procedimento" required>
                            <option value="" disabled selected> <span class="inputPlaceholderCollor">Procedimento</span></option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>

                </div>

                <div>
                    <hr className="separator" />
                </div>

                <div className="serviceButton">

                    <button className="petButton opaque serviceButtonButton">Cancelar Procedimento</button>

                </div>

            </div>
            
        </div>
    );
}