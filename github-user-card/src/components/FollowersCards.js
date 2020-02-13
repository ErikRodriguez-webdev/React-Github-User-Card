import React, { useState } from "react";
import "../App.css";
import { Collapse, Button, CardBody, Card } from "reactstrap";

const FollowersCards = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button
        color="secondary"
        size="lg"
        onClick={toggle}
        style={{ marginBottom: "1rem" }}
      >
        My Followers
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            {props.followersData.map((each) => (
              <div key={each.id} className="allFollowersStyle">
                <p>{each.login}</p>
                <p>{each.html_url}</p>
              </div>
            ))}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default FollowersCards;
