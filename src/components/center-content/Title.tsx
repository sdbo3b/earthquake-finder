import React from "react";

const Title: React.FC = () => {
  return (
    <div className="title-container">
      <div className="title-greeting">Welcome</div>
      <div className="title-user-group">
        <img
          className="title-user-image"
          src="https://liquidlumens.com/wp-content/uploads/blank-profile-picture.png"
        ></img>
        <p className="title-username">Timothy Finegoldsberg</p>
      </div>
    </div>
  );
};

export default Title;
