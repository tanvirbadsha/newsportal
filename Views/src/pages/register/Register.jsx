import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError(false);
    try{
      const res =await axios.post("/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    }catch(err){
      setError(true);
    }

  }
  return (
    <div className="register">
      <span className="regTitle">Register</span>
      <form action="" className="regForm" onSubmit={handleSubmit} >
      <label for="">Username</label>
        <input
          type="text"
          className="regInput"
          placeholder="Enter your username"
          onChange={e=> setUserName(e.target.value)}
        />
        <label for="">Email</label>
        <input
          type="text"
          className="regInput"
          placeholder="Enter your email"
          onChange={e=> setEmail(e.target.value)}
        />
        <label for="">Password</label>
        <input
          type="password"
          className="regInput"
          placeholder="Enter your Passowrd"
          onChange={e=> setPassword(e.target.value)}
        />
        <button className="regButton">Register</button>
      </form>
      <button className="loginButton"> <Link to="/login" className="link">Login</Link> </button>
      {error && <span style={{color:"red"}} >Something went Wrong!</span>}
    </div>
  )
}
