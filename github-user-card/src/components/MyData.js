import React from "react";
import PersonalCards from "./PersonalCards";
import axios from "axios";

class MyData extends React.Component {
  state = {
    myloginArray: []
  };

  // CDM with both axios
  componentDidMount() {
    //myloginArray Data
    axios
      .get("https://api.github.com/users/ErikRodriguez-webdev")
      .then((response) => {
        //console.log("First CDM response: ", response.data);
        this.setState({
          myloginArray: response.data
        });
      })
      .catch((error) => {
        //console.log("First CDM error: ", error);
      }, []);
  }

  // Map info down for cards.js
  render() {
    return (
      <div>
        <PersonalCards myData={this.state.myloginArray} />
      </div>
    );
  }
}

export default MyData;
