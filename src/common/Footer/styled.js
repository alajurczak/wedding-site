import styled from "styled-components";
import { ReactComponent as FacebookLogo } from "./facebook.svg";
import { ReactComponent as InstagramLogo } from "./instagram.svg";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  font-family: "Gwendolyn";
`;

export const TileWrapper = styled.div`
  display: flex;
`;
export const Tile = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Email = styled.a`
  font-family: "Cormorant";
  font-size: 20px;
  padding: 10px 0;
  text-decoration: none;
  color: black;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.pink};
    cursor: pointer;
  }

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;
export const Link = styled.a`
  margin: 0 10px;
  color: black;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.pink};
  }
  @media (max-width: 500px) {
    margin: 0 5px;
  }
`;

export const Facebook = styled(FacebookLogo)`
  width: 48px;
  height: 48px;

  @media (max-width: 500px) {
    width: 38px;
    height: 38px;
  }
`;
export const Instagram = styled(InstagramLogo)`
  width: 48px;
  height: 48px;

  @media (max-width: 500px) {
    width: 38px;
    height: 38px;
  }
`;

export const Caption = styled.p`
  padding: 20px;
  margin: 0;
  padding: 0;
`;
export const Icons = styled.div`
  display: flex;
`;
