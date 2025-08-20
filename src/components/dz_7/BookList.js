export default function BookList({ books, onEdit, onDelete, onToggleAvailability }) {
    return (
        <ul className="book-list">
            {books.map((b) => (
                <li key={b.id} className="book-item">
                    <b>{b.title}</b> ({b.author}) — {b.genre}, {b.year}, {b.pages} стор.
                    <button onClick={() => onEdit(b)}>✏️</button>
                    <button onClick={() => onDelete(b.id)}>🗑️</button>
                    <button onClick={() => onToggleAvailability(b.id)}>
                        {b.available ? "Видати" : "Повернули"}
                    </button>
                </li>
            ))}
        </ul>
    );
}