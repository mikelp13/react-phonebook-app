import React from "react";
import { css } from "@emotion/core";
import DotLoader from "react-spinners/DotLoader";

const override = css`
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const Loader = () => {
  return <DotLoader color="#0C8671" loading="true" css={override} size={60} />;
};

export default Loader;
