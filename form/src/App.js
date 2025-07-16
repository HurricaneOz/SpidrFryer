import React, { useState } from 'react';
import './App.css';
import '@fontsource/raleway';

export default function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    guessCost: '',
    spidrPin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'spidrPin') {
      const digits = value.replace(/\D/g, '').slice(0, 16);
      const formatted = digits.replace(/(\d{4})(?=\d)/g, '$1-');
      setFormData({ ...formData, [name]: formatted });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
  <div className="form-container">
    <div className="form-wrapper">
      <h2 className="form-title">Spidr Air Fryer Interest Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <div>
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div>
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
        </div>

        <div>
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div>
          <label className="form-label">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div>
          <label className="form-label">Guess the Air Fryer’s Cost ($)</label>
          <input
            type="number"
            name="guessCost"
            value={formData.guessCost}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div>
          <label className="form-label">Very, Very Secret 16-Digit Spidr PIN</label>
          <input
            type="text"
            name="spidrPin"
            value={formData.spidrPin}
            onChange={handleChange}
            placeholder="####-####-####-####"
            className="form-input pin-input"
            required
          />
        </div>

        <button type="submit" className="form-submit">Submit</button>
      </form>
    </div>
  </div>
);
}