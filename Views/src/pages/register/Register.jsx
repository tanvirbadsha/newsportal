import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="regTitle">Register</span>
      <form action="" class="regForm">
      <label for="">Username</label>
        <input
          type="text"
          className="regInput"
          placeholder="Enter your username"
        />
        <label for="">Email</label>
        <input
          type="text"
          className="regInput"
          placeholder="Enter your email"
        />
        <label for="">Password</label>
        <input
          type="password"
          className="regInput"
          placeholder="Enter your Passowrd"
        />
        <button className="regButton">Register</button>
      </form>
      <button className="loginButton"> <Link to="/login" className="link">Login</Link> </button>
    </div>
  )
}
