import React, { useState } from 'react';
import { ListGroup, Button, Modal, Form } from 'react-bootstrap';

const ContactList = ({ contacts, updateContact, deleteContact }) => {
    const [editingIndex, setEditingIndex] = useState(null);
    const [editData, setEditData] = useState({ name: '', email: '', phone: '' });

    const handleEditClick = (index) => {
        setEditingIndex(index);
        setEditData(contacts[index]);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    };

    const handleEditSave = () => {
        updateContact(editingIndex, editData);
        setEditingIndex(null);
    };

    return (
        <div className="contact-list mt-4">
            <h2>Список контактів</h2>
            <ListGroup>
                {contacts.map((contact, index) => (
                    <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                        <div>
                            <strong>Ім'я:</strong> {contact.name} <br />
                            <strong>Email:</strong> {contact.email} <br />
                            <strong>Телефон:</strong> {contact.phone}
                        </div>
                        <div>
                            <Button
                                variant="warning"
                                size="sm"
                                className="me-2"
                                onClick={() => handleEditClick(index)}
                            >
                                Редагувати
                            </Button>
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => deleteContact(index)}
                            >
                                Видалити
                            </Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <Modal show={editingIndex !== null} onHide={() => setEditingIndex(null)}>
                <Modal.Header closeButton>
                    <Modal.Title>Редагувати контакт</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Ім'я</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={editData.name}
                                onChange={handleEditChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Електронна пошта</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={editData.email}
                                onChange={handleEditChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Телефон</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                value={editData.phone}
                                onChange={handleEditChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setEditingIndex(null)}>
                        Скасувати
                    </Button>
                    <Button variant="primary" onClick={handleEditSave}>
                        Зберегти
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ContactList;
