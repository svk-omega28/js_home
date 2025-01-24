import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const ContactForm = ({ addContact }) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Ім\'я є обов\'язковим';
        if (!formData.email.trim()) {
            newErrors.email = 'Електронна пошта є обов\'язковою';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Невірний формат електронної пошти';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Телефон є обов\'язковим';
        } else if (!/^\d{12}$/.test(formData.phone)) {
            newErrors.phone = 'Телефон повинен містити 12 цифр';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            addContact(formData);
            setFormData({ name: '', email: '', phone: '' });
            setSubmitted(true);
            setErrors({});
        } else {
            setErrors(validationErrors);
            setSubmitted(false);
        }
    };

    return (
        <div className="form-container">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Ім'я</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Електронна пошта</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Телефон</Form.Label>
                    <Form.Control
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        isInvalid={!!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Відправити
                </Button>
            </Form>

            {submitted && (
                <Alert variant="success" className="mt-3">
                    Форма успішно відправлена!
                </Alert>
            )}
        </div>
    );
};

export default ContactForm;
