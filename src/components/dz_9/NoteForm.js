import React from "react";

class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            tags: "",
            editId: null,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.editNote !== this.props.editNote && this.props.editNote) {
            this.setState({
                title: this.props.editNote.title,
                description: this.props.editNote.description,
                tags: this.props.editNote.tags.join(", "),
                editId: this.props.editNote.id,
            });
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { title, description, tags, editId } = this.state;
        const tagsArray = tags.split(",").map((tag) => tag.trim()).filter(Boolean);

        if (editId !== null) {
            this.props.updateNote({ id: editId, title, description, tags: tagsArray });
        } else {
            this.props.addNote({ title, description, tags: tagsArray });
        }

        this.setState({ title: "", description: "", tags: "", editId: null });
    };

    render() {
        const { title, description, tags } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className="note-form">
                <input type="text" name="title" placeholder="Назва нотатки" value={title} onChange={this.handleChange} required />
                <textarea name="description" placeholder="Опис нотатки" value={description} onChange={this.handleChange} required />
                <input type="text" name="tags" placeholder="Теги (через коми)" value={tags} onChange={this.handleChange} />
                <button type="submit">{this.state.editId !== null ? "Оновити нотатку" : "Додати нотатку"}</button>
            </form>
        );
    }
}

export default NoteForm;
