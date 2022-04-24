import Header from "../../components/header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

export default function Home() {
  return (
    <>
        <Header />
        <div className= "home">
          <Posts />
          <Sidebar />
        </div>
    </>
  )
}
