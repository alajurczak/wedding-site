import { Navigation } from "../../common/Navigation";
import { RSVPForm } from "../../common/RSVPForm";
import { Entry, Date, Ornament } from "./styled";

export const RSVP = () => {
  return (
    <>
      <Navigation />
      <Entry>
        <Date>
          <div>maj</div>
          <div>30, 2023</div>
        </Date>
      </Entry>
      <Ornament>RSVP</Ornament>
      <RSVPForm />
    </>
  );
};
