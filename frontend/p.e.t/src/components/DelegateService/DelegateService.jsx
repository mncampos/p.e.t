import React from "react";
import pataIcon from '../../assets/pataIcon.png'
import boneIcon from '../../assets/boneIcon.png'
import "../RegisterService/RegisterService.css";
import "./DelegateService.css"

export default function DelegateService(){
    return(
    <div className="container">
        <div class="procedimentoContainer">

            <div class="procedimentoHeader">

                <img class="boneLogoMedium" src={boneIcon} alt="bone" />

                <p class="procedimentoHeaderText">Delegar Procedimento</p>

            </div>

            <div class="procedimentoDropDownBar">

                <div className="delegateServiceDropDownBar">

                    <div className="delegateServiceDropDownBarUnit">

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

                    <div className="delegateServiceDropDownBarUnit">

                        <label class="inputLabel blue" for="cars">Funcionário</label>

                        <div className="selectDiv">
                            <select class="inputBar petBar selectBar" name="Procedimento" id="Procedimento" required>
                                <option className="placeholderOption" value="" disabled selected> <span class="inputPlaceholderCollor">Funcionário</span></option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>

                    </div>

                </div>

            </div>

            <div>
                <hr className="separator" />
            </div>

            <div className="serviceButton">

                <button className="petButton opaque serviceButtonButton">Delegar Procedimento</button>

            </div>
            

        </div>

        <div className="margemFechaPagina">

        </div>

    </div>
    );
}