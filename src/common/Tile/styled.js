import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 100px 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 100px 10px;
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
`;
export const Description = styled.p`
  text-transform: uppercase;
  font-size: 20px;
  margin: 0;
  word-break: break-word;
`;
