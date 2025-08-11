import { useEffect, useState } from "react";
import { allSpecial } from "./data";

export default function TrainerForm({ onSave, editingTrainer, onCancel }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [special, setSpecial] = useState([]);

    useEffect(() => {
        if (editingTrainer) {
            setName(editingTrainer.name);
            setPhone(editingTrainer.phone);
            setspecial(editingTrainer.special);
        }
    }, [editingTrainer]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !phone.trim()) return;
        onSave({ id: editingTrainer?.id || Date.now(), name, phone, special });
        setName("");
        setPhone("");
        setspecial([]);
    };

    const toggleSpecial = (spec) => {
        setSpecial((prev) =>
            prev.includes(spec) ? prev.filter((s) => s !== spec) : [...prev, spec]
        );
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input placeholder="ФИО" value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder="телефон" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <div className="special">
                {allSpecial.map((spec) => (
                    <label key={spec}>
                        <input
                            type="checkbox" checked={special.includes(spec)} onChange={() => toggleSpecial(spec)}
                        />
                        {spec}
                    </label>
                ))}
            </div>
            <button type="submit" >{editingTrainer ? "Зберегти" : "Додати"}</button>
            {editingTrainer && <button onClick={onCancel}>Скасувати</button>}
        </form>
    );
}