import { useEffect, useState } from "react";

export default function Timer() {
    const [time, setTime] = useState(0)

    useEffect(() => {
        const id = setInterval(
            () => setTime(t => t + 1),
            1000
        );

        return () => clearInterval(id);
    }, []);

    return <h1>{time} секунды</h1>
}