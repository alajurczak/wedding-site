import styled from "styled-components";
import heart from "./serce.png";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.concrete};
`;

export const Heart = styled.div`
  background-image: url(${heart});
  background-size: cover;
  width: 25px;
  height: 25px;
  margin: 25px auto;
`;
