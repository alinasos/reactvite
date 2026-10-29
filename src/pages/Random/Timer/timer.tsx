import {useState, useEffect } from "react";

export default function Timer() {
    const [time, setTime] = useState(60);
    const [run, setRun] = useState(false);

    useEffect(() => {
        if (!run || time === 0) return;

        const timer = setTimeout(() => setTime(time - 1), 1000);
        return () => clearTimeout(timer);
    }, [run, time]);

    return (
        <div>
            <h1>{time} сек.</h1>
            <button className="button" onClick={() => setRun(true)}>Старт</button>
            <button className="button" onClick={() => setRun(false)}>Пауза</button>
            <button className="button" onClick={() => {
                setRun(false);
                setTime(60);
            }}>
                Сброс
            </button>
        </div>
    );
}






