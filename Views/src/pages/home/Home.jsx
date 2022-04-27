import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

export default function Home() {
  // fetch data
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts"+search); //linking with api
      console.log("consoleing out the fking ewrror "+res);
      setPosts(res.data);
    }
    fetchPosts();
  },[search])
  return (
    <>
        <Header />
        <div className= "home">
          <Posts posts={posts}/>
          {/* <Posts /> */}
          <Sidebar />
        </div>
    </>
  )
}
