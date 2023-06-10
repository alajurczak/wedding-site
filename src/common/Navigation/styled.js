import styled, { keyframes } from "styled-components";
import backgroundImage from "./Logo.png";

const fadeIn = keyframes`
    0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  height: 100vh;
`;

export const Logo = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  width: 500px;
  height: 500px;
  position: absolute;
`;
export const NavContainer = styled.nav`
  position: relative;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(10px);
  left: 16%;
  transform: translate(-50%);
  height: 500px;
  display: flex;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  transition: filter 0.2s ease;
`;

export const NavigationList = styled.div`
  font-size: 30px;
  list-style-type: none;
  margin: 0 10px;
  width: 300px;
`;

export const StyledNavLink = styled.a`
  line-height: 2;
  text-decoration: none;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-in-out forwards;
  transition: filter 0.2s ease;

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;
