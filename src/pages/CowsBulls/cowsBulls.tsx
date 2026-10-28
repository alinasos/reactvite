import { useState } from "react";
const CowsBulls = () => {
    const [rand, setRand] = useState("");
    const [text, setText] = useState(["", "", "", ""]);
    const [res, setRes] = useState("");
    const [bulls, setBulls] = useState(0);
    const [cows, setCows] = useState(0);
    const newGame = () => {
        let number = "";

        while (number.length < 4) {
            const digit = String(Math.floor(Math.random() * 10));
            number += digit;
        }

        setRand(number);
        setText(["", "", "", ""]);
        setRes("");
        setBulls(0);
        setCows(0);
    };

    const checkNumber = () => {
        const answer = text.join("");

        if (answer.length !== 4) {
            setRes("Введи 4 цифры");
            return;
        }

        if (rand === "") {
            setRes("Сначала нажми «Новая игра»");
            return;
        }

        let b = 0;
        let c = 0;

        const usedRand = [false, false, false, false];
        const usedAnswer = [false, false, false, false];

        for (let i = 0; i < 4; i++) {
            if (answer[i] === rand[i]) {
                b++;
                usedRand[i] = true;
                usedAnswer[i] = true;
            }
        }

        for (let i = 0; i < 4; i++) {
            if (usedAnswer[i]) continue;

            for (let j = 0; j < 4; j++) {
                if (!usedRand[j] && answer[i] === rand[j]) {
                    c++;
                    usedRand[j] = true;
                    break;
                }
            }
        }

        setBulls(b);
        setCows(c);

        if (b === 4) {
            setRes("Ты выиграла!");
        } else {
            setRes("Попробуй ещё раз");
        }
    };

    return (
        <div>
            <h1>Быки и коровы</h1>

            <button onClick={newGame}>Новая игра</button>

            <div>
                {text.map((digit, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => {
                            const value = e.target.value;

                            if (!/^\d?$/.test(value)) return;

                            const newText = [...text];
                            newText[index] = value;
                            setText(newText);
                        }}
                    />
                ))}
            </div>

            <button onClick={checkNumber}>Проверить</button>

            <p>Быки: {bulls}</p>
            <p>Коровы: {cows}</p>
            <p>{res}</p>
        </div>
    );
};
export default CowsBulls;
