import styled from "styled-components";

export const Entry = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto;

  @media (max-width: 1000px) {
    margin: 25px auto;
  }
`;

export const QandA = styled.p`
  font-size: 250px;
  margin: 0;

  @media (max-width: 1000px) {
    font-size: 150px;
  }

  @media (max-width: 530px) {
    font-size: 90px;
  }
`;

export const Tiles = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  max-width: 1600px;
  justify-content: center;
  justify-items: center;

  @media (max-width: 530px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    max-width: 400px;
  }
`;
export const Tile = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.bizarre};
  padding: 50px 20px;
  text-transform: uppercase;
  width: 100%;
  max-width: 500px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (max-width: 530px) {
    padding: 0px;
    margin: 10px;
    max-width: 270px;
  }
`;
export const Title = styled.p`
  font-size: 30px;
  margin: 10px;

  @media (max-width: 530px) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  font-family: "Montserrat";
  margin: 10px;

  @media (max-width: 530px) {
    font-size: 15px;
  }
`;
