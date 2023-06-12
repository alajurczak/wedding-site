import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  max-width: 400px;
  font-family: "Gwendolyn";
`;

export const Text = styled.p`
  font-size: 35px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 25px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 20px;
  }
`;

export const Counter = styled.p`
  font-size: 30px;
  letter-spacing: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 25px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 20px;
  }
`;
