import React, { useState } from 'react';
import axios from 'axios';

const FormCorreo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/signup', formData); // Reemplaza con tu dirección de servidor correcta
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container p-5">
      <h1 className="text-center">Signup</h1>
      <div >
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Subject</label>
            <input
              type="text"
              className="form-control"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Message</label>
            <textarea
              className="form-control"
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormCorreo;
