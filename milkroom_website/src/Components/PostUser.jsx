import React, { Component } from "react";
import * as Api from "../Api";
import { Link } from "@reach/router";
// import validator from "validator";
import SimpleReactValidator from "simple-react-validator";
import ErrorPage from "./ErrorPage";

// import ErrorPage from "./ErrorPage";
class ItemAdder extends Component {
  state = {
    username: "",
    email: "",
    comments: [],
    user: [],
    err: null,
  };
  render() {
    this.validator = new SimpleReactValidator();
    const { err } = this.state;
    if (err) return <ErrorPage err={err} />;
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
            ></input>
            {/* {this.validator.message(
              "email",
              this.state.email,
              "required|email",
              "text-danger"
            )} */}
          </label>
          <div className="newsletterFlex">
            <button className="navButtonNewsletter" type="submit">
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
    console.log(text, "HANDLINGTEXT");
    this.setState({ [key]: text });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // const { addItem } = this;
    const { username, email } = this.state;

    Api.postAnItem({ username, email })
      .catch((err) => {
        this.setState({ err });
      })
      .then((newlyPostedItem) => {
        alert("Thanks For signing up to themilkroom's newsletter!");
      });

    // console.log(newlyPostedItem, "newlyPostedItem");
    // addItem(newlyPostedItem);
    // });
  };
  // addItem = (newItem) => {
  //   this.setState((state) => {
  //     console.log(newItem, "newItem");
  //     return { user: [newItem, ...state.comments] };
  //   });
  // };
  // componentDidUpdate(prevProps, prevState) {
  //   const { user } = this.state;
  //   if (user !== prevState.user)
  //     this.setState(() => {
  //       console.log(user, "changig");
  //       return { username: "", email: "" };
  //     });
  // }
}

export default ItemAdder;
