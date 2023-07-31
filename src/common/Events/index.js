import {
  Container,
  EventWrapper,
  EventRight,
  EventLeft,
  DescriptionRight,
  DescriptionLeft,
  EventImageRight,
  EventImageLeft,
  TimeRight,
  TimeLeft,
  Line,
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
          <EventLeft>
            <TimeRight>15:00</TimeRight>
            <DescriptionRight>Ceremonia zaślubin</DescriptionRight>
          </EventLeft>
          <Line></Line>
          <EventImageLeft>
            <Church />
          </EventImageLeft>
        </EventWrapper>

        <EventWrapper>
          <EventImageRight>
            <Cheers />
          </EventImageRight>
          <Line></Line>
          <EventRight>
            <TimeLeft>16:30</TimeLeft>
            <DescriptionLeft>Toast za Młodą Parę i życzenia</DescriptionLeft>
          </EventRight>
        </EventWrapper>

        <EventWrapper>
          <EventLeft>
            <TimeRight>17:00</TimeRight>
            <DescriptionRight>Uroczysty obiad</DescriptionRight>
          </EventLeft>
          <Line></Line>
          <EventImageLeft>
            <Meal />
          </EventImageLeft>
        </EventWrapper>

        <EventWrapper>
          <EventImageRight>
            <Dance />
          </EventImageRight>
          <Line></Line>
          <EventRight>
            <TimeLeft>18:00</TimeLeft>
            <DescriptionLeft>Pierwszy taniec</DescriptionLeft>
          </EventRight>
        </EventWrapper>

        <EventWrapper>
          <EventLeft>
            <TimeRight>20:00</TimeRight>
            <DescriptionRight>Tort</DescriptionRight>
          </EventLeft>
          <Line></Line>
          <EventImageLeft>
            <Cake />
          </EventImageLeft>
        </EventWrapper>

        <EventWrapper>
          <EventImageRight>
            <Cooking />
          </EventImageRight>
          <Line></Line>
          <EventRight>
            <TimeLeft>21:00</TimeLeft>
            <DescriptionLeft>Live cooking</DescriptionLeft>
          </EventRight>
        </EventWrapper>

        <EventWrapper>
          <EventLeft>
            <TimeRight>22:00</TimeRight>
            <DescriptionRight>Niespodzianka</DescriptionRight>
          </EventLeft>
          <Line></Line>
          <EventImageLeft>
            <Gift />
          </EventImageLeft>
        </EventWrapper>

        <EventWrapper>
          <EventImageRight>
            <Fireworks />
          </EventImageRight>
          <Line></Line>
          <EventRight>
            <TimeLeft>00:00</TimeLeft>
            <DescriptionLeft>Fajerwerki</DescriptionLeft>
          </EventRight>
        </EventWrapper>

        <EventWrapper>
          <EventLeft>
            <TimeRight>∞</TimeRight>
            <DescriptionRight>Zabawa do rana</DescriptionRight>
          </EventLeft>
          <Line></Line>
          <EventImageLeft>
            <Party />
          </EventImageLeft>
        </EventWrapper>
      </Container>
    </>
  );
};
