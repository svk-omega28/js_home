import React from 'react';
import { Table, Button } from 'react-bootstrap';

const ContactList = ({ contacts, onAddContact, onDeleteContact }) => {
    return (
        <div>
            <h1>Contacts</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.username}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <Button
                                variant="danger"
                                onClick={() => onDeleteContact(contact.id)}
                            >
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <Button variant="primary" onClick={onAddContact}>
                Add Contact
            </Button>
        </div>
    );
};

export default ContactList;
