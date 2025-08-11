import { useState } from "react";

export default function TrainerList({ trainers, onDelete, onEdit }) {
    const [search, setSearch] = useState("");

    const filtered = trainers.filter((t) =>
        [t.name, t.phone, t.special.join(" ")]
            .some((field) => field.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div>
            <input placeholder="Пошук" value={search} onChange={(e) => setSearch(e.target.value)} />
            <ul className="trainer-list">
                {filtered.map((t) => (
                    <li key={t.id}>
                        <strong>{t.name}</strong> — {t.phone}
                        <br />
                        <em>{t.special.join(", ")}</em>
                        <div>
                            <button onClick={() => onEdit(t)}>✏️ Редагувати</button>
                            <button onClick={() => onDelete(t.id)}>🗑 Видалити</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}