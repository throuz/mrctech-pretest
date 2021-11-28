import { useState } from "react";
import "./Countdown.css";

function Countdown(props) {
  const [time, setTime] = useState("...");

  const countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

  const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);

    if (distance < 0) {
      clearInterval(x);
      setTime("EXPIRED");
    }
  }, 1000);

  return <section id="countdown">Countdown {time}</section>;
}

export default Countdown;
