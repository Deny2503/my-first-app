import React, { useState } from "react";

import Hello from './lab_1/Hello.js'
import Test from './Test.js'
import Calc from './lab_1/calc/Calc.js'
import Calc1 from './lab_1/calc/Calc1.js'
import MyResume from "./log_reg/MyResume.js";
import Fastlogin from "./log_reg/Fastlogin.js";
import Modal from "./Modal.js";

function Welcome({ name }) {
    const isLoggedIn = true;

    const [count, setCount] = useState(0);

    const style = {
        color: isLoggedIn ? 'green' : 'red'
    }

    return (
        <React.Fragment>

            <h1 style={style}>Welcome! {name}</h1>

            {/* <Modal>
                <h2>Is Modal</h2>
                <button>Close</button>
            </Modal> */}

            {/* <Hello />
            <Calc />
            <Calc1 />
            <MyResume />
            <Fastlogin />
             */}
        </React.Fragment>
    );
}


export default Welcome;