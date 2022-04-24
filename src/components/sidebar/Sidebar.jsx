import "./sidebar.css";

export default function Sidebar() {
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
          <li class="sidebarListItem">Life Style</li>
          <li class="sidebarListItem">Politics</li>
          <li class="sidebarListItem">Others</li>
          <li class="sidebarListItem">Sport</li>
          <li class="sidebarListItem">Entertainment</li>
          <li class="sidebarListItem">Tech</li>
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
