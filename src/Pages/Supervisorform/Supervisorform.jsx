import React, { useState } from 'react';
import ResponsiveAppBar from '../../Components/Navbar/Navbar';
import { Input, InputGroup } from 'rsuite';
import { AiOutlineMail, AiOutlineUser, AiOutlinePhone } from 'react-icons/ai';
import { useSupervisor } from '../../Hooks/useSupervisor';

function Supervisorform() {
  // State to store input values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    experience: '',
  });

  // State for validation messages
  const [errors, setErrors] = useState({});

  const { loading, success, error, submitForm } = useSupervisor();

  // Handle input changes
  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });

    // Additional validation for experience field to be a number
    if (formData.experience && isNaN(formData.experience)) {
      newErrors.experience = "Experience must be a number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Call the Redux action to handle the form submission
    submitForm(formData);
  };

  return (
    <div>
      <ResponsiveAppBar />
      <div className="about">
        <div className="about-inner">
          <p>
            Fill in your details below to submit your request. All fields are required.
          </p>
        </div>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-area">
          {/* First Name Field */}
          <InputGroup inside className="input-field">
            <InputGroup.Addon>
              <AiOutlineUser className="icon" />
            </InputGroup.Addon>
            <Input
              placeholder="Enter Your First Name"
              type="text"
              value={formData.firstName}
              onChange={(value) => handleChange('firstName', value)}
            />
          </InputGroup>
          {errors.firstName && <p className="error-message">{errors.firstName}</p>}

          {/* Last Name Field */}
          <InputGroup inside className="input-field">
            <InputGroup.Addon>
              <AiOutlineUser className="icon" />
            </InputGroup.Addon>
            <Input
              placeholder="Enter Your Last Name"
              type="text"
              value={formData.lastName}
              onChange={(value) => handleChange('lastName', value)}
            />
          </InputGroup>
          {errors.lastName && <p className="error-message">{errors.lastName}</p>}

          {/* Email Field */}
          <InputGroup inside className="input-field">
            <InputGroup.Addon>
              <AiOutlineMail className="icon" />
            </InputGroup.Addon>
            <Input
              placeholder="Enter Your Email"
              type="email"
              value={formData.email}
              onChange={(value) => handleChange('email', value)}
            />
          </InputGroup>
          {errors.email && <p className="error-message">{errors.email}</p>}

          {/* Phone Number Field */}
          <InputGroup inside className="input-field">
            <InputGroup.Addon>
              <AiOutlinePhone className="icon" />
            </InputGroup.Addon>
            <Input
              placeholder="Enter Your Phone Number"
              type="tel"
              value={formData.phoneNumber}
              onChange={(value) => handleChange('phoneNumber', value)}
            />
          </InputGroup>
          {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}

          {/* Experience Field */}
          <InputGroup inside className="input-field">
            <InputGroup.Addon>
              <AiOutlineUser className="icon" />
            </InputGroup.Addon>
            <Input
              placeholder="Enter Your Experience (in years)"
              type="number"
              value={formData.experience}
              onChange={(value) => handleChange('experience', value)}
            />
          </InputGroup>
          {errors.experience && <p className="error-message">{errors.experience}</p>}

          {/* Submit Button */}
          <div className="submit-button-container">
            <button type="submit" className="submit-button1" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>

          {success && <p className="success-message">Form submitted successfully!</p>}
          {error && <p className="error-message">Error: {error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Supervisorform;
