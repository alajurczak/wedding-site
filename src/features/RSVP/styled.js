import styled from "styled-components";

export const Entry = styled.div`
  margin: 50px auto;
  display: flex;
  justify-content: center;
  font-size: 100px;
  text-transform: uppercase;

  @media (max-width: 630px) {
    font-size: 50px;
  }
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: solid black 2px;
  border-right: solid black 2px;
  padding: 0 50px;

  @media (max-width: 630px) {
    padding: 0 25px;
  }
`;

export const Ornament = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  font-size: 50px;
  background-color: black;
  width: 200px;
  height: 100%;
  color: white;
  border-radius: 5px;

  @media (max-width: 630px) {
    font-size: 30px;
    width: 110px;
  }
`;
