
import { useState } from "react";
import "./Calc.css";

const Calc = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");
    const [active, setActive] = useState(1);

    const addNumber = (number: string) => {
        if (active === 1) {
            setNum1(num1 + number);
        } else {
            setNum2(num2 + number);
        }
    };

    const calculate = (operation: string) => {
        if (operation === "+") {
            setResult(String(Number(num1) + Number(num2)));
        } else if (operation === "-") {
            setResult(String(Number(num1) - Number(num2)));
        } else if (operation === "*") {
            setResult(String(Number(num1) * Number(num2)));
        } else if (operation === "/") {
            if (Number(num2) === 0) {
                alert("АЙ АЙ АЙ!");
            } else {
                setResult(String(Number(num1) / Number(num2)));
            }
        }
    };

    return (
        <div className="calculator">
            <h1>Калькулятор</h1>

            <input
                placeholder="Первое число"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                onClick={() => setActive(1)}
            />

            <input
                placeholder="Второе число"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                onClick={() => setActive(2)}
            />

            <div className="result">
                Результат: {result}
            </div>

            <div className="numbers">
                <button onClick={() => addNumber("7")}>7</button>
                <button onClick={() => addNumber("8")}>8</button>
                <button onClick={() => addNumber("9")}>9</button>

                <button onClick={() => addNumber("4")}>4</button>
                <button onClick={() => addNumber("5")}>5</button>
                <button onClick={() => addNumber("6")}>6</button>

                <button onClick={() => addNumber("1")}>1</button>
                <button onClick={() => addNumber("2")}>2</button>
                <button onClick={() => addNumber("3")}>3</button>

                <button className="zero" onClick={() => addNumber("0")}>0</button>
            </div>

            <div className="operations">
                <button onClick={() => calculate("+")}>+</button>
                <button onClick={() => calculate("-")}>-</button>
                <button onClick={() => calculate("*")}>*</button>
                <button onClick={() => calculate("/")}>/</button>
            </div>

            <button className="clear" onClick={() => {
                setNum1("");
                setNum2("");
                setResult("");
                setActive(1);
            }}>C</button>
        </div>
    );
};

export default Calc;
