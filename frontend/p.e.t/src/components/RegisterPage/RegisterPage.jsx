import React, {useState} from "react";
import "./RegisterPage.css";
import pawLogo from "../../assets/pataIcon.png";
import bgImage from "../../assets/background-signin.png";
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router'

export default function RegisterPage() {

    const [values, setValues] = useState({
        email: '',
        password: '',
        name: '',
        address: '',
    });
    const navigate = useNavigate();


    function updateForm(value) {
        return setValues((prev) => {
          return { ...prev, ...value };
        });
      }

      async function onSubmit(e) {
        e.preventDefault();
        
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: values.name,
                    password: values.password,
                    address: values.address,
                    email: values.email,
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
                setValues({ name: "", email: "", password: "", address: "" });
                navigate("/");
            }

      }




  return (
    <div className="loginContainer signinContainer">
      <div className="loginForm signinForm">
        <div className="formTitle">
          <img className="pawLogoMedium" src={pawLogo} alt="paw" />
          <h3 className="headerTitle blue">Sign In</h3>
        </div>
        <div className="loginFormBody">
          <form className="logForm" onSubmit={onSubmit}>
            <div className="inputBars">
              <label className="inputLabel blue" htmlFor="name">
                Name
              </label>
              <input
                className="inputBar"
                type="text"
                id="name"
                placeholder=" Name"
                value={values.name}
                onChange={(e) => updateForm({ name: e.target.value })}
              />
            </div>
            <div className="inputBars">
              <label className="inputLabel blue" htmlFor="email">
                E-mail
              </label>
              <input
                className="inputBar "
                type="email"
                placeholder=" Email"
                id="email"
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
            <div className="inputBars">
              <label className="inputLabel blue" htmlFor="address">
                Address
              </label>
              <input
                className="inputBar "
                type="text"
                placeholder=" Address"
                id="address"
                value={values.address}
                onChange={(e) => updateForm({ address: e.target.value })}
              />
            </div>
            <div className="loginButtons">

                <input
                  type="submit"
                  className="petButton opaque loginButton"
                  value="Sign In"
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
      <div className="signInBgImg">
        <img className="dogsSignin" src={bgImage} alt="dogs" />
      </div>
    </div>
  );
}
