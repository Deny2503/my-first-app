import { useState } from "react";


function Calc1() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('add');
    const [result, setResult] = useState(null);

    const calculate = () => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        let res;

        switch (operation) {
            case "add":
                res = a + b;
                break;
            case "sub":
                res = a - b;
                break;
            case "mul":
                res = a * b;
                break;
            case "div":
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
        <select value={operation} onChange={e => setOperation(e.target.value)}>
            <option value="add">+</option>
            <option value="sub">-</option>
            <option value="mul">*</option>
            <option value="div">/</option>
        </select>
        <input type="number" value={num2} onChange={e => setNum2(e.target.value)} placeholder="Введите второе число" />

        <button onClick={calculate}>Result</button>
        <div style={{ marginTop: '10px' }}>
            {result !== null && <b>Результат: {result}</b>}
        </div>
    </div>
}

export default Calc1;