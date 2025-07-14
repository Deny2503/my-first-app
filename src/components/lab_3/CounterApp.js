import React, { useState } from "react";
import CounterValue from "./CounterValue";
import CounterButton from "./CounterButton";

function CounterApp(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <CounterButton label="+1" step={1} count={count} setCount={setCount} />
            <CounterButton label="+20" step={20} count={count} setCount={setCount} />
            <CounterButton label="-100" step={-100} count={count} setCount={setCount} />
            <CounterButton label="+50" step={50} count={count} setCount={setCount} />
            <CounterButton label="-25" step={-25} count={count} setCount={setCount} />
            <CounterButton label="-90" step={-90} count={count} setCount={setCount} />
            <CounterButton label="+75" step={75} count={count} setCount={setCount} />
            <CounterButton label="-10" step={-10} count={count} setCount={setCount} />
            <CounterButton label="+40" step={40} count={count} setCount={setCount} />
            <CounterButton label="+5" step={5} count={count} setCount={setCount} />
            <CounterValue value={count} />
        </div>
    )
}

export default CounterApp;