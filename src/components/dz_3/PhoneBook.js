import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import SearchBar from "./SearchBar";
import "./PhoneBook.css";

function PhoneBook() {
    const [contacts, setContacts] = useState([]);
    const [editingContact, setEditingContact] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const addContact = (contact) => {
        setContacts([...contacts, { ...contact, id: Date.now() }]);
    };

    const updateContact = (updated) => {
        setContacts(
            contacts.map((c) => (c.id === updated.id ? updated : c))
        );
        setEditingContact(null);
    };

    const deleteContact = (id) => {
        setContacts(contacts.filter((c) => c.id !== id));
    };

    const startEdit = (contact) => {
        setEditingContact(contact);
    };

    const filteredContacts = contacts.filter((c) =>
        c.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="phonebook">
            <h1>Телефонна книга</h1>
            <ContactForm onSave={editingContact ? updateContact : addContact} contact={editingContact}
                key={editingContact ? editingContact.id : "new"}
            />
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            <ContactList contacts={filteredContacts} onEdit={startEdit}
                onDelete={deleteContact}
            />
        </div>
    );
}

export default PhoneBook;