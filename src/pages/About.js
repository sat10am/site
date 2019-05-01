import React, { Component } from "react";
import { Icon, Badge } from "antd";

class About extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <div className="title">
            About<span className="dot">.</span>
          </div>
          <div className="desc">
            SAT10AM 은 매주 토요일 오전 10시에 <br />웹 개발에 관련된 주제로
            공부하고 발표하는 기술 스터디 모임입니다
          </div>
        </div>

        <div className="section">
          <div className="title">
            Github<span className="dot">.</span>
          </div>
          <Icon
            onClick={() => {
              window.open("https://github.com/sat10am");
            }}
            type="github"
            style={{ fontSize: "30px", color: "#eee" }}
          />
        </div>
        <div className="section">
          <div className="title">
            History<span className="dot">.</span>
          </div>

          <div>
            <a href="https://github.com/sat10am/very-first">Season 1</a>
            <span className="badgeSpan">
              <Badge count={"finished"} style={{ backgroundColor: "#ccc" }} />
            </span>
          </div>
          <div>
            Season 2
            <span className="badgeSpan">
              <Badge count={"ongoing"} style={{ backgroundColor: "#52c41a" }} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
