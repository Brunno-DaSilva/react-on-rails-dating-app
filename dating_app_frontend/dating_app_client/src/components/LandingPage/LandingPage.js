import React, { Component } from "react";
import "../LandingPage/landingpage.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page-container">
        <div className="overlay"></div>
        <div className="landing-page-info">
          <div className="title">
            <h1>
              Find The <span>JS</span>
            </h1>
            <h1>
              of your <span>WebPage</span>
            </h1>
            <div>
              <p>The one who makes everything functional</p>
            </div>
          </div>
          <div className="btn-match btn-effect">
            <p>Match Me</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
