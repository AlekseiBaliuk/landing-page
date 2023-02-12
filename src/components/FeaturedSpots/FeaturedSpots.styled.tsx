import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 80px 20px;
  color: #fff;
  background-image: linear-gradient(to bottom, black 0%, transparent 80%);
`;

export const Image = styled.img`
  width: 300px;
  height: 100%;
`;

export const ImgWrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-auto-flow: column;
  margin-left: auto;
  margin-right: auto;
  padding-top: 70px;
`;

export const InfoWrapper = styled.div`
  width: 150px;
  text-align: end;
`;

export const InfoTitle = styled.h2`
  margin-bottom: 40px;
`;

export const ImgTitle = styled.h3`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ImgDescription = styled.p`
  color: #ccc;
`;
