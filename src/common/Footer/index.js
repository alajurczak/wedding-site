import {
  Container,
  TileWrapper,
  Tile,
  Email,
  Link,
  Caption,
  Icons,
  Facebook,
  Instagram,
} from "./styled";

export const Footer = () => {
  return (
    <Container>
      <Caption>Let's talk!</Caption>
      <TileWrapper>
        <Tile>
          <Email href="mailto:ala.jurczak@gmail.com">
            ala.jurczak@gmail.com
          </Email>
          <Icons>
            <Link
              href="https://www.facebook.com/ala.m.jurczak"
              rel="norefferer noopener"
            >
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/koalasxx/"
              rel="norefferer noopener"
            >
              <Instagram />
            </Link>
          </Icons>
        </Tile>
        <Tile>
          <Email href="mailto:rabarbar1997@gmail.com">
            rabarbar1997@gmail.com
          </Email>
          <Icons>
            <Link
              href="https://www.facebook.com/dominik.kozuchowicz"
              rel="norefferer noopener"
            >
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/kozuchos/"
              rel="norefferer noopener"
            >
              <Instagram />
            </Link>
          </Icons>
        </Tile>
      </TileWrapper>
    </Container>
  );
};
