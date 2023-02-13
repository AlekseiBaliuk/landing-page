import styled from "styled-components";

import mountainBg from "../../assets/mountain-bg.jpg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  padding: 100px 20px;
  background-image: linear-gradient(to top, black 0%, transparent 80%),
    url("${mountainBg}");
  background-size: cover;
  color: #fff;
`;

export const Img = styled.img`
  width: 500px;
  height: 100%;
  margin-left: 100px;
`;

export const CardTitle = styled.h3`
  font-size: 36px;
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

export const CardWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  padding: 80px 0;
`;

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 600;
`;
