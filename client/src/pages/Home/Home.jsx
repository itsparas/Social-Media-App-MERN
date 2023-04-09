import React from "react";
import "./Home.css";
import ProfileSide from "../../components/profileSide/ProfileSide";

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <div className="postSide">posts</div>
      <div className="rightSide">rightSide</div>
    </div>
  );
};

export default Home;
