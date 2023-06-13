import { Wrapper, Tiles, Content, Title, Description } from "./styled";
import { ReactComponent as IconCeremony } from "./ceremony.svg";
import { ReactComponent as IconAperitif } from "./aperitif.svg";
import { ReactComponent as IconReception } from "./reception.svg";
import { ReactComponent as IconBreakfast } from "./coffee.svg";
import { ReactComponent as IconAccommodation } from "./hotel.svg";

export const Tile = () => {
  return (
    <Wrapper>
      <Tiles>
        <IconCeremony />
        <Content>
          <Title>ceremonia</Title>
          <Description>godzina 15:00</Description>
          <Description>Pamiętaj, żeby przybyć wcześnie</Description>
        </Content>
      </Tiles>
      <Tiles>
        <IconAperitif />
        <Content>
          <Title>aperitif</Title>
          <Description>godzina 16:00</Description>
          <Description>koktajle i przystawki </Description>
        </Content>
      </Tiles>
      <Tiles>
        <IconReception />
        <Content>
          <Title>przyjęcie</Title>
          <Description>godzina 17:00</Description>
          <Description>kolacja, drinki & tańce</Description>
        </Content>
      </Tiles>
      <Tiles>
        <IconAccommodation />
        <Content>
          <Title>noclegi</Title>
          <Description>zapewniamy noclegi w dniu wesela</Description>
          <Description>zgłoś się do recepcji!</Description>
        </Content>
      </Tiles>
      <Tiles>
        <IconBreakfast />
        <Content>
          <Title>śniadanie</Title>
          <Description>do godziny 12:00</Description>
          <Description>śniadanie po weselnej nocy</Description>
        </Content>
      </Tiles>
    </Wrapper>
  );
};
