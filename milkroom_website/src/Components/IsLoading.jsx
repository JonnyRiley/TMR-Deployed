import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;
function IsLoading() {
  return (
    <div className="sweetLoading">
      <ClipLoader css={override} size={150} color={"#123abc"} />
    </div>
  );
}

export default IsLoading;
