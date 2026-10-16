import { useState } from "react";
const CowsBulls = () => { 
    const [rand, setRand] = useState("");
     const [text, setText] = useState(""); 
     const [res, setRes] = useState(""); 
     const [bulls, setBulls] = useState(0); 
     const [cows, setCows] = useState(0);
const checkNumber = () => {

};

return (
    <div>
        <h1>Быки и коровы</h1>

        <input=
            type="text"
            maxLength={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
        />

        <button onClick={checkNumber}>
            Проверить
        </button>

        <div>{res}</div>
        <div>Быки: {bulls}</div>
        <div>Коровы: {cows}</div>
    </div>
);
};
export default CowsBulls;