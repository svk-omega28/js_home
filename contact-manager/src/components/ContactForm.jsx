import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const ContactForm = ({ onSave, onCancel }) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');

    const handleSave = () => {
        const newContact = { name, username, phone };
        onSave(newContact);
        setName('');
        setUsername('');
        setPhone('');
    };

    return (
        <div>
            <h2>Add Contact</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleSave}>
                    Save
                </Button>{' '}
                <Button variant="secondary" onClick={onCancel}>
                    Cancel
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;
