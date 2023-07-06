import styled from "styled-components";

export const Form = styled.form`
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;
export const Label = styled.label`
  padding: 10px 0;
`;
export const Input = styled.input`
  padding: 2px 5px;
  margin: 0 10px 0 0;
`;
export const Button = styled.button`
  margin: 20px auto;
  background-color: black;
  color: white;
  font-size: 25px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: row;
`;
