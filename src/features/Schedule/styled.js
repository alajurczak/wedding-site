import styled from "styled-components";
import logo from "./asideLogo.png";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px auto;
  padding: 0 20px;
`;

export const Aside = styled.aside``;

export const AsideLogo = styled.aside`
  background-image: url(${logo});
  height: 750px;
  width: 200px;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const SectionHeader = styled.div`
  font-size: 50px;
  letter-spacing: 5px;
  margin: 10px 0;
`;
