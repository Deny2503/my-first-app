import { useState } from "react";
import BookForm from "./BookFrom";
import BookSearch from "./BookSearch";
import BookList from "./BookList";
import { initialBooks } from "./book";
import "./style.css"

export default function DZ_7() {
    const [books, setBooks] = useState(initialBooks);
    const [editingBook, setEditingBook] = useState(null);
    const [search, setSearch] = useState({ title: "", author: "", genre: "", pages: "" });

    const saveBook = (book) => {
        if (editingBook) {
            setBooks(books.map((b) => (b.id === book.id ? book : b)));
            setEditingBook(null);
        } else {
            setBooks([...books, book]);
        }
    };

    const deleteBook = (id) => setBooks(books.filter((b) => b.id !== id));
    const toggleAvailability = (id) => {
        setBooks(books.map((b) => (b.id === id ? { ...b, available: !b.available } : b)));
    };

    const filteredBooks = books.filter((b) => {
        if (!b.available) return false;
        return (
            b.title.toLowerCase().includes(search.title.toLowerCase()) &&
            b.author.toLowerCase().includes(search.author.toLowerCase()) &&
            b.genre.toLowerCase().includes(search.genre.toLowerCase()) &&
            (search.pages === "" || b.pages === search.pages)
        );
    });


    return (
        <div className="library">
            <h1>Бібліотека</h1>
            <BookForm onSave={saveBook} editingBook={editingBook}  onCancel={() => setEditingBook(null)} />
            <BookSearch search={search} setSearch={setSearch} />

            <h2>Книги у наявності</h2>
            <BookList books={filteredBooks} onEdit={setEditingBook} onDelete={deleteBook} onToggleAvailability={toggleAvailability} />

            <h2>Видані книги</h2>
            <BookList books={books.filter((b) => !b.available)} onEdit={setEditingBook} onDelete={deleteBook} onToggleAvailability={toggleAvailability} />
        </div>
    );
}