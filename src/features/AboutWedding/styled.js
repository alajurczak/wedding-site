import styled from "styled-components";
import location from "./location.png";

export const Entry = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
`;
export const OurDay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 300px;
`;
export const Our = styled.p`
  font-family: "Gwendolyn";
  margin: 0;
`;
export const Day = styled.p`
  text-transform: uppercase;
  font-size: 250px;
  margin: 0;
`;
export const Names = styled.div`
  font-size: 75px;
  letter-spacing: 10px;
`;
export const DateAndPlace = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  letter-spacing: 5px;
`;
export const Date = styled.p`
  margin: 20px 0;
  font-size: 35px;
`;
export const Place = styled.p`
  margin: 20px 0;
  font-size: 35px;
`;
export const Separator = styled.div`
  width: 5px;
  height: 5px;
  background-color: black;
  border-radius: 50%;
  margin: 0 15px;
`;

export const Informations = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 0 50px;
`;
export const Description = styled.div`
  align-self: center;
  justify-self: center;
`;
export const Title = styled.p`
  font-size: 70px;
  font-weight: 400;
  margin: 20px;
`;
export const MainInformations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Address = styled.p`
  font-size: 25px;
  margin: 10px;
`;
export const WrapperLink = styled.a``;

export const Location = styled.div`
  justify-self: center;
  align-self: center;
  background-image: url(${location});
  height: 500px;
  background-size: contain;
  background-repeat: no-repeat;
`;
