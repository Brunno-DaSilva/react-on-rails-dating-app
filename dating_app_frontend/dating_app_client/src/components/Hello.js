import React, { Component } from "react";
import "../components/hello.css";

class Daters extends Component {
  render() {
    return (
      <div className="container">
        <div className="grid-wrapper">
          <div className="left">
            {this.props.users.slice(0, 3).map(user => {
              return (
                <div key={user.id} className="card">
                  <div className="card-image">
                    <img src={user.img} alt={user.name} />
                  </div>
                  <div className="card-info">
                    <h4> {user.name} </h4>
                    {user.ltl ? (
                      <p> Loves to laugh and have a good time</p>
                    ) : (
                      <p>Hates laughing, does not like having a good time</p>
                    )}
                  </div>
                  <div className="card-stats">
                    <div className="stat">
                      <p>
                        <i class="fas fa-birthday-cake fa-2x"></i> {user.age}
                      </p>
                    </div>

                    <div className="stat">
                      <p>
                        <i class="fas fa-user-astronaut fa-2x"></i>
                        {user.starsign}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="center"></div>

          <div className="right">
            {this.props.users.slice(-3).map(user => {
              return (
                <div key={user.id} className="card">
                  <div className="card-image">
                    <img src={user.img} alt={user.name} />
                  </div>
                  <div className="card-info">
                    <h4> {user.name} </h4>
                    {user.ltl ? (
                      <p> Loves to laugh and have a good time</p>
                    ) : (
                      <p>Hates laughing, does not like having a good time</p>
                    )}
                  </div>
                  <div className="card-stats">
                    <div className="stat">
                      <p>
                        <i class="fas fa-birthday-cake fa-2x"></i> {user.age}
                      </p>
                    </div>

                    <div className="stat">
                      <p>
                        <i class="fas fa-user-astronaut fa-2x"></i>
                        {user.starsign}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Daters;
