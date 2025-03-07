import React, { useState } from 'react';
import ResponsiveAppBar from '../../Components/Navbar/Navbar';
import { Input, InputGroup } from 'rsuite';
import { AiOutlineMail, AiOutlineUser, AiOutlinePhone } from 'react-icons/ai';
import { useSupervisor } from '../../Hooks/useSupervisor';
import Footer from '../LandingPage/Section/Footer';
import { HeaderThree } from '../../Components/Headers/HeaderThree';
import CustomButton from '../../Components/CustomButton/CustomButton';

function Supervisorform() {
  // State to store input values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    institute: '',
    degree: '',
    specialisation: '',
    language: '',
    skills:'',
    bankName: '',
    accountNumber: '',
    IFSC_Code: '',
    address: {
      street: '',
      city: '',
      state: '',
      country: '',
      postalCode: '',
    },
    experience: '',
  });

  // State for validation messages
  const [errors, setErrors] = useState({});

  const { loading, success, error, submitForm } = useSupervisor();

  // Handle input changes
  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddressChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      address: { ...prev.address, [key]: value },
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== 'address' && !formData[key]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });

    // Validate address fields
    Object.keys(formData.address).forEach((key) => {
      if (!formData.address[key]) {
        newErrors[`address.${key}`] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });

    // Additional validation for numeric fields
    if (formData.experience && isNaN(formData.experience)) {
      newErrors.experience = 'Experience must be a number';
    }
    if (formData.accountNumber && isNaN(formData.accountNumber)) {
      newErrors.accountNumber = 'Account Number must be a number';
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
      <HeaderThree
        title={"Become A Tutor"}
        breadcrumbPath={[{ path: "/", label: "Home" }]}
      />
      <div className=''>
        <div className='about-inner'>
          <p>
            Fill in your details below to submit your joining request. <br />{" "}
            Please fill all fields correctly as your profile will be assessed
            later.{" "}
          </p>
        </div>
      </div>

      <div className='form-container'>
        <form onSubmit={handleSubmit} className='form-area'>
          {/* First Name Field */}
          <InputGroup inside className='input-field'>
            <InputGroup.Addon>
              <AiOutlineUser className='icon' />
            </InputGroup.Addon>
            <Input
              placeholder='Enter Your First Name'
              type='text'
              value={formData.firstName}
              onChange={(value) => handleChange("firstName", value)}
            />
          </InputGroup>
          {errors.firstName && (
            <p className='error-message'>{errors.firstName}</p>
          )}

          {/* Last Name Field */}
          <InputGroup inside className='input-field'>
            <InputGroup.Addon>
              <AiOutlineUser className='icon' />
            </InputGroup.Addon>
            <Input
              placeholder='Enter Your Last Name'
              type='text'
              value={formData.lastName}
              onChange={(value) => handleChange("lastName", value)}
            />
          </InputGroup>
          {errors.lastName && (
            <p className='error-message'>{errors.lastName}</p>
          )}

          {/* Email Field */}
          <InputGroup inside className='input-field'>
            <InputGroup.Addon>
              <AiOutlineMail className='icon' />
            </InputGroup.Addon>
            <Input
              placeholder='Enter Your Email'
              type='email'
              value={formData.email}
              onChange={(value) => handleChange("email", value)}
            />
          </InputGroup>
          {errors.email && <p className='error-message'>{errors.email}</p>}

          {/* Phone Number Field */}
          <InputGroup inside className='input-field'>
            <InputGroup.Addon>
              <AiOutlinePhone className='icon' />
            </InputGroup.Addon>
            <Input
              placeholder='Enter Your Phone Number'
              type='tel'
              value={formData.phoneNumber}
              onChange={(value) => handleChange("phoneNumber", value)}
            />
          </InputGroup>
          {errors.phoneNumber && (
            <p className='error-message'>{errors.phoneNumber}</p>
          )}
          {/* institute */}
          <InputGroup inside className='input-field'>
            <Input
              placeholder='Institute (Current Status)'
              type='text'
              value={formData.institute}
              onChange={(value) => handleChange("institute", value)}
            />
          </InputGroup>

          {/* skills */}
          <InputGroup inside className='input-field'>
            <Input
              placeholder='Enter Your Skills'
              type='text'
              value={formData.skills}
              onChange={(value) => handleChange("skills", value)}
            />
          </InputGroup>

          <InputGroup inside className='input-field'>
            <Input
              placeholder='Enter Your specialisation'
              type='text'
              value={formData.specialisation}
              onChange={(value) => handleChange("specialisation", value)}
            />
          </InputGroup>

          <InputGroup inside className='input-field'>
            <Input
              placeholder='Degree'
              type='text'
              value={formData.degree}
              onChange={(value) => handleChange("degree", value)}
            />
          </InputGroup>

          <InputGroup inside className='input-field'>
            <Input
              placeholder='Language'
              type='text'
              value={formData.language}
              onChange={(value) => handleChange("language", value)}
            />
          </InputGroup>
          <InputGroup inside className='input-field'>
            <Input
              placeholder='Total Experience (in years)'
              type='text'
              value={formData.experience}
              onChange={(value) => handleChange("experience", value)}
            />
          </InputGroup>
          {/* Degree Field */}

          {/* Bank Name */}
          <InputGroup inside className='input-field'>
            <Input
              placeholder='Enter Your Bank Name'
              type='text'
              value={formData.bankName}
              onChange={(value) => handleChange("bankName", value)}
            />
          </InputGroup>
          {errors.bankName && (
            <p className='error-message'>{errors.bankName}</p>
          )}

          {/* Account Number */}
          <InputGroup inside className='input-field'>
            <Input
              placeholder='Enter Your Account Number'
              type='number'
              value={formData.accountNumber}
              onChange={(value) => handleChange("accountNumber", value)}
            />
          </InputGroup>
          {errors.accountNumber && (
            <p className='error-message'>{errors.accountNumber}</p>
          )}

          {/* IFSC Code */}
          <InputGroup inside className='input-field'>
            <Input
              placeholder='Enter Your IFSC Code'
              type='text'
              value={formData.IFSC_Code}
              onChange={(value) => handleChange("IFSC_Code", value)}
            />
          </InputGroup>
          {errors.IFSC_Code && (
            <p className='error-message'>{errors.IFSC_Code}</p>
          )}

          {/* Address Fields */}
          <InputGroup inside className='input-field'>
            <Input
              placeholder='Street'
              type='text'
              value={formData.address.street}
              onChange={(value) => handleAddressChange("street", value)}
            />
          </InputGroup>
          {errors["address.street"] && (
            <p className='error-message'>{errors["address.street"]}</p>
          )}

          <InputGroup inside className='input-field'>
            <Input
              placeholder='City'
              type='text'
              value={formData.address.city}
              onChange={(value) => handleAddressChange("city", value)}
            />
          </InputGroup>
          {errors["address.city"] && (
            <p className='error-message'>{errors["address.city"]}</p>
          )}

          <InputGroup inside className='input-field'>
            <Input
              placeholder='State'
              type='text'
              value={formData.address.state}
              onChange={(value) => handleAddressChange("state", value)}
            />
          </InputGroup>
          {errors["address.state"] && (
            <p className='error-message'>{errors["address.state"]}</p>
          )}

          <InputGroup inside className='input-field'>
            <Input
              placeholder='Country'
              type='text'
              value={formData.address.country}
              onChange={(value) => handleAddressChange("country", value)}
            />
          </InputGroup>
          {errors["address.country"] && (
            <p className='error-message'>{errors["address.country"]}</p>
          )}

          <InputGroup inside className='input-field'>
            <Input
              placeholder='Postal Code'
              type='text'
              value={formData.address.postalCode}
              onChange={(value) => handleAddressChange("postalCode", value)}
            />
          </InputGroup>
          {errors["address.postalCode"] && (
            <p className='error-message'>{errors["address.postalCode"]}</p>
          )}

          {/* Submit Button */}
          <div className='submit-button-container'>
            <CustomButton
              onClick={handleSubmit}
              variant={"primary"}
              fontWeight={"semibold"}
              className='get-started btn-size-11'
            >
              Submit
            </CustomButton>
          </div>

          {success && (
            <p className='success-message'>Form submitted successfully!</p>
          )}
          {error && <p className='error-message'>Error: {error}</p>}
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Supervisorform;