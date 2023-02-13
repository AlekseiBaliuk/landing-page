import React, { useState } from "react";
import { Button } from "../Button/Button";
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

      <Button type="button" onClick={handleSubscribe}>
        Subscribe
      </Button>
    </SC.Wrapper>
  );
};
