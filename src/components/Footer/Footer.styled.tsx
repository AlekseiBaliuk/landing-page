import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  width: 1200px;
  padding: 20px 30px;
  box-sizing: border-box;
  background-color: #f5e320;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`;

export const FooterLogo = styled(Link)`
  text-decoration: none;
  color: #212121;
  font-size: 26px;
  font-weight: 600;
`;

export const SocialsWrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-auto-flow: column;
  align-items: center;
`;

export const SocialLink = styled.a`
  display: block;
  text-decoration: none;
  width: 24px;
  height: 24px;

  margin: 0;
  padding: 6px;
`;
