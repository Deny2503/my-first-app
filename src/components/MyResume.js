import { useState } from "react";
import './MyResume.css';

function MyResume() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("Male");
    const [city, setCity] = useState("Львів");
    const [about, setAbout] = useState("");
    const [showResume, setShowResume] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setShowResume(true);
    }
    return(
        <div className="resume-form-wrapper">
            <form onSubmit={handleSubmit} className="resume-form">
                <h2>Создать резюме</h2>
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="Имя" required />
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Фамилию" required />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Имэил" required />
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Телефон" required />
                <div>
                    <label>
                        <input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={e => setGender(e.target.value)} />
                        Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={e => setGender(e.target.value)} />
                        Female
                    </label>
                    <label>
                        <input type="radio" name="gender" value="Another" checked={gender === 'Another'} onChange={e => setGender(e.target.value)} />
                        Another
                    </label>
                </div>
                <select value={city} onChange={e => setCity(e.target.value)}>
                    <option value="Lviv">Lviv</option>
                    <option value="Kiev">Kiev</option>
                    <option value="Kharkiv">Kharkiv</option>
                    <option value="Odessa">Odessa</option>
                    <option value="Donetsk">Donetsk</option>
                    <option value="Another">Another</option>
                </select>
                <textarea value={about} onChange={e => setAbout(e.target.value)} placeholder="Краткая информация про себя" />
                <button type="Submit">Submit</button>
                </form>

                {showResume && (
                    <div className="resume-result">
                        <h2>Резюме</h2>
                        <p><b>Ім’я:</b> {firstName}</p>
                        <p><b>Прізвище:</b> {lastName}</p>
                        <p><b>Email:</b> {email}</p>
                        <p><b>Телефон:</b> {phone}</p>
                        <p><b>Стать:</b> {gender}</p>
                        <p><b>Місто:</b> {city}</p>
                        <p><b>Про себе:</b><br />{about}</p>
                    </div>
                )}
        </div>
    )
}

export default MyResume;