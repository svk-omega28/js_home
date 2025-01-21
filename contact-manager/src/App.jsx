import React, { useState } from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

const App = () => {
    const [showForm, setShowForm] = useState(false);
    const [contacts, setContacts] = useState([]); // Список контактов

    const handleAddContact = () => {
        setShowForm(true);
    };

    const handleSaveContact = (newContact) => {
        // Добавление нового контакта в список
        setContacts([...contacts, { ...newContact, id: Date.now() }]);
        setShowForm(false);
    };

    const handleDeleteContact = (id) => {
        // Удаление контакта из списка
        setContacts(contacts.filter((contact) => contact.id !== id));
    };

    const handleCancel = () => {
        setShowForm(false);
    };

    return (
        <div className="container mt-5">
            {showForm ? (
                <ContactForm onSave={handleSaveContact} onCancel={handleCancel} />
            ) : (
                <ContactList
                    contacts={contacts}
                    onAddContact={handleAddContact}
                    onDeleteContact={handleDeleteContact}
                />
            )}
        </div>
    );
};

export default App;
