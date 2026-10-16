import { useState } from "react";
const Random = () => {
    const [rand, setRand] = useState(Math.round(Math.random() * 100));
    const [text, setText] = useState(0);
    const [res, setRes] = useState("");
    const [attempts, setAttempts] = useState(5);

    const compareNumber = () => {
        if (attempts === 0) {
            return;
        }

        if (rand === text) {
            setRes("выиграли");
            setAttempts(0);
        } else if (attempts === 1) {
            setRes("проиграли");
            setAttempts(0);
        } else if (rand > text) {
            setRes("загаданное число больше");
            setAttempts(attempts - 1);
        } else {
            setRes("загаданное число меньше");
            setAttempts(attempts - 1);
        }
    };

    const restart = () => {
        setRand(Math.round(Math.random() * 100));
        setText(0);
        setRes("");
        setAttempts(5);
    };

    return (
        <div>
            <input
                type="number"
                value={text}
                onChange={(e) => setText(Number(e.target.value))}
                disabled={attempts === 0}
            />

            <button onClick={compareNumber} disabled={attempts === 0}>
                Угадай
            </button>

            <div>{res}</div>
            <div>Осталось попыток: {attempts}</div>

            {attempts === 0 && (
                <button onClick={restart}>
                    Начать заново
                </button>
            )}
        </div>
    );
};
export default Random;