import React from "react";
import NoteForm from "./NoteForm";
import Note from "./Note";
import Filter from "./Filter";
import "./styles.css";

class DZ_9 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            filterTags: [],
            editNote: null,
        };
    }

    addNote = (note) => {
        this.setState((prevState) => ({
            notes: [...prevState.notes, { ...note, id: Date.now() }],
        }));
    };

    updateNote = (updatedNote) => {
        this.setState((prevState) => ({
            notes: prevState.notes.map((note) =>
                note.id === updatedNote.id ? updatedNote : note
            ),
            editNote: null,
        }));
    };

    deleteNote = (id) => {
        this.setState((prevState) => ({
            notes: prevState.notes.filter((note) => note.id !== id),
        }));
    };

    editNote = (note) => {
        this.setState({ editNote: note });
    };

    filterNotes = (tags) => {
        this.setState({ filterTags: tags });
    };

    getAllTags = () => {
        const tagsSet = new Set();
        this.state.notes.forEach((note) => note.tags.forEach((tag) => tagsSet.add(tag)));
        return Array.from(tagsSet);
    };

    getFilteredNotes = () => {
        const { notes, filterTags } = this.state;
        if (filterTags.length === 0) return notes;
        return notes.filter((note) => filterTags.every((tag) => note.tags.includes(tag)));
    };

    render() {
        const filteredNotes = this.getFilteredNotes();
        return (
            <div className="app">
                <h1>Список нотаток</h1>
                <NoteForm addNote={this.addNote} updateNote={this.updateNote} editNote={this.state.editNote} />
                <Filter allTags={this.getAllTags()} onFilter={this.filterNotes} />
                <div className="notes-list">
                    {filteredNotes.map((note) => (
                        <Note key={note.id} note={note} onEdit={this.editNote} onDelete={this.deleteNote} />
                    ))}
                </div>
            </div>
        );
    }
}

export default DZ_9;