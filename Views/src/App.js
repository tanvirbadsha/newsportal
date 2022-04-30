// Creating react routing
import { useContext } from "react";
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Home from "../src/pages/home/Home";
import Login from "../src/pages/login/Login";
import Register from "../src/pages/register/Register";
import Settings from "../src/pages/settings/Settings";
import Write from "../src/pages/write/Write";
import Latest from "./components/latest/Latest";
import Sidebar from "./components/sidebar/Sidebar";
import Single from "./components/singlePost/SinglePost";
import Topbar from "./components/topbar/Topbar.jsx";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
    <Topbar />
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/about" element={<Sidebar/>}/>
    <Route exact path="/latest" element={<Latest/>}/>
    <Route exact path="/register" element={<Register/>} />
    <Route exact path="/login" element={user ? <Home/> : <Login />}/>
    <Route exact path="/settings" element={<Settings/>}/>
    <Route exact path="/write" element={user ? <Write/> : <Register/>}/>
    <Route exact path="/post/:postId" element={<Single/>}/>
    </Routes>
    </Router>
  );
}

export default App;
