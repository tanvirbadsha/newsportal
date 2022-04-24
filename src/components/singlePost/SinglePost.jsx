import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div class="singlePostWrapper">
        <img
          className="singlePostImg"
          src={require("./news1.jpg")}
          alt="single Post Image"
        />
        <h1 class="singlePostTitle">
          Tigers roar to historic away win over Proteas!
          <div class="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i class="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div class="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>
          <span class="singlePostDate">1 hour ago</span>
        </div>
        <p class="singlePostDes">
          A Inspired by a concerted batting effort from the likes of Shakib Al
          Hasan, Liton Das, Tamim Iqbal and Yasir Ali, Bangladesh secured a
          38-run victory over South Africa in the first ODI in Centurion today.
          The convincing win at the SuperSport Park, that helped Bangladesh take
          a 1-0 lead in the three-match series, was also the Tigers' maiden win
          away to South Africa in any format. Before this win, Bangladesh lost
          all the nine ODIs, six Tests and four T20Is played against South
          Africa in their back Inspired by a concerted batting effort from the
          likes of Shakib Al Hasan, Liton Das, Tamim Iqbal and Yasir Ali,
          Bangladesh secured a 38-run victory over South Africa in the first ODI
          in Centurion today. The convincing win at the SuperSport Park, that
          helped Bangladesh take a 1-0 lead in the three-match series, was also
          the Tigers' maiden win away to South Africa in any format. Before this
          win, Bangladesh lost all the nine ODIs, six Tests and four T20Is
          played against South Africa in their back Inspired by a concerted
          batting effort from the likes of Shakib Al Hasan, Liton Das, Tamim
          Iqbal and Yasir Ali, Bangladesh secured a 38-run victory over South
          Africa in the first ODI in Centurion today. The convincing win at the
          SuperSport Park, that helped Bangladesh take a 1-0 lead in the
          three-match series, was also the Tigers' maiden win away to South
          Africa in any format. Before this win, Bangladesh lost all the nine
          ODIs, six Tests and four T20Is played against South Africa in their
          back
        </p>
      </div>
    </div>
  );
}
