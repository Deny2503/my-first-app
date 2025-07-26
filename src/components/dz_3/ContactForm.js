import { useEffect, useState } from "react";

function ContactForm({ onSave, contact }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    useEffect(() => {
        if (contact) {
            setFormData(contact);
        }
    }, [contact])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.firstName || !formData.lastName) return;
        onSave({ ...formData });
        setFormData({ firstName: "", lastName: "", email: "", phone: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <input name="firstName" placeholder="Ім'я" value={formData.firstName} onChange={handleChange} required />
            <input name="lastName" placeholder="Прізвище" value={formData.lastName} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input name="phone" placeholder="Телефон" value={formData.phone} onChange={handleChange} />
            <button type="submit">
                {contact ? "Оновити" : "Додати"}
            </button>
        </form>
    );
}

export default ContactForm;