import { useState } from "react";


function Calc() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('+');
    const [result, setResult] = useState(null);

    const calculate = () => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        let res;

        switch (operation) {
            case "+":
                res = a + b;
                break;
            case "-":
                res = a - b;
                break;
            case "*":
                res = a * b;
                break;
            case "/":
                if (b == 0) {
                    res = 'На ноль делить нельзя'
                }
                else {
                    res = a / b;
                }
                break;
            default:
                res = 'Выберите действие'
        }
        setResult(res);
    };


    return <div>
        <input type="number" value={num1} onChange={e => setNum1(e.target.value)} placeholder="Введите певрое число" />
        <div>
            <label>
                <input type="radio" name="operation" value="+" checked={operation === "+"} onChange={e => setOperation(e.target.value)} />
                +
            </label>
            <label>
                <input type="radio" name="operation" value="-" checked={operation === "-"} onChange={e => setOperation(e.target.value)} />
                -
            </label>
            <label>
                <input type="radio" name="operation" value="*" checked={operation === "*"} onChange={e => setOperation(e.target.value)} />
                *
            </label>
            <label>
                <input type="radio" name="operation" value="/" checked={operation === "/"} onChange={e => setOperation(e.target.value)} />
                /
            </label>
        </div>
        <input type="number" value={num2} onChange={e => setNum2(e.target.value)} placeholder="Введите второе число" />
        <button onClick={calculate}>Result</button>
        <div style={{ marginTop: '10px' }}>
            {result !== null && <b>Результат: {result}</b>}
        </div>
    </div>
}

export default Calc;