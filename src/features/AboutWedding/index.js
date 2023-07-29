import {
  Entry,
  OurDay,
  Our,
  Day,
  Names,
  DateAndPlace,
  Date,
  Place,
  Separator,
  Informations,
  Description,
  Title,
  MainInformations,
  Address,
  WrapperLink,
  Location,
} from "./styled";
import { Navigation } from "../../common/Navigation";
import { Tile } from "../../common/Tile";

export const AboutWedding = () => {
  const googleMapsLink = "https://goo.gl/maps/wU7mLbbh4PuXpgZQA";

  return (
    <>
      <Navigation />
      <Entry>
        <OurDay>
          <Our>Our</Our>
          <Day>Day</Day>
        </OurDay>
        <Names>ALICJA & DOMINIK</Names>
        <DateAndPlace>
          <Date>xxx xx, xxxx</Date>
          <Separator></Separator>
          <Place>warszawa</Place>
        </DateAndPlace>
      </Entry>
      <Informations>
        <Description>
          <Title>Miejsce Ślubu i Wesela</Title>
          <MainInformations>
            <Place>Pałac Czosnowskich</Place>
            <Address>Mazowiecka 163, 05-825 Opypy | Warszawa</Address>
          </MainInformations>
        </Description>
        <WrapperLink
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Location></Location>
        </WrapperLink>
      </Informations>
      <Tile />
    </>
  );
};
