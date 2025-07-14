import React from "react";

function CounterButton({ label, step, count, setCount }) {
    return (
        <button onClick={() => setCount(count + step)}>
            {label}
        </button>
    );
}

export default CounterButton;