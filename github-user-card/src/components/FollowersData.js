import React from "react";
import FollowersCards from "./FollowersCards";
import axios from "axios";

class FollowersData extends React.Component {
  state = {
    followersArray: []
  };

  // CDM with both axios
  componentDidMount() {
    //followersArray Data
    axios
      .get("https://api.github.com/users/ErikRodriguez-webDev/followers")
      .then((response) => {
        //console.log("Second CDM response: ", response.data);
        this.setState({
          followersArray: response.data
        });
      })
      .catch((error) => {
        //console.log("Second CDM error: ", error);
      }, []);
  }

  // Map info down for cards.js
  render() {
    return (
      <div>
        <FollowersCards followersData={this.state.followersArray} />
      </div>
    );
  }
}

export default FollowersData;
