import React, { useState } from "react";

import Hello from './lab_1/Hello.js'
import Test from './Test.js'
import Calc from './lab_1/calc/Calc.js'
import Calc1 from './lab_1/calc/Calc1.js'
import MyResume from "./log_reg/MyResume.js";
import Fastlogin from "./log_reg/Fastlogin.js";

function Welcome({ name }) {
    const isLoggedIn = true;

    const [count, setCount] = useState(0);

    const style = {
        color: isLoggedIn ? 'green' : 'red'
    }

    return (
        <>

            {/* <h1 style={style}>Welcome! {name}</h1> */}

            

            {/* <Hello />
            <Calc />
            <Calc1 />
            <MyResume />
            <Fastlogin />
             */}
        </>
    );
}


export default Welcome;