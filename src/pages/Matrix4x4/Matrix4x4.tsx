
import { useState } from "react";
import "./App.css";

const Matrix4x4 = () => {

    const [x1, setX1] = useState(1);
    const [x2, setX2] = useState(2);
    const [x3, setX3] = useState(1);
    const [x4, setX4] = useState(1);

    const [y1, setY1] = useState(1);
    const [y2, setY2] = useState(1);
    const [y3, setY3] = useState(2);
    const [y4, setY4] = useState(1);

    const [z1, setZ1] = useState(1);
    const [z2, setZ2] = useState(1);
    const [z3, setZ3] = useState(1);
    const [z4, setZ4] = useState(2);

    const [w1, setW1] = useState(1);
    const [w2, setW2] = useState(1);
    const [w3, setW3] = useState(1);
    const [w4, setW4] = useState(1);

    const [res1, setRes1] = useState(10);
    const [res2, setRes2] = useState(11);
    const [res3, setRes3] = useState(12);
    const [res4, setRes4] = useState(13);

    const [x, setX] = useState("");
    const [y, setY] = useState("");
    const [z, setZ] = useState("");
    const [w, setW] = useState("");

    const matrix4 = (
        x1: number, x2: number, x3: number, x4: number,
        y1: number, y2: number, y3: number, y4: number,
        z1: number, z2: number, z3: number, z4: number,
        w1: number, w2: number, w3: number, w4: number
    ) => {
        return (
            x1 * ((y2 * z3 * w4) + (y3 * z4 * w2) + (y4 * z2 * w3) -
                ((w2 * z3 * y4) + (z2 * y3 * w4) + (w3 * z4 * y2))) -

            y1 * ((x2 * z3 * w4) + (x3 * z4 * w2) + (x4 * z2 * w3) -
                ((w2 * z3 * x4) + (z2 * x3 * w4) + (w3 * z4 * x2))) +

            z1 * ((x2 * y3 * w4) + (x3 * y4 * w2) + (x4 * y2 * w3) -
                ((w2 * y3 * x4) + (y2 * x3 * w4) + (w3 * y4 * x2))) -

            w1 * ((x2 * y3 * z4) + (x3 * y4 * z2) + (x4 * y2 * z3) -
                ((z2 * y3 * x4) + (y2 * x3 * z4) + (z3 * y4 * x2)))
        );
    };

    const Dis = () => {

        const Dismain = matrix4(x1, x2, x3, x4, y1, y2, y3, y4, z1, z2, z3, z4, w1, w2, w3, w4);

        const DisX = matrix4(res1, res2, res3, res4, y1, y2, y3, y4, z1, z2, z3, z4, w1, w2, w3, w4);

        const DisY = matrix4(x1, x2, x3, x4, res1, res2, res3, res4, z1, z2, z3, z4, w1, w2, w3, w4);

        const DisZ = matrix4(x1, x2, x3, x4, y1, y2, y3, y4, res1, res2, res3, res4, w1, w2, w3, w4);

        const DisW = matrix4(x1, x2, x3, x4, y1, y2, y3, y4, z1, z2, z3, z4, res1, res2, res3, res4);

        
        setX(String(DisX / Dismain));
        setY(String(DisY / Dismain));
        setZ(String(DisZ / Dismain));
        setW(String(DisW / Dismain));
    };

    return (
        <div className="container">
            <h1>Матрица 4×4</h1>

            <div className="matrix">
                <div>
                    <input type="number" value={x1} onChange={e => setX1(Number(e.target.value))} />
                    <input type="number" value={y1} onChange={e => setY1(Number(e.target.value))} />
                    <input type="number" value={z1} onChange={e => setZ1(Number(e.target.value))} />
                    <input type="number" value={w1} onChange={e => setW1(Number(e.target.value))} />
                    =
                    <input type="number" value={res1} onChange={e => setRes1(Number(e.target.value))} />
                </div>

                <div>
                    <input type="number" value={x2} onChange={e => setX2(Number(e.target.value))} />
                    <input type="number" value={y2} onChange={e => setY2(Number(e.target.value))} />
                    <input type="number" value={z2} onChange={e => setZ2(Number(e.target.value))} />
                    <input type="number" value={w2} onChange={e => setW2(Number(e.target.value))} />
                    =
                    <input type="number" value={res2} onChange={e => setRes2(Number(e.target.value))} />
                </div>

                <div>
                    <input type="number" value={x3} onChange={e => setX3(Number(e.target.value))} />
                    <input type="number" value={y3} onChange={e => setY3(Number(e.target.value))} />
                    <input type="number" value={z3} onChange={e => setZ3(Number(e.target.value))} />
                    <input type="number" value={w3} onChange={e => setW3(Number(e.target.value))} />
                    =
                    <input type="number" value={res3} onChange={e => setRes3(Number(e.target.value))} />
                </div>

                <div>
                    <input type="number" value={x4} onChange={e => setX4(Number(e.target.value))} />
                    <input type="number" value={y4} onChange={e => setY4(Number(e.target.value))} />
                    <input type="number" value={z4} onChange={e => setZ4(Number(e.target.value))} />
                    <input type="number" value={w4} onChange={e => setW4(Number(e.target.value))} />
                    =
                    <input type="number" value={res4} onChange={e => setRes4(Number(e.target.value))} />
                </div>
            </div>

            <button className="button" onClick={Dis}>
                Решить
            </button>

            <div>
                <p>X = {x}</p>
                <p>Y = {y}</p>
                <p>Z = {z}</p>
                <p>W = {w}</p>
            </div>
        </div>
    );
};

export default Matrix4x4;

