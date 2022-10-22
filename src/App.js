import "./App.css";
import AnakinPhoto from "./images/Anakin.jpg";
import RayPhoto from "./images/Ray.jpg";
import CheckMark from "./images/check-mark.svg";
import Like from "./images/like.svg"
import Repost from "./images/repost.svg"
import Share from "./images/share.svg"
import Comment from "./images/comment.svg"

const ANAKIN_IMAGE = AnakinPhoto;

const RAY_IMAGE = RayPhoto;

const author = {
  name: "Anakin skywalker",
  photo: ANAKIN_IMAGE,
  nickname: "@dart_vader",
  content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
  image: RAY_IMAGE,
  date: "26 feb",
};

function App() {
  return (
    <div className="container">
      <img className="logo" src={author.photo}></img>
      <div className="info">
        <div className="header">
        <h3>{author.name}</h3>
        <img src={CheckMark}></img>
        <h5>{author.nickname}</h5>
        <h5>{author.date}</h5>
      </div>
      <div className="content">
        <h4>{author.content}</h4>
        <img src={author.image} className="gal image"></img>
      </div>
      <div className="footer">
        <div className="actions">
          <img src={Comment}></img>
          <p>482</p>
        </div>
        <div className="actions">
          <img src={Repost}></img>
          <p>146</p>
        </div>
        <div className="actions">
          <img src={Like}></img>
          <p>887</p>
        </div>
        <div className="actions">
          <img src={Share}></img>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default App;
