import React from "react";
import * as Api from "../Api";
import ErrorPage from "./ErrorPage";

const initialState = {
  username: "",
  email: "",
  usernameError: "",
  emailError: "",
  err: null,
};

export default class ItemAdder extends React.Component {
  state = initialState;

  handleChange = (text, key) => {
    this.setState({ [key]: text });
  };

  validate = () => {
    let usernameError = "";
    let emailError = "";

    if (!this.state.username) {
      usernameError = "Cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Invalid email";
    }

    if (emailError || usernameError) {
      this.setState({ emailError, usernameError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      const { username, email } = this.state;

      Api.postAnItem({ username, email })
        .catch((err) => {
          this.setState({ err });
        })
        .then(() => {
          alert("Thanks For signing up to themilkroom's newsletter!");
        });
      this.setState(initialState);
    }
  };

  render() {
    const { err } = this.state;
    if (err) return <ErrorPage err={err} />;
    return (
      <form className="NewsletterForm" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username" className="formButtonNewsletter">
            Name:
            <input
              className="newsletterInput"
              name="username"
              placeholder="name"
              value={this.state.username}
              onChange={(e) => this.handleChange(e.target.value, "username")}
            />
          </label>
          <div className="errorMsg">{this.state.usernameError}</div>
        </div>
        <div>
          <label htmlFor="email" className="formButtonNewsletter">
            Email:{" "}
            <input
              className="newsletterInput"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={(e) => this.handleChange(e.target.value, "email")}
            />
          </label>
          <div className="errorMsg">{this.state.emailError}</div>
        </div>

        <div className="newsletterFlex">
          <button className="navButtonNewsletter" type="submit">
            SUBSCRIBE
          </button>
        </div>
      </form>
    );
  }
}
