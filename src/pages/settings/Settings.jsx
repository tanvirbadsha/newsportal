import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div class="settingsWrapper">
        <div class="settingsTitle">
          <span class="settingsUpdateTitle">Update your Acoount</span>
          <span class="settingsDeleteTitle">Delete your Account</span>
        </div>
        <form action="" class="settingsForm">
          <label for="">Profile Picture</label>
          <div class="settingsPP">
            <img
              className=""
              src={require("./news1.jpg")}
              alt="settings Image"
            />
            <label for="fileInput">
              <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <label for="">Username</label>
            <input type="text" placeholder="Tanvir" />
            <label for="">Email</label>
            <input type="email" placeholder="Email here" />
            <label for="">Password</label>
            <input type="password" />
            <button class="settingsSubmit">Update</button>
          </div>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
