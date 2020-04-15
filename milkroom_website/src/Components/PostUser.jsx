import React, { Component } from "react";
import * as Api from "../Api";

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
      <form onSubmit={this.handleSubmit} className="NewsletterForm">
        <label
          required
          onChange={(e) => this.handleChange(e.target.value, "username")}
          htmlFor="username"
          className="formButtonNewsletter"
        >
          Name:
        </label>
        <input
          className="newsletterInput"
          type="text"
          name="name"
          placeholder="Name"
        />

        <label
          onChange={(e) => this.handleChange(e.target.value, "email")}
          htmlFor="email"
          className="formButtonNewsletter"
        >
          Email:
        </label>
        <input
          className="newsletterInput"
          type="text"
          name="email"
          placeholder="Email"
        />

        <input
          className="navButtonNewsletter"
          type="submit"
          value="Subscribe"
        />
      </form>
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
        addItem(newlyPostedItem);
      });
  };
  addItem = (newItem) => {
    this.setState((state) => {
      console.log(newItem, "newItem");
      return { username: [newItem, ...state.username] };
    });
  };
}
export default ItemAdder;
