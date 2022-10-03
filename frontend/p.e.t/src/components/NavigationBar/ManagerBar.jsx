import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import pataIcon from '../../assets/pataWhite.png';
import './UserBar.css';
import lineIcon from '../../assets/lineIcon.png';
import infoIcon from '../../assets/infoIcon.png';


export default function ManagerBar(){

    const userContext = useContext(UserContext);

    return(
        <div className="userBarContainer">
            <div className="barItem">
                <img src={pataIcon} className="barItemIcon small" alt="pataIcon"/>
                <Link className="itemLink" to='/delegateService'>
                    <h2 className="itemName">Delegations</h2>
                </Link>
            </div>
            <div className="barSeparator">
                <img src={lineIcon} className="lineSeparator" alt="line"/>
            </div>
            <div className="barItem">
                <img src={infoIcon} className="barItemIcon small" alt="infoIcon"/>
                <Link className="itemLink" to='/proceduresView'>
                    <h2 className="itemName">Approved Procedures</h2>
                </Link>
            </div>
            <div className="barSeparator">
                <img src={lineIcon} className="lineSeparator" alt="line"/>
            </div>
            <div className="userEmail">
                <h3 className="itemName">{`${userContext.email} - ${userContext.userType} privileges`}</h3>
            </div>
        </div>
    );
}