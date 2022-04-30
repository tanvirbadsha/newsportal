import { Link } from "react-router-dom";
import "./post.css";

export default function Post({post}) {
  const PF = "localhost:4000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={PF + post.photo} alt="postImage" />
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
