import {useEffect, useState} from 'react'

export default function UsersList(){

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;
        setLoading(true);

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            if(!res.ok){
                throw new Error(`HTTP error ${res.status}`)
            }
            return res.json();
        })
        .then(data => {
            if(!ignore){
                setUsers(data);
            }
        })
        .catch(e => {
            if(!ignore){
                setError(e.message);
            }
        })
        .finally(() => {
            if(!ignore){
                setLoading(false)
            }
        });

        return () => { ignore = true; };

    }, []);

    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>Error: {error}</p>
    }

    return (
        <ul>
            {users.map(u => <li key={u.id}> {u.name}</li>)}
        </ul>
    );

}