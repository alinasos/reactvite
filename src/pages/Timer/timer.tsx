
import { useState, useEffect } from "react";

const Timer = () => {
    const [minutes, setMinutes] = useState("1");
    const [seconds, setSeconds] = useState("0");
    const [time, setTime] = useState(60);
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (!start) return;

        if (time === 0) {
            setStart(false);
            return;
        }

        const timer = setInterval(() => {
            setTime(time - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [start, time]);

    const startTimer = () => {
        setTime(Number(minutes) * 60 + Number(seconds));
        setStart(true);
    };

    return (
        <div>
            <h1>Таймер</h1>

            <input
                type="number"
                value={minutes}
                onChange={e => setMinutes(e.target.value)}
                disabled={start}
            />

            <input
                type="number"
                value={seconds}
                onChange={e => setSeconds(e.target.value)}
                disabled={start}
            />

            <h2>
                {Math.floor(time / 60)}:
                {String(time % 60).padStart(2, "0")}
            </h2>

            <button onClick={startTimer} disabled={start}>
                Старт
            </button>

            <button onClick={() => setStart(false)}>
                Стоп
            </button>
        </div>
    );
};

export default Timer;







