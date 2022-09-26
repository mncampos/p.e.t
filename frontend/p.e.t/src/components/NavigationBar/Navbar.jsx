import React, { useContext} from "react";
import logo from "../../assets/pataIcon.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { UserContext } from "../../App";
import LogOut from "../LogOut/LogOut";

export default function Navbar() {
  const userContext = useContext(UserContext);
  var userName = "";

  if(userContext.email){
    const firstName = userContext.name.split(" ");
    userName = firstName[0];
  }
  return (
    <div className="navbarContainer">
      <div className="logo">
        <Link className="clickableLogo" to="/">
          <img className="pataLogo" src={logo} alt="boneIcon" />
          <h1 className="appName">P.E.T</h1>
        </Link>
      </div>
      {!userContext.email ? (
        <div className="buttonsDiv">
          <Link to="/signin">
            <button className="petButton transparent">Sign In</button>
          </Link>
          <Link to="/login">
            <button className="petButton opaque">Log In</button>
          </Link>
        </div>
      ) : (
        <div className="buttonsDiv">
            <LogOut/>
          <button className="petButton transparent">{userName}</button>
        </div>
      )}
    </div>
  );
}
