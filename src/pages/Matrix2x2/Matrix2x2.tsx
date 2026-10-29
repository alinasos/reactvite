import { useState } from "react";
const Matrix = () => {
    const [x1, setX1] = useState("2")
    const [x2, setX2] = useState("5");
    const [y1, setY1] = useState("3");
    const [y2, setY2] = useState("-2");
    const [result, setResult] = useState("5");
    const [result2, setResult2] = useState("10");
    const [x, setX] = useState("");
    const [y, setY] = useState("");


    const decide = () => {
        const Dmain = Number(x1) * Number(y2) - Number(x2) * Number(y1);
        const Dx = Number(result) * Number(y2) - Number(result2) * Number(y1);
        const Dy = Number(x1) * Number(result2) - Number(x2) * Number(result);

        setX(String(Math.round(Dx / Dmain * 100) / 100));
        setY(String(Math.round(Dy / Dmain * 100) / 100));
    }

    return (
        <div>
            <h1>Matrix2x2</h1>
            <div>
                <input type="text" value={x1} onChange={e => setX1(e.target.value)} />x
                <input type="text" value={y1} onChange={e => setY1(e.target.value)} />y
                <input type="text" value={result} onChange={e => setResult(e.target.value)} />
            </div>
            <div>
                <input type="text" value={x2} onChange={e => setX2(e.target.value)} />x
                <input type="text" value={y2} onChange={e => setY2(e.target.value)} />y
                <input type="text" value={result2} onChange={e => setResult2(e.target.value)} />
            </div>
            <button onClick={decide}>
                Решить
            </button>
            x={x}
            y={y}
        </div>
    );
};


export default Matrix;