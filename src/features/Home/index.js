import { Container, MainContainer, Header, Date } from "./styled";
import { Navigation } from "../../common/Navigation";
import { Footer } from "../../common/Footer";
import { Countdown } from "../../common/Countdown";

export const Home = () => {
  return (
    <Container>
      <Navigation />
      <MainContainer>
        <Header>ALICJA & DOMINIK</Header>
        <Date>30.05.2025</Date>
        <Countdown />
      </MainContainer>
      <Footer />
    </Container>
  );
};
