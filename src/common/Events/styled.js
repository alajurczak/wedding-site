import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
`;
export const EventWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 30px 0;

  @media (max-width: 530px) {
    margin: 15px 0;
  }
`;
export const Event = styled.div`
  width: 350px;

  @media (max-width: 530px) {
    width: 150px;
  }
`;

export const Time = styled.p`
  text-align: center;
  margin: 0;
  font-size: 45px;
  padding-bottom: 5px;
  border-bottom: 2px black solid;

  @media (max-width: 530px) {
    font-size: 25px;
    border-bottom: 1px black solid;
  }
`;

export const Description = styled.p`
  text-align: center;
  margin: 0;
  margin-bottom: 10px;
  font-size: 20px;
  text-transform: uppercase;

  @media (max-width: 530px) {
    font-size: 15px;
  }
`;

export const EventImage = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  align-self: end;
  padding: 0 60px 10px 10px;

  @media (max-width: 530px) {
    padding: 0 5px 10px;
    width: 100px;
    justify-content: start;
  }
`;
