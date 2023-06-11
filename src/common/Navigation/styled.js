import { NavLink } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from "../../features/InitialSite/Logo.png";

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const NavigationList = styled.div`
  font-size: 20px;
  list-style-type: none;
  display: flex;
  margin: 10px auto;
`;

export const StyledNavLink = styled(NavLink)`
  line-height: 2;
  padding: 5px 25px;
  text-decoration: none;

  &:link {
    color: black;
  }

  &:hover {
    cursor: pointer;
    border-bottom: solid 2px ${({ theme }) => theme.colors.pink};
  }

  &:active {
    color: black;
  }
`;

export const LogoLink = styled(NavLink)`
  display: inline-block;
  background-image: url(${backgroundImage});
  background-size: cover;
  width: 70px;
  height: 70px;
`;

export const NavigationLogo = styled.div`
  list-style-type: none;
  margin: 0 10px;
`;
