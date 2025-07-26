function ContactList({ contacts, onEdit, onDelete }) {
    if (contacts.length === 0) {
        return <p className="no-contacts">Контактів не знайдено.</p>;
    }

    return (
        <ul className="contact-list">
            {contacts.map(c =>
                <li key={c.id} className="contact-item">
                    <div>
                        <strong>{c.firstName} {c.lastName}</strong><br />
                        <small>{c.email}</small><br />
                        <small>{c.phone}</small>
                    </div>
                    <div className="actions">
                        <button onClick={() => onEdit(c)}>✏️</button>
                        <button onClick={() => onDelete(c.id)}>🗑️</button>
                    </div>
                </li>
            )}
        </ul>
    );
}

export default ContactList;