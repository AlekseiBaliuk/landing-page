import React from "react";

import * as SC from "./HeaderNav.styled";

export const HeaderNav = () => {
  return (
    <SC.Wrapper>
      <nav>
        <SC.Link to="/">Home</SC.Link>
        <SC.Link to="/recommendation">Recommendation</SC.Link>
      </nav>
    </SC.Wrapper>
  );
};
