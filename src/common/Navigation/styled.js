import styled, { keyframes } from "styled-components";
import backgroundImage from "./Logo.png";
const mobileMin = ({ theme }) => theme.breakpoints.mobileMin;
const mobileMax = ({ theme }) => theme.breakpoints.mobileMin;

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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    width: 350px;
    height: 350px;
  }
`;

export const NavContainer = styled.nav`
  position: relative;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  left: 16%;
  transform: translate(-50%);
  height: 500px;
  display: flex;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  transition: filter 0.2s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    left: 2%;
    width: 500px;
    justify-content: center;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    left: 2%;
    width: 350px;
    justify-content: center;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
`;

export const NavigationList = styled.div`
  font-size: 30px;
  list-style-type: none;
  margin: 0 10px;
  width: 300px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    width: 200px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
