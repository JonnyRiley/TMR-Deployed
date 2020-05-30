import React, { Component } from "react";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

class DessertAdder extends Component {
  state = {
    amountDifference: 0,
    Amount: 0,
    disabledMinus: true,
  };
  render() {
    const { handlePlus, handleMinus, handleTotal, plusDisabled } = this.props;
    const { handleClick } = this;
    const { amountDifference, Amount, disabledMinus } = this.state;

    return (
      <main className="button_Amount">
        <div className="incDiv">
          <button
            disabled={disabledMinus}
            className="button_Amount"
            onClick={(e) => {
              e.preventDefault();
              handleClick(-1);
              handleMinus(amountDifference, this.props.value);
              handleTotal(-1, this.props.value);
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <p className="DesertName">x{Amount + amountDifference}</p>
          <button
            className="button_Amount"
            disabled={plusDisabled}
            onClick={(e) => {
              e.preventDefault();
              handleClick(1);
              handlePlus(amountDifference, this.props.value);
              handleTotal(1, this.props.value);
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
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
