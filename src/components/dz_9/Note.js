import React from "react";

class Note extends React.Component {
    render() {
        const { note, onEdit, onDelete } = this.props;
        return (
            <div className="note">
                <h3>{note.title}</h3>
                <p>{note.description}</p>
                <p><strong>Теги:</strong> {note.tags.join(", ")}</p>
                <button onClick={() => onEdit(note)}>Редагувати</button>
                <button onClick={() => onDelete(note.id)}>Видалити</button>
            </div>
        );
    }
}

export default Note;
