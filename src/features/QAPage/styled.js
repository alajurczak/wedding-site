import styled from "styled-components";

export const Entry = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
`;

export const QandA = styled.p`
  font-size: 250px;
  margin: 0;
`;

export const Tiles = styled.div`
  margin: 100px 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px 20px;
  justify-items: center;
`;
export const Tile = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.bizarre};
  padding: 50px 20px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
export const Title = styled.p`
  font-size: 30px;
  margin: 10px;
`;

export const Description = styled.p`
  font-family: "Montserrat";
  margin: 10px;
`;
