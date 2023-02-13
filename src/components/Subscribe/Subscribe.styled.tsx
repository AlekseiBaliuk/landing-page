import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  gap: 20px;
  grid-auto-flow: column;
  padding: 80px 0;
  background-image: linear-gradient(to bottom, black 0%, transparent 80%);
`;

export const Input = styled.input`
  width: 350px;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  outline: none;
`;
