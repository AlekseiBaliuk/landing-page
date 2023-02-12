import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding-top: 150px;
  background-image: linear-gradient(to top, black 0%, transparent 80%);
  color: #fff;
`;

export const Img = styled.img`
  width: 500px;
  height: 100%;
  margin-right: 100px;
`;

export const Title = styled.h3`
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 60px;
`;

export const SubDescription = styled.p`
  margin-bottom: 60px;
`;

export const Description = styled.p`
  width: 500px;
  overflow: hidden;
  margin-bottom: 60px;
`;

export const Button = styled.button`
  background-color: #f5e320;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;
