import { useEffect, useState } from "react";
import { Container, Counter, Text } from "./styled";

export const Countdown = () => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-05-30");
    const calculateCountdown = () => {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (100 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (100 * 60 * 60 * 24)) / (100 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setCountdown("It's happening!");
      }
    };
    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Text>Do zobaczenia za</Text>
      <Counter>{countdown}</Counter>
    </Container>
  );
};
