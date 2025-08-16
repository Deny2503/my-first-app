import { useRef, useState } from 'react'

export default function NewUsersList() {

    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [error, setError] = useState(null);

    const abortRef = useRef(null);


    const onSumbit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResult(null);

        const ctrl = new AbortController();
        abortRef.current = ctrl

        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, body, userId: 1 }),
                signal: ctrl.signal
            });

            if (!res.ok) {
                throw new Error(`HTTP: ${res.status}`);
            }

            const data = await res.json();
            setResult(data);
        } catch (err) {
            if (err.name !== "AbortError") {
                console.log(ErrorEvent);
                setError(err.message);
            }
        } finally {
            setLoading(false);
            abortRef.current = null;
        }
    };

    const cancel = () => {
        abortRef.current?.abort();
    }



    return (
        <div>
            <h2>-- Post --</h2>
            <form onSubmit={onSumbit}>
                <input placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder='Body' value={body} onChange={(e) => setBody(e.target.value)} />
                <button type='sumbit' disabled={loading}>Sumbit</button>
                <button type='button' onClick={cancel} disabled={!loading}>Cancel</button>
            </form>

            {loading && <p>Submiting...</p>}
            {error && <p style={{ color: 'crimson' }}>Error: {error} </p>}
            {result && (
                <>
                    <h3>Created: </h3>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </>
            )}
        </div>
        /*  <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "600px" }}>
                <h2 style={{ textAlign: "center" }}>Список користувачів</h2>
                {users.map((user) => (
                    <ul
                        key={user.id}
                        style={{
                            border: "1px solid #ccc",
                            margin: "50px 0",
                            padding: "30px",
                            borderRadius: "5px",
                            height: "80px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <strong>{user.name}</strong> <br />
                        <em>Email:</em> {user.email} <br />
                        <em>Телефон:</em> {user.phone} <br />
                        <em>Місто:</em> {user.address.city}
                    </ul>
                ))}
            </div>
        </div> */


    );
}