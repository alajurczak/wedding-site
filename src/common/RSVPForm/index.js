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

export const RSVPForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        event.target,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Formularz został wysłany!");
        },
        (error) => {
          console.error(error.text);
          alert("Wystąpił błąd podczas wysyłania formularza.");
        }
      );
  };

  return (
    <Form onSubmit={handleSubmit}>
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
    </Form>
  );
};
