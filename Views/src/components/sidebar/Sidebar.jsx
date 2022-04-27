import axios from "axios";
import { useEffect, useState } from "react";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(()=>{
    const getCats = async ()=>{
      const res = await axios.get("/categories");
      setCats(res.data);
    }
    getCats();
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          className="sidebarImg"
          src={require("./aboutme.jfif")}
          alt="aboutMePic"
        />
        <p>
          THis is some random text.THis is some random text.THis is some random
          text.THis is some random text. THis is some random text.THis is some
          random text.THis is some random text.THis is some random text. THis is
          some random text.THis is some random text.THis is some random text.
        </p>
      </div>
      <div class="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {cats.map((c)=>(
            <li class="sidebarListItem">{c.name}</li>
          ))}
          

        </ul>
      </div>
      <div class="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div class="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
