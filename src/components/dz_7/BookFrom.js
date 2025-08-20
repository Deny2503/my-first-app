import { useEffect, useState } from "react";

export default function BookForm({ onSave, editingBook, onCancel }) {
    const [form, setForm] = useState({ title: "", author: "", genre: "", year: "", pages: "" });

    useEffect(() => {
        if (editingBook) {
            setForm({
                title: editingBook.title,
                author: editingBook.author,
                genre: editingBook.genre,
                year: editingBook.year,
                pages: editingBook.pages,
            });
        }
    }, [editingBook]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.title.trim() || !form.author.trim()) return;


        onSave({ ...form, id: editingBook?.id || Date.now(), available: editingBook?.available ?? true });
        setForm({ title: "", author: "", genre: "", year: "", pages: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input placeholder="Назва" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            <input placeholder="Автор" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />
            <input placeholder="Жанр" value={form.genre} onChange={(e) => setForm({ ...form, genre: e.target.value })} />
            <input placeholder="Рік" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} />
            <input placeholder="Сторінки" value={form.pages} onChange={(e) => setForm({ ...form, pages: e.target.value })} />
            <button type="submit">{editingBook ? "Зберегти" : "Додати"}</button>
            {editingBook && <button type="button" onClick={onCancel}>Скасувати</button>}
        </form>
    );
}
