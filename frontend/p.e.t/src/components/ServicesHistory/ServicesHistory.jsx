import React from "react";
import "./ServicesHistory.css"
import "../RegisterService/RegisterService.css"
import pataIcon from '../../assets/pataIcon.png'
import boneIcon from '../../assets/boneIcon.png'
import ProceduresHistory from "../ProceduresHistory/ProceduresHistory";
import PendingProcedures from "../ProceduresHistory/PendingProcedures";
import {Link} from 'react-router-dom'

export default function ServicesHistory(){
    return(
        <div className="container">
            <div className="procedimentoContainer">

                <div className="servicesHistoryHeader">

                    <div className="servicesHistoryHeaderInfo">
                        <div className="pic2">
                            <img src={pataIcon} alt="paw" />
                        </div>

                        <div className="petInfo2">

                            {/* Dados do pet, sem ajuda do meu amor não consigo T.T */}

                        </div>
                    </div>

                    <Link to='/myPets'>
                    <button className="petButton opaque">Back</button>
                    </Link>
                </div>

                <div>
                    <hr className="separator" />
                </div>

                <div class="procedimentoHeader">

                    <img class="boneLogoMedium" src={boneIcon} alt="bone" />

                    <p class="procedimentoHeaderText">Procedimentos Pendentes</p>

                </div>

                <div>
                    {<PendingProcedures/>}
                </div>

                <div>
                    <hr className="separator" />
                </div>

                <div class="procedimentoHeader">

                    <img class="boneLogoMedium" src={boneIcon} alt="bone" />

                    <p class="procedimentoHeaderText">Procedimentos Realizados</p>

                </div>

                <div>
                    <ProceduresHistory/>
                </div>

            </div>
        </div>
    );
}