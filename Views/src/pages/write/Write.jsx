import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <form action="" className="writeForm">
        <div class="writeFormGroup">
          <label for="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autofocus={true}
          />
        </div>
        <div class="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeText"
          ></textarea>
        </div>
        <button class="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
