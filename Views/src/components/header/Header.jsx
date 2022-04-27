import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
      <span className="headerTitleSm">Positve</span>
      <span className="headerTitleLg">Bangladesh</span>
    </div>
    <img className="headerImg" src={require('./movie.jpg')} alt="newsPic"/>
    </div>
  )
}
