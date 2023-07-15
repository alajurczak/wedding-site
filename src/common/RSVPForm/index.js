import React, { useRef } from "react";
import {
  Form,
  Label,
  Input,
  Button,
  Container,
  Wrapper,
  WrapperInput,
} from "./styled";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledToastContainer } from "./styled";

export const RSVPForm = () => {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_uuh0msb",
        "template_kn5r7fm",
        event.target,
        "2brYp790je6GaCPwf"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Dziękujemy za wypełnienie!");
          formRef.current.reset(); // Wyczyść formularz po wysłaniu
        },
        (error) => {
          console.error(error.text);
          toast.error("Ups... coś poszło nie tak...");
        }
      );
  };

  return (
    <Form onSubmit={handleSubmit} ref={formRef}>
      <Container>
        <Wrapper>
          <Label htmlFor="firstName">Imię</Label>
          <Input type="text" id="firstName" name="firstName" required />
        </Wrapper>

        <Wrapper>
          <Label htmlFor="lastName">Nazwisko</Label>
          <Input type="text" id="lastName" name="lastName" required />
        </Wrapper>
      </Container>

      <Wrapper>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" required />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="attendance">Potwierdzasz swoje przybycie?</Label>
        <>
          <WrapperInput>
            <Input
              type="radio"
              id="attendanceYes"
              name="attendance"
              value="tak"
              required
            />
            <Label htmlFor="attendanceYes">Tak</Label>
          </WrapperInput>
          <WrapperInput>
            <Input
              type="radio"
              id="attendanceNo"
              name="attendance"
              value="nie"
              required
            />
            <Label htmlFor="attendanceNo">Nie</Label>
          </WrapperInput>
        </>
      </Wrapper>

      <Wrapper>
        <Label htmlFor="companionName">
          Imię i nazwisko osoby towarzyszącej
        </Label>
        <Input type="text" id="companionName" name="companionName" />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="dietaryRestrictions">Ograniczenia w jedzeniu</Label>
        <Input
          type="text"
          id="dietaryRestrictions"
          name="dietaryRestrictions"
        />
      </Wrapper>

      <Button type="submit">Wyślij</Button>
      <StyledToastContainer />
    </Form>
  );
};
