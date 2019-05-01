import React, { Component } from "react";
import Profile from "../component/Profile/Profile";
import data from "resource/member.json";

class Member extends Component {
  showData() {
    console.log(data);

    if (data) {
      return data.map((i, v) => console.log(v));
    }
    return "n";
  }

  render() {
    const { members } = data;
    console.log(members);
    return (
      <div>
        {members.map((data, idx) => {
          return <Profile data={data} key={idx} />;
        })}
      </div>
    );
  }
}

export default Member;
