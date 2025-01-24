import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App = () => {
    const [contacts, setContacts] = useState(() => {
        const savedContacts = localStorage.getItem('contacts');
        return savedContacts ? JSON.parse(savedContacts) : [];
    });

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = (contact) => {
        setContacts([...contacts, contact]);
    };

    const updateContact = (index, updatedContact) => {
        const updatedContacts = contacts.map((contact, i) =>
            i === index ? updatedContact : contact
        );
        setContacts(updatedContacts);
    };

    const deleteContact = (index) => {
        const updatedContacts = contacts.filter((_, i) => i !== index);
        setContacts(updatedContacts);
    };

    return (
        <div className="app-container">
            <h1 className="text-center">Контактна форма</h1>
            <ContactForm addContact={addContact} />
            <ContactList
                contacts={contacts}
                updateContact={updateContact}
                deleteContact={deleteContact}
            />
        </div>
    );
};

export default App;
