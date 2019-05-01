import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="article">
        <div className="intro" />
        <div className="slide">
          <iframe
            src="//slides.com/doondoon/51-labors-hackathon/embed"
            width="576"
            height="420"
            scrolling="no"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          />
        </div>
      </div>
    );
  }
}

export default Home;
