import React, { Component } from "react";

class DessertAdder extends Component {
  state = {
    amountDifference: 0,
    Amount: 0,
    disabledMinus: true,
  };
  render() {
    const { handleTotal, plusDisabled } = this.props;
    const { handleClick } = this;
    const { amountDifference, Amount, disabledMinus } = this.state;
    // if (err) return <ErrorPage err={err} />;
    return (
      <main className="button_Amount">
        <div className="incDiv">
          <button
            disabled={disabledMinus}
            className="button_Amount"
            onClick={(e) => {
              e.preventDefault();
              handleClick(-1);
              handleTotal(-1);
            }}
          >
            -
          </button>
          <p className="DesertName">x{Amount + amountDifference}</p>
          <button
            className="button_Amount"
            disabled={plusDisabled}
            onClick={(e) => {
              e.preventDefault();
              handleClick(1);
              handleTotal(1);
            }}
          >
            +
          </button>
        </div>
      </main>
    );
  }

  handleClick = (inc_Amount) => {
    const { amountDifference } = this.state;
    this.setState((currentState) => {
      if (amountDifference === 1) {
        return {
          amountDifference: currentState.amountDifference + inc_Amount,
          disabledMinus: true,
        };
      }
      return {
        amountDifference: currentState.amountDifference + inc_Amount,
        disabledMinus: false,
      };
    });
  };
}

export default DessertAdder;
