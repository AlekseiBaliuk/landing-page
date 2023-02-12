import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import headerImg from "../../assets/header-img.jpg";

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 600px;
  background-image: linear-gradient(to top, black 0%, transparent 80%),
    url("${headerImg}");
  background-size: cover;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  width: 300px;
  height: 100px;
  background-color: #f5e320;
  font-size: 38px;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: #212121;
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;

  :last-child {
    margin-right: 40px;
  }
`;

export const Decor = styled.span`
  color: #fff;
  margin: 0 40px;
`;

export const HeaderCard = styled.div`
  position: relative;
  bottom: 240px;
  left: 400px;
  width: 300px;
  height: 300px;

  color: #fff;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  margin-bottom: 40px;
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
