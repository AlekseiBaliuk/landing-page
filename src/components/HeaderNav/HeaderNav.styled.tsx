import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  display: flex;
  padding: 10px 0 10px 20px;
  text-decoration: none;
  color: #ccc;

  &.active {
    color: #fff;
    font-weight: 600;
    ::after {
      content: "___";
      margin-left: auto;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 50px 0;
`;
