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
          <Event>
            <Time>15:00</Time>
            <Description>Ceremonia zaślubin</Description>
          </Event>
          <EventImage>
            <Church />
          </EventImage>
        </EventWrapper>

        <EventWrapper>
          <EventImage>
            <Cheers />
          </EventImage>
          <Event>
            <Time>15:00</Time>
            <Description>Ceremonia zaślubin</Description>
          </Event>
        </EventWrapper>

        <EventWrapper>
          <Event>
            <Time>15:00</Time>
            <Description>Ceremonia zaślubin</Description>
          </Event>
          <EventImage>
            <Church />
          </EventImage>
        </EventWrapper>

        <EventWrapper>
          <EventImage>
            <Cheers />
          </EventImage>
          <Event>
            <Time>15:00</Time>
            <Description>Ceremonia zaślubin</Description>
          </Event>
        </EventWrapper>

        <EventWrapper>
          <Event>
            <Time>15:00</Time>
            <Description>Ceremonia zaślubin</Description>
          </Event>
          <EventImage>
            <Church />
          </EventImage>
        </EventWrapper>

        <EventWrapper>
          <EventImage>
            <Cheers />
          </EventImage>
          <Event>
            <Time>15:00</Time>
            <Description>Ceremonia zaślubin</Description>
          </Event>
        </EventWrapper>

        <EventWrapper>
          <Event>
            <Time>15:00</Time>
            <Description>Ceremonia zaślubin</Description>
          </Event>
          <EventImage>
            <Church />
          </EventImage>
        </EventWrapper>

        <EventWrapper>
          <EventImage>
            <Cheers />
          </EventImage>
          <Event>
            <Time>15:00</Time>
            <Description>Ceremonia zaślubin</Description>
          </Event>
        </EventWrapper>
      </Container>
    </>
  );
};
