import { Footer } from "../../common/Footer";
import { Navigation } from "../../common/Navigation";
import { Container, Aside, AsideLogo, Section, SectionHeader } from "./styled";
import { Events } from "../../common/Events";

export const Schedule = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Aside>
          <AsideLogo></AsideLogo>
        </Aside>
        <Section>
          <SectionHeader>Harmonogram</SectionHeader>
          <Events />
        </Section>
      </Container>
      <Footer />
    </>
  );
};
