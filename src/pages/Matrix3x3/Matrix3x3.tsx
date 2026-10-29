import { useState } from "react";
const Matrix = () => {
    const [x1, setX1] = useState("1");
    const [x2, setX2] = useState("2");
    const [x3, setX3] = useState("3"); const [y1, setY1] = useState("4"); const [y2, setY2] = useState("5"); const [y3, setY3] = useState("6"); const [z1, setZ1] = useState("7"); const [z2, setZ2] = useState("8"); const [z3, setZ3] = useState("9"); const [result, setResult] = useState("10"); const [result2, setResult2] = useState("11"); const [result3, setResult3] = useState("12"); const [x, setX] = useState(""); const [y, setY] = useState(""); const [z, setZ] = useState("");
    const decide = () => {
        const Dmain =
            Number(x1) * (Number(y2) * Number(z3) - Number(y3) * Number(z2)) -
            Number(y1) * (Number(x2) * Number(z3) - Number(x3) * Number(z2)) +
            Number(z1) * (Number(x2) * Number(y3) - Number(x3) * Number(y2));

        const Dx =
            Number(result) * (Number(y2) * Number(z3) - Number(y3) * Number(z2)) -
            Number(y1) * (Number(result2) * Number(z3) - Number(result3) * Number(z2)) +
            Number(z1) * (Number(result2) * Number(y3) - Number(result3) * Number(y2));

        const Dy =
            Number(x1) * (Number(result2) * Number(z3) - Number(result3) * Number(z2)) -
            Number(result) * (Number(x2) * Number(z3) - Number(x3) * Number(z2)) +
            Number(z1) * (Number(x2) * Number(result3) - Number(x3) * Number(result2));

        const Dz =
            Number(x1) * (Number(y2) * Number(result3) - Number(y3) * Number(result2)) -
            Number(y1) * (Number(x2) * Number(result3) - Number(x3) * Number(result2)) +
            Number(result) * (Number(x2) * Number(y3) - Number(x3) * Number(y2));

        setX(String(Math.round(Dx / Dmain * 100) / 100));
        setY(String(Math.round(Dy / Dmain * 100) / 100));
        setZ(String(Math.round(Dz / Dmain * 100) / 100));
    };

    return (
        <div>
            <h1>Matrix</h1>
            <div>
                <input type="text" value={x1} onChange={e => setX1(e.target.value)} />
                <input type="text" value={y1} onChange={e => setY1(e.target.value)} />
                <input type="text" value={z1} onChange={e => setZ1(e.target.value)} />
                <input type="text" value={result} onChange={e => setResult(e.target.value)} />
            </div>
            <div>
                <input type="text" value={x2} onChange={e => setX2(e.target.value)} />
                <input type="text" value={y2} onChange={e => setY2(e.target.value)} />
                <input type="text" value={z2} onChange={e => setZ2(e.target.value)} />
                <input type="text" value={result2} onChange={e => setResult2(e.target.value)} />
            </div>
            <div>
                <input type="text" value={x3} onChange={e => setX3(e.target.value)} />
                <input type="text" value={y3} onChange={e => setY3(e.target.value)} />
                <input type="text" value={z3} onChange={e => setZ3(e.target.value)} />
                <input type="text" value={result3} onChange={e => setResult3(e.target.value)} />
            </div>
            <button onClick={decide}>
                Решить
            </button>
            <div>
                x={x}
                <br />
                y={y}
                <br />
                z={z}
            </div>
        </div>
    );
};
export default Matrix;