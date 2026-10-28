
import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      const timer = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);

      return () => clearInterval(timer);
    }
  }, [start]);

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor(time / 1000) % 60;
  const ms = time % 1000;

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Секундомер</h1>

      <h2>
        {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}.
        {String(ms).padStart(3, "0")}
      </h2>

      <button onClick={() => setStart(true)}>Старт</button>
      <button onClick={() => setStart(false)}>Стоп</button>
      <button onClick={() => {
        setStart(false);
        setTime(0);
      }}>
        Сброс
      </button>
    </div>
  );
}

export default Timer;


