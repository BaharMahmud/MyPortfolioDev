import React, { useState } from 'react';
import './contact.css';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    validateField(name, formData[name]);
  };
  const validateField = (name, value) => {
    let errorMsg = '';
    switch (name) {
      case 'name':
        errorMsg = value ? '' : 'Name is required';
        break;
      case 'email':
        const emailValid = value && /^\S+@\S+\.\S+$/.test(value);
        errorMsg = emailValid ? '' : 'Please enter a valid email address';
        break;
      case 'message':
        errorMsg = value ? '' : 'Message is required';
        break;
      default:
        break;
    }
    setErrors({ ...errors, [name]: errorMsg });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields when the form is submitted
    Object.keys(formData).forEach(name => {
      validateField(name, formData[name]);
    });
    // Proceed with form submission if there are no errors
    // You'll need to add your form submission logic here
  };
  return (
    <div className="contact" id="contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.name && errors.name ? 'input-error' : ''}
            required
          />
          {touched.name && errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.email && errors.email ? 'input-error' : ''}
            required
          />
          {touched.email && errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.message && errors.message ? 'input-error' : ''}
            required
          />
          {touched.message && errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit" className="submit-button">Send</button>
      </form>
    </div>
  );
};
export default Contact;