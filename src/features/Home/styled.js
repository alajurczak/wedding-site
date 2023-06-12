import styled, { keyframes } from "styled-components";

const slideRightLeft = keyframes`
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  `;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    overflow-y: auto;
  }
`;

export const MainContainer = styled.div`
  height: 500px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  margin: 0 auto;
  font-size: 150px;
  font-weight: 300;
  letter-spacing: 20px;
  width: 100%;
  height: 100%;
`;

export const Header = styled.h1`
  margin: 0 auto;
  font-size: 150px;
  font-weight: 300;
  letter-spacing: 20px;
  animation: ${slideRightLeft} 15s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    margin-top: 80px;
    font-size: 90px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 78px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 36px;
    margin-top: 0px;
  }
`;

export const Date = styled.p`
  font-size: 50px;
  text-align: center;
  letter-spacing: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 25px;
  }
`;

export const Line = styled.div`
  width: 500px;
  height: 5px;
  background-image: radial-gradient(
    circle at 48.46% 51.08%,
    #fff7f4 0,
    #ffe4e2 25%,
    #f2cdcd 50%,
    #e3b6ba 75%,
    #d8a4ad 100%
  );
  margin: 0 auto;
  border-radius: 3px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    width: 250px;
  }
`;
