import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})

  useEffect(()=>{
    const getPost = async ()=>{
      const res = await axios.get("/posts/" + path);
      setPost(res.data)
    };
    getPost();
  },[path])
  return (
    <div className="singlePost">
      <div class="singlePostWrapper">
        {post.photo && (
          <img
          className="singlePostImg"
          src={post.photo}
          alt="single Post Image"
        />
        ) }
        <h1 class="singlePostTitle">
          {post.title}
          <div class="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i class="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div class="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link"> <b>{post.username}</b></Link>
            
          </span>
          <span class="singlePostDate">{ new Date(post.createdAt).toDateString()}</span>
        </div>
        <p class="singlePostDes">
            {post.desc}
        </p>
      </div>
    </div>
  );
}
