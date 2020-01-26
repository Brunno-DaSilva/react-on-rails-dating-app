import React, { Component } from "react";
import Daters from "./components/Hello";
import LandingPage from "./components/LandingPage/LandingPage";
import "../src/App.css";

class App extends Component {
  state = {
    users: [],
    formInputs: {
      name: "",
      starsign: "",
      age: "",
      img: "",
      ltl: ""
    }
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(jsonedUsers => this.setState({ users: jsonedUsers }))
      .catch(error => console.error(error));
  };

  handleChange = event => {
    const updateInput = Object.assign(this.state.formInputs, {
      [event.target.id]: event.target.value
    });
    this.setState(updateInput);
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("http://localhost:3000/users", {
      body: JSON.stringify(this.state.formInputs),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(createUser => {
        return createUser.json();
      })
      .then(jsonedUser => {
        this.setState({
          formInputs: {
            name: "",
            starsign: "",
            age: "",
            img: "",
            ltl: ""
          },
          users: [jsonedUser, ...this.state.users]
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <LandingPage />
        <Daters users={this.state.users} />
        <section className="add-user-form">
          <div className="over-bg">
            <div className="form-title">
              <h1>Add a new User</h1>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <div>
                  <label htmlFor="name">Name</label>
                </div>

                <input
                  type="text"
                  id="name"
                  value={this.state.formInputs.name}
                  onChange={this.handleChange}
                />
              </div>

              <div>
                <div>
                  <label htmlFor="age">age</label>
                </div>
                <input
                  type="text"
                  id="age"
                  value={this.state.formInputs.age}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <div>
                  <label htmlFor="starsign">Starsign</label>
                </div>
                <input
                  type="text"
                  id="starsign"
                  value={this.state.formInputs.starsign}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <div>
                  <label htmlFor="img">img</label>
                </div>
                <input
                  type="text"
                  id="img"
                  value={this.state.formInputs.img}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <div>
                  <label htmlFor="ltl">ltl</label>
                </div>
                <br />
                <div>
                  <input
                    type="text"
                    id="ltl"
                    value={this.state.formInputs.ltl}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <input type="submit" className="submit" />
            </form>
          </div>
          <div></div>
        </section>
      </div>
    );
  }
}

export default App;
