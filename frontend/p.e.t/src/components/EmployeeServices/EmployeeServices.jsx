import React from "react";
import "../ServicesHistory/ServicesHistory.css"
import "../RegisterService/RegisterService.css"
import "./EmployeeServices.css"
import pataIcon from '../../assets/pataIcon.png'
import boneIcon from '../../assets/boneIcon.png'
import userIcon from '../../assets/userBig.png'

export default function EmployeeServices(){
    return(
        <div className="container">
            <div className="procedimentoContainer">

                <div className="servicesHistoryHeader">

                    <div className="servicesHistoryHeaderInfo">
                        
                        <div className="pic2">

                            <img src={userIcon} alt="user" />

                        </div>

                        <div className="petInfo2">

                            <div className="employeeInfo">

                                <p><strong>Name:</strong> Cleyton</p>

                                {/* Dados do funcionario, sem ajuda do meu amor não consigo T.T */}

                            </div>

                        </div>
                    </div>

                    <button className="petButton opaque">Voltar</button>

                </div>

                <div>
                    <hr className="separator" />
                </div>

                <div class="procedimentoHeader">

                    <img class="boneLogoMedium" src={boneIcon} alt="bone" />

                    <p class="procedimentoHeaderText">Procedimentos Pendentes</p>

                </div>

                <div>
                    Procedimentos Pendentes
                    {/* Aqui vai ter q fazer uma função parecida com new pet para apresentar os serviços que ainda não foram realizados */}
                    {/* O css do card de apresentação dos procedimentos ja está feito como aparece no botão "Historico de Procedimentos" em RegisterService */}
                </div>

            </div>
        </div>
    );
}