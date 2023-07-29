import { NavLink } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from "../../features/InitialSite/Logo.png";

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 999;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`;

export const NavigationList = styled.div`
  font-size: 20px;
  list-style-type: none;
  display: flex;
  align-items: center;
  margin: 10px auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    flex-direction: column;
  }
`;

export const StyledNavLink = styled(NavLink)`
  line-height: 2;
  padding: 5px 25px;
  text-decoration: none;

  &:link {
    color: black;
  }

  &:visited {
    color: black;
  }

  &:hover {
    cursor: pointer;
    border-bottom: solid 2px ${({ theme }) => theme.colors.pink};
  }

  &:active {
    color: black;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 25px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 20px;
  }
`;

export const LogoLink = styled(NavLink)`
  display: inline-block;
  background-image: url(${backgroundImage});
  background-size: cover;
  width: 70px;
  height: 70px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    width: 70px;
    height: 70px;
  }
`;

export const NavigationLogo = styled.div`
  list-style-type: none;
  margin: 0 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: none;
  }
`;
