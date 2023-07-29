import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 100px 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 100px 10px;

  @media (max-width: 1500px) {
    margin: 50px 10px;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 630px) {
    grid-template-columns: 1fr;
    gap: 50px 10px;
  }
`;
export const Tiles = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.p`
  text-transform: uppercase;
  letter-spacing: 10px;
  font-size: 30px;
  font-weight: 600;
  margin: 10px;

  @media (max-width: 630px) {
    font-size: 20px;
  }
`;
export const Description = styled.p`
  text-transform: uppercase;
  font-size: 20px;
  margin: 0;
  word-break: break-word;
  @media (max-width: 1500px) {
    text-align: center;
  }
  @media (max-width: 630px) {
    font-size: 18px;
  }
`;
