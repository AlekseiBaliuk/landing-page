import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 0;
`;

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  outline: none;
`;

export const Button = styled.button`
  width: 140px;
  background-color: #f5e320;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 20px;
`;

export const Text = styled.p`
  font-family: "Raleway", sans-serif;
  color: ${(props) => props.color || "#4d4d4d"};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`;
