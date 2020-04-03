import React, { Component } from "react";
import AboutPage from "./AboutPage";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="bg"></div>
        <AboutPage />
      </div>
    );
  }
}

export default LandingPage;
