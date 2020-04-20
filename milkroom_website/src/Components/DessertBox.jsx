import React, { Component } from "react";

class DessertAdder extends Component {
  state = {
    amountDifference: 0,
    Amount: 0,
    disabled: false,
  };
  render() {
    const { amountDifference, Amount, disabled } = this.state;
    const { handleTotal, boxSetAmount } = this.props;
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
              handleTotal(-1);
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
              handleTotal(1);
            }}
          >
            +
          </button>
        </div>
        {/* <p className="hidden">{total}</p> */}
      </main>
    );
  }

  handleClick = (inc_Amount) => {
    // const { amountDifference } = this.state;
    const { boxSetAmount, total } = this.props;

    this.setState((currentState) => {
      if (total === boxSetAmount - 1) {
        return {
          amountDifference: currentState.amountDifference + inc_Amount,
          disabled: true,
        };
      }
      return {
        amountDifference: currentState.amountDifference + inc_Amount,
      };
    });
  };
}

export default DessertAdder;
