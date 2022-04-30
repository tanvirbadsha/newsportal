import { Link } from "react-router-dom";
import "./post.css";

export default function Post({post}) {
  const PF = "http://localhost:4000/images/";
  return (
    <div className="post">
      {post.photo && (
        console.log(post.photo),
        <img className="postImg" src={PF + post.photo} alt="postImagepost" />
      )}
      <div class="postInfo">
        <div class="postCats">{
          post.categories.map(c =>(
            <span class="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link" >
          <span class="postTitle">{post.title}</span>
        </Link>
         <hr />
        <span class="postDate">{new Date(post.createdAt).toDateString()}</span>
        <p class="postDescription">{post.desc}</p>
      </div>
    </div>
  );
}
