import React from "react";

import * as SC from "./Button.styled";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  onClick?: () => void;
}
export const Button = ({ type, children, onClick }: IButton) => {
  return (
    <SC.Button type={type} onClick={onClick}>
      {children}
    </SC.Button>
  );
};
