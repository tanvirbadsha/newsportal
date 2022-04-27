import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span class="loginTitle">Login</span>
      <form action="" class="loginForm">
        <label for="">Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email"
        />
        <label for="">Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your Passowrd"
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="registerButton"> <Link to="/register" className="link">Register</Link> </button>
    </div>
  );
}
