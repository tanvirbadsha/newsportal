import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching} = useContext(Context)


  const handleSubmit = async (e) =>{
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    try{
      const res = await axios.post("/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type: "LOGIN_SUCCESS", payload:res.data});
    }catch(err){
      dispatch({type: "LOGIN_FAILURE"});
    }
  };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm" onSubmit={handleSubmit} >
        <label for="">Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label for="">Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your Passowrd"
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching} >Login</button>
      </form>
      <button className="registerButton"> <Link to="/register" className="link">Register</Link> </button>
    </div>
  );
}
