import { useContext } from "react";
import { Link } from "react-router-dom";
import "../../context/Context";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function Topbar() {
  const {user, dispatch} = useContext(Context);
  const handleLogout = ()=>{
    dispatch({type: "LOGOUT" })
  }
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/latest" className="link">
              LATEST
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout} >{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImg" src={user.profilePic} alt="icon" />
        ) : (
          <>
            <Link to="/login" className="link topListItem">
              LOGIN
            </Link>
            <Link to="/register" className="link topListItem">
              REGISTER
            </Link>
          </>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
