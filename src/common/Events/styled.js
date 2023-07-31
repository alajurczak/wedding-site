import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
`;
export const EventWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
`;
export const EventRight = styled.div`
  width: 250px;
  border-bottom: solid 2px black;
  padding-left: 10px;
`;
export const EventLeft = styled.div`
  width: 250px;
  border-bottom: solid 2px black;
  padding-right: 10px;
`;
export const TimeRight = styled.p`
  text-align: right;
  margin: 0;
  margin-bottom: 10px;
  font-size: 45px;
`;

export const TimeLeft = styled.p`
  text-align: left;
  margin: 0;
  margin-bottom: 10px;
  font-size: 45px;
`;
export const DescriptionRight = styled.p`
  text-align: right;
  margin: 0;
  margin-bottom: 10px;
  font-size: 20px;
`;
export const DescriptionLeft = styled.p`
  text-align: left;
  margin: 0;
  margin-bottom: 10px;
  font-size: 20px;
`;
export const EventImageRight = styled.div`
  width: 250px;
  display: flex;
  justify-content: right;
  border-bottom: solid 2px black;
  padding: 0 10px 10px 10px;
`;
export const EventImageLeft = styled.div`
  width: 250px;
  display: flex;
  justify-content: left;
  border-bottom: solid 2px black;
  padding: 0 10px 10px 10px;
`;
export const Line = styled.div`
  width: 1px;
  height: 97px;
  background-color: black;
  border: 1px solid black;
`;
