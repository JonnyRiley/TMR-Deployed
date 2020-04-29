import React, { Component } from "react";
import * as Api from "../Api";
import { Link } from "@reach/router";
// import validator from "validator";

// import ErrorPage from "./ErrorPage";
class ItemAdder extends Component {
  state = {
    username: "",
    email: "",
    // err: null,
  };
  render() {
    // const { err } = this.state;
    // if (err) return <ErrorPage err={err} />;
    return (
      <main>
        <form onSubmit={this.handleSubmit} className="NewsletterForm">
          <label
            onChange={(e) => this.handleChange(e.target.value, "username")}
            htmlFor="username"
            className="formButtonNewsletter"
          >
            Name:
            <input
              className="newsletterInput"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </label>

          <label
            onChange={(e) => this.handleChange(e.target.value, "email")}
            htmlFor="email"
            className="formButtonNewsletter"
          >
            Email:
            <input
              required
              className="newsletterInput"
              type="text"
              name="email"
              placeholder="Email"
            />
          </label>
          <div className="newsletterFlex">
            <button
              className="navButtonNewsletter"
              type="submit"

              // disabled={!validator.isEmail("email")}
              // onClick={(e) => {prompt}}
            >
              SUBSCRIBE
            </button>
          </div>
        </form>
        <div className="newsletterPolicy">
          <Link to="/privacy">
            <button className="navButtonPolicies">Privacy Policy</button>
          </Link>
        </div>
      </main>
    );
  }
  handleChange = (text, key) => {
    this.setState({ [key]: text });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { addItem } = this;
    const { username, email } = this.state;
    Api.postAnItem({ username, email })
      .catch((err) => {
        this.setState({ err });
      })
      .then((newlyPostedItem) => {
        alert("Thanks For signing up to themilkroom's newsletter!");

        console.log(newlyPostedItem, "newlyPostedItem");
        addItem(newlyPostedItem);
      });
  };
  addItem = (newItem) => {
    this.setState((state) => {
      console.log(newItem, "newItem");
      return { user: [newItem] };
    });
  };
}

export default ItemAdder;
