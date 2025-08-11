import { useEffect, useState } from "react"

export default function Count() {

    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Счетчик: ${count}`
    }, [count])

    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                Нажато {count} раз
            </button>
        </>
    )
}