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
`;

export const MainContainer = styled.div`
  height: 500px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: solid 2px ${({ theme }) => theme.colors.pink};
  border-top: solid 2px ${({ theme }) => theme.colors.pink};
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
  animation: ${slideRightLeft} 35s linear infinite;
`;

export const Date = styled.p`
  font-size: 50px;
  text-align: center;
  letter-spacing: 10px;
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
`;
