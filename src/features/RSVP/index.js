import { Navigation } from "../../common/Navigation";
import { RSVPForm } from "../../common/RSVPForm";
import { Entry, Date, Ornament } from "./styled";
import { Footer } from "../../common/Footer";

export const RSVP = () => {
  return (
    <>
      <Navigation />
      <Entry>
        <Date>
          <div>maj</div>
          <div>xx, xxxx</div>
        </Date>
      </Entry>
      <Ornament>RSVP</Ornament>
      <RSVPForm />
      <Footer />
    </>
  );
};
