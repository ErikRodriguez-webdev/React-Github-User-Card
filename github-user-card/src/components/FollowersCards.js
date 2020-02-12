import React from "react";
import "../App.css";

const FollowersCards = (props) => {
  console.log(props.followersData);

  return (
    <div>
      {props.followersData.map((each) => (
        <div key={each.id} className="allFollowersStyle">
          <p>{each.login}</p>
          <p>{each.html_url}</p>
        </div>
      ))}
    </div>
  );
};

export default FollowersCards;
