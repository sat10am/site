import React, { Component } from "react";
import { Skeleton, Switch, Card, Icon, Avatar } from "antd";
const { Meta } = Card;

class Profile extends Component {
  state = {
    // TODO: loading
    loading: false
  };

  render() {
    const { loading } = this.state;
    const { name, mail, github } = this.props.data;

    return (
      <div>
        <Card hoverable style={{ width: 400, marginTop: 16 }} loading={loading}>
          {/* <Icon type="github" /> */}
          <Meta
            avatar={<Avatar icon="user" />}
            title={name}
            description="Hello, member!"
          />
        </Card>
      </div>
    );
  }
}

export default Profile;
