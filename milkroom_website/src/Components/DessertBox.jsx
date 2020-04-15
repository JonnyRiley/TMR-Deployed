import React, { Component } from "react";

class DessertAdder extends Component {
  state = {
    amountDifference: 0,
    disabled: false,
    Amount: 0,
    total: 0,
  };
  render() {
    const { amountDifference, disabled, Amount } = this.state;
    const { handleClick } = this;

    // if (err) return <ErrorPage err={err} />;
    return (
      <main className="button_Amount">
        <div className="incDiv">
          <button
            disabled={disabled}
            className="button_Amount"
            onClick={(e) => {
              e.preventDefault();
              handleClick(-1);
            }}
          >
            -
          </button>
          <p className="DesertName">x{Amount + amountDifference}</p>

          <button
            className="button_Amount"
            disabled={disabled}
            onClick={(e) => {
              e.preventDefault();
              handleClick(1);
            }}
          >
            +
          </button>
        </div>
      </main>
    );
  }
  handleClick = (inc_Amount) => {
    // const { disabled } = this.state;
    this.setState((currentState) => {
      return {
        amountDifference: currentState.amountDifference + inc_Amount,
        total: currentState.total + inc_Amount,
      };
    });
  };
}

export default DessertAdder;
