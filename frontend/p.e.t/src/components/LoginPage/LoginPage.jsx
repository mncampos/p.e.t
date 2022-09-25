import React, {useState} from "react";
import "./LoginPage.css";
import bgImage from "../../assets/background-login.png";
import pawLogo from "../../assets/pataIcon.png";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router'

export default function LoginPage() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  function updateForm(value) {
    return setValues((prev) => {
      return { ...prev, ...value };
    });
  }
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers:{
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    }).catch( (error) =>{ 
      window.alert(error);
      return;
    });
    
    const answer = await res.json();
    if(!res.ok)
      window.alert(answer.msg);
    if(res.ok){
      window.alert(answer.msg);
      setValues({ name: "", email: "", password: "", address: "" });
      navigate("/");
      window.location.reload();
    }



  }

  return (
    <div className="loginContainer">
      <div className="loginForm">
        <div className="formTitle">
          <img className="pawLogoMedium" src={pawLogo} alt="paw" />
          <h3 className="headerTitle blue">Log In</h3>
        </div>
        <div className="loginFormBody">
          <form className="logForm" onSubmit={onSubmit}>
            <div className="inputBars">
              <label className="inputLabel blue" htmlFor="email">
                E-mail
              </label>
              <input
                className="inputBar"
                type="email"
                id="email"
                placeholder=" E-mail"
                value={values.email}
                onChange={(e) => updateForm({ email: e.target.value })}
              />
            </div>
            <div className="inputBars">
              <label className="inputLabel blue" htmlFor="password">
                Password
              </label>
              <input
                className="inputBar "
                type="password"
                placeholder=" Password"
                id="password"
                value={values.password}
                onChange={(e) => updateForm({ password: e.target.value })}
              />
            </div>
            <div className="loginButtons">
                <input
                  type="submit"
                  className="petButton opaque loginButton"
                  value="Log In"
                ></input>
              <Link to="../">
                <button className="petButton transparent loginButton">
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="loginBgImg">
        <img className="dogsLogin" src={bgImage} alt="dogs" />
      </div>
    </div>
  );
}
