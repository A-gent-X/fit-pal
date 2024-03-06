import { useState, useContext, Image } from "react";
import axios from "axios";
import AuthContext from "../store/AuthContext";
import "./Auth.scss";
import { useNavigate } from "react-router-dom";
import icon from "../assets/strength.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Auth = () => {

  const notify = () => toast('Thank you, for registering!');

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [register, setRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("it");
    axios
      .post(`/api/${register ? "register" : "login"}`, { username, password })
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "LOGIN", payload: res.data });
        setTimeout(() => {
          navigate("/dashboard");
        }, 5000);
      })
      .catch((err) => console.log(err));
      notify()
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="logo-container">
          <h1 className="logo">FitPal</h1>
        </div>
        <div className="icon-container">
          <img className="icon" src={icon} />
        </div>
        <h1>Please {register ? "register" : "login"} below</h1>

        <div className="div-input">
          <input
            className="user-input"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="user-password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="div-button">
          <button className="reg-btn" onClick={() => setRegister(!register)}>
            {register ? "login" : "register"}
 
          </button>
          <div className="divider">X</div>
          <button className="auth-btn" type="submit">
            Submit
          </button>
        </div>
      </form>

      <ToastContainer className="toast-container" />
    </div>
  );
};

export default Auth;
