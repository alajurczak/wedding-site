import {
  Container,
  EventWrapper,
  Event,
  Description,
  EventImage,
  Time,
} from "./styled";
import { ReactComponent as Church } from "./church.svg";
import { ReactComponent as Cheers } from "./cheers.svg";
import { ReactComponent as Meal } from "./meal.svg";
import { ReactComponent as Dance } from "./dance.svg";
import { ReactComponent as Cake } from "./cake.svg";
import { ReactComponent as Gift } from "./gift.svg";
import { ReactComponent as Fireworks } from "./fireworks.svg";
import { ReactComponent as Party } from "./party.svg";
import { ReactComponent as Cooking } from "./cooking.svg";

export const Events = () => {
  return (
    <>
      <Container>
        <EventWrapper>
          <EventImage>
            <Church />
          </EventImage>
          <Event>
            <Time>15:00</Time>
            <Description>Ceremonia zaślubin</Description>
          </Event>
        </EventWrapper>

        <EventWrapper>
          <EventImage>
            <Cheers />
          </EventImage>
          <Event>
            <Time>16:30</Time>
            <Description>Toast za Młodą Parę i życzenia</Description>
          </Event>
        </EventWrapper>

        <EventWrapper>
          <EventImage>
            <Meal />
          </EventImage>
          <Event>
            <Time>17:00</Time>
            <Description>Uroczysty obiad</Description>
          </Event>
        </EventWrapper>

        <EventWrapper>
          <EventImage>
            <Dance />
          </EventImage>
          <Event>
            <Time>18:00</Time>
            <Description>Pierwszy taniec</Description>
          </Event>
        </EventWrapper>

        <EventWrapper>
          <EventImage>
            <Cake />
          </EventImage>
          <Event>
            <Time>20:00</Time>
            <Description>Tort</Description>
          </Event>
        </EventWrapper>

        <EventWrapper>
          <EventImage>
            <Cooking />
          </EventImage>
          <Event>
            <Time>21:00</Time>
            <Description>Live cooking</Description>
          </Event>
        </EventWrapper>

        <EventWrapper>
          <EventImage>
            <Gift />
          </EventImage>
          <Event>
            <Time>22:00</Time>
            <Description>Niespodzianka</Description>
          </Event>
        </EventWrapper>

        <EventWrapper>
          <EventImage>
            <Fireworks />
          </EventImage>
          <Event>
            <Time>00:00</Time>
            <Description>Fajerwerki</Description>
          </Event>
        </EventWrapper>

        <EventWrapper>
          <EventImage>
            <Party />
          </EventImage>
          <Event>
            <Time>∞</Time>
            <Description>Zabawa do rana</Description>
          </Event>
        </EventWrapper>
      </Container>
    </>
  );
};
