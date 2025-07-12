import { useState } from "react"


function UserForm(){
    const[email, setEmail] = useState('')
    const handleSumbit = e => {
        e.preventDefault();
        alert(`Sumbit email: ${email}`)
    }

    return <form onSubmit={handleSumbit}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email"/>
        <button type="submit">Submit</button>
    </form>
}

export default UserForm