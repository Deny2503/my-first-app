import { useEffect, useState } from "react";
import { allSpecial } from "./data";

export default function TrainerForm({ onSave, editingTrainer, onCancel }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [specializations, setSpecializations] = useState([]);

    useEffect(() => {
        if (editingTrainer) {
            setName(editingTrainer.name);
            setPhone(editingTrainer.phone);
            setSpecializations(editingTrainer.specializations);
        }
    }, [editingTrainer]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !phone.trim()) return;
        onSave({ id: editingTrainer?.id || Date.now(), name, phone, specializations });
        setName("");
        setPhone("");
        setSpecializations([]);
    };

    const toggleSpecializations = (spec) => {
        setSpecializations((prev) =>
            prev.includes(spec) ? prev.filter((s) => s !== spec) : [...prev, spec]
        );
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input placeholder="ФИО" value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder="телефон" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <div className="specializations">
                {allSpecial.map((spec) => (
                    <label key={spec}>
                        <input
                            type="checkbox" checked={specializations.includes(spec)} onChange={() => toggleSpecializations(spec)}
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