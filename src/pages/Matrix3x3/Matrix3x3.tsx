import { useState } from "react";

const Matrisa = () => {
    const [x1, setX1] = useState(7);
    const [x2, setX2] = useState(5);
    const [x3, setX3] = useState(10);
  
    const [y1, setY1] = useState(2);
    const [y2, setY2] = useState(-3);
    const [y3, setY3] = useState(-11);
  
    const [z1, setZ1] = useState(3);
    const [z2, setZ2] = useState(2);
    const [z3, setZ3] = useState(5);
  
    const [res1, setRes1] = useState(15);
    const [res2, setRes2] = useState(15);
    const [res3, setRes3] = useState(36);   
    const [x, setX] = useState("");
    const [y, setY] = useState("");
    const [z, setZ] = useState("");

    const matrix = (x1: number, x2: number, x3: number, y1: number, y2: number, y3: number, z1: number, z2: number, z3: number) => {
        return (x1 * y2 * z3) +
            (x2 * y3 * z1) +
            (x3 * y1 * z2) -
            ((z1 * y2 * x3) +
            (y1 * x2 * z3) +
            (z2 * y3 * x1));
    }

    const Dis = () => {

        const Dismain = matrix(x1, x2, x3, y1, y2, y3, z1, z2, z3)

        const DisX = matrix(res1, res2, res3, y1, y2, y3, z1, z2, z3)

        const DisY = matrix(x1, x2, x3, res1, res2, res3, z1, z2, z3)

        const DisZ = matrix(x1, x2, x3, y1, y2, y3, res1, res2, res3)

        setX(String(DisX / Dismain ));
        setY(String(DisY / Dismain ));
        setZ(String(DisZ / Dismain ));

    }
    return (
        <div>
            <h1>Реши матрицу</h1>
            <div>
                <input type="text" value={x1} onChange={(e) => setX1(Number(e.target.value))} />
                <input type="text" value={y1} onChange={(e) => setY1(Number(e.target.value))} />
                <input type="text" value={z1} onChange={(e) => setZ1(Number(e.target.value))} />
                <input type="text" value={res1} onChange={(e) => setRes1(Number(e.target.value))} />
            </div>

            <div>
                <input type="text" value={x2} onChange={(e) => setX2(Number(e.target.value))} />
                <input type="text" value={y2} onChange={(e) => setY2(Number(e.target.value))} />
                <input type="text" value={z2} onChange={(e) => setZ2(Number(e.target.value))} />
                <input type="text" value={res2} onChange={(e) => setRes2(Number(e.target.value))} />
            </div>

            <div>
                <input type="text" value={x3} onChange={(e) => setX3(Number(e.target.value))} />
                <input type="text" value={y3} onChange={(e) => setY3(Number(e.target.value))} />
                <input type="text" value={z3} onChange={(e) => setZ3(Number(e.target.value))} />
                <input type="text" value={res3} onChange={(e) => setRes3(Number(e.target.value))} />
            </div>

            <button onClick={Dis}>Решить:</button>
            x={x}
            y={y}
            z={z}
        </div>

    )



};

export default Matrisa;


