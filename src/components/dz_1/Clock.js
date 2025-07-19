import { useEffect, useState } from "react";

function Clock(){
    const[now, setNow] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return(
        <section>
            <h2>Task 3</h2>
            <div>
                <b>Time</b> {now.toLocaleTimeString()}
            </div>
        </section>
    )
}

export default Clock;