import { Navigation } from "../../common/Navigation";
import { Entry, QandA, Tiles, Tile, Title, Description } from "./styled";

export const QAPage = () => {
  return (
    <>
      <Navigation />
      <Entry>
        <QandA>Q&A</QandA>
      </Entry>
      <Tiles>
        <Tile>
          <Title>Jaki jest wymagany ubiór?</Title>
          <Description>
            Dress code na nasz ślub to elegancja półformalna / ubiór koktajlowy.
            Smokingi, suknie wieczorowe i suknie koktajlowe są mile widziane
          </Description>
        </Tile>
        <Tile>
          <Title>Czy ceremonia będzie na zewnątrz?</Title>
          <Description>
            Uroczystość zaślubin odbędzie się na zewnątrz, jeśli pogoda na to
            pozwoli
          </Description>
        </Tile>
        <Tile>
          <Title>Gdzie można zaparkować?</Title>
          <Description>
            Parking obsugiwany jest przez nasz zespół. Po prostu poinformuj
            obsługę, że jesteś tutaj na nasz ślub
          </Description>
        </Tile>
        <Tile>
          <Title>Czy mogę zabrać ze sobą osobę towarzyszącą?</Title>
          <Description>
            Jeżeli Twoje zaproszenie zawiera informacę "z osobą towarzyszącą" to
            tak! Jeśli jednak nie, to preferujemy świętowanie tylko z Tobą ze
            względu na ograniczone miejsca
          </Description>
        </Tile>
        <Tile>
          <Title>Do kiedy należy potwierdzić obecnośc?</Title>
          <Description>
            Prosimy o potwierdzenie do xx miesiąc, abyśmy mieli dokładną liczbę
            gości
          </Description>
        </Tile>
        <Tile>
          <Title>Czy zapewniamy transport?</Title>
          <Description>
            Jeśli zatrzymasz się w innym hotelu lub wracasz do siebie, prosimy o
            zorganizowanie transportu np. za pomocą ubera, lyfta lub lokalnych
            usług taksówkowych
          </Description>
        </Tile>
      </Tiles>
    </>
  );
};
