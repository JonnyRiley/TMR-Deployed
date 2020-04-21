import React, { Component } from "react";

class DessertAdder extends Component {
  state = {
    amountDifference: 0,
    Amount: 0,
  };
  render() {
    const {
      handleTotal,
      boxSetAmount,
      minusDisabled,
      plusDisabled,
    } = this.props;
    const { handleClick } = this;
    const { amountDifference, Amount } = this.state;
    // if (err) return <ErrorPage err={err} />;
    // if (amountDifference >= 0) {
    return (
      <main className="button_Amount">
        <div className="incDiv">
          <button
            disabled={minusDisabled}
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
        {/* <p className="hidden">{total}</p> */}
      </main>
    );
  }

  handleClick = (inc_Amount) => {
    // const { amountDifference } = this.state;
    // const { boxSetAmount, total } = this.props;
    this.setState((currentState) => {
      return {
        amountDifference: currentState.amountDifference + inc_Amount,
      };
    });
  };
}

export default DessertAdder;
