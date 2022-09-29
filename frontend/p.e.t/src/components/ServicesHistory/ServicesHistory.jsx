import React from "react";
import "./ServicesHistory.css"
import "../RegisterService/RegisterService.css"
import pataIcon from '../../assets/pataIcon.png'
import boneIcon from '../../assets/boneIcon.png'

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

                            <p><strong>Name:</strong> Ratata</p>
                            <p><strong>Age:</strong> 12</p>
                            <p><strong>Species:</strong> Unidentified</p>
                            <p><strong>Weight:</strong> 1Kg</p>

                            {/* Dados do pet, sem ajuda do meu amor não consigo T.T */}

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

                <div>
                    <hr className="separator" />
                </div>

                <div class="procedimentoHeader">

                    <img class="boneLogoMedium" src={boneIcon} alt="bone" />

                    <p class="procedimentoHeaderText">Procedimentos Realizados</p>

                </div>

                <div>
                    Procedimentos Realizados
                    {/* Aqui vai ter q fazer uma função parecida com new pet para apresentar os serviços que ja foram realizados */}
                </div>

            </div>
        </div>
    );
}