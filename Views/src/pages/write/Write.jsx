import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import "./write.css";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const {user} = useContext(Context)

  const handleSubmit =async (e)=>{
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post"+res.data._id);
    } catch (error) {
      
    }
  };

  return (
    <div className="write">
      {file &&(
        <img
          className="writeImg"
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}
      <form action="" className="writeForm" onSubmit={handleSubmit} >
        <div class="writeFormGroup">
          <label for="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} onChange={e=> setFile(e.target.files[0])} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autofocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div class="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button class="writeSubmit" type="submit">Publish</button>
      </form>
    </div>
  );
}
