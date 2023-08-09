import styled, { keyframes } from "styled-components";

const arrowAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
`;

export const ButtonContainer = styled.div`
  margin: 10px;
`;
export const Switcher = styled.div`
  border-left: 2px solid #cc949b;
  border-right: 2px solid #f2f2f2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 5px;

  &:hover {
    cursor: pointer;
    border: 2px solid #cc949b;
    border-right: 2px solid #f2f2f2;
  }
`;
export const Text = styled.div`
  &:hover {
    animation: ${arrowAnimation} 1s infinite;
  }
`;
