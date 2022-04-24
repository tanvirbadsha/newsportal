import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={require("./news1.jpg")} alt="postImage" />
      <div class="postInfo">
        <div class="postCats">
          <span class="postCat">Music</span>
          <span class="postCat">Life</span>
        </div>
        <span class="postTitle">
          Tigers roar to historic away win over Proteas!
        </span>
        <hr />
        <span class="postDate">1 hour ago</span>
        <p class="postDescription">
          Inspired by a concerted batting effort from the likes of Shakib Al
          Hasan, Liton Das, Tamim Iqbal and Yasir Ali, Bangladesh secured a
          38-run victory over South Africa in the first ODI in Centurion today.
          The convincing win at the SuperSport Park, that helped Bangladesh take
          a 1-0 lead in the three-match series, was also the Tigers' maiden win
          away to South Africa in any format. Before this win, Bangladesh lost
          all the nine ODIs, six Tests and four T20Is played against South
          Africa in their back
        </p>
      </div>
    </div>
  );
}
