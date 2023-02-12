import React, { useState } from "react";
import * as SC from "./Subscribe.styled";

export const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (): void => {
    console.log(email);
    setEmail("");
  };

  return (
    <SC.Wrapper>
      <SC.Input
        type="text"
        placeholder="Your Email"
        onChange={(e) => setEmail(e.currentTarget.value)}
        value={email}
      />
      <SC.Button type="button" onClick={handleSubscribe}>
        Subscribe
      </SC.Button>
    </SC.Wrapper>
  );
};
