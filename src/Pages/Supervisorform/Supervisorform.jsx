import React, { useState } from 'react';
import ResponsiveAppBar from '../../Components/Navbar/Navbar';
import { Input, InputGroup, SelectPicker } from 'rsuite';
import { AiOutlineMail, AiOutlineUser, AiOutlinePhone, AiOutlineHome } from 'react-icons/ai';
import { BsCalendarDate } from 'react-icons/bs';

function Supervisorform() {
    // State to store input values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        address: '',
        occupation: '',
    });

    // State for validation messages
    const [errors, setErrors] = useState({});

    const genderOptions = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
    ];

    const occupationOptions = [
        { label: 'Student', value: 'student' },
        { label: 'Employee', value: 'employee' },
        { label: 'Self-Employed', value: 'self-employed' },
        { label: 'Other', value: 'other' },
    ];

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

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // If no errors, log the data
        console.log('Form Submitted:', formData);
        alert('Form submitted successfully!');
        // You can send the `formData` to your backend here
    };

    return (
        <div>
            <ResponsiveAppBar />
            <div className='about'>
                <div className='about-inner'>
                    <p>
                    Consectetur provident reprehenderit eum quidem eos temporibus, rerum sunt aspernatur perspiciatis asperiores labore odio amet ut sapiente, ducimus aperiam velit ex deleniti perferendis cupiditate nam consequatur at? Ipsa voluptas cumque optio aliquid deserunt accusamus minus quos, veritatis dolor consectetur dolores repellendus dignissimos! Quo, eius officiis? Autem dolore molestias eligendi obcaecati ipsum iure rerum, dolor exercitationem, commodi, officiis repellat magni architecto! Praesentium quo quaerat vero fugit esse ut, nostrum in alias nesciunt facere facilis. Nam velit nisi nostrum quibusdam in qui tempora odio, perspiciatis laboriosam magnam! Reiciendis perspiciatis rerum corporis.
                    </p>
                </div>
            </div>

            <div className='form-container'>
                <form onSubmit={handleSubmit} className='form-area'>
                    {/* Name Field */}
                    <InputGroup inside className='input-field'>
                        <InputGroup.Addon>
                            <AiOutlineUser className='icon' />
                        </InputGroup.Addon>
                        <Input
                            placeholder='Enter Your Name'
                            type='text'
                            value={formData.name}
                            onChange={(value) => handleChange('name', value)}
                        />
                    </InputGroup>
                    {errors.name && <p className='error-message'>{errors.name}</p>}

                    {/* Email Field */}
                    <InputGroup inside className='input-field'>
                        <InputGroup.Addon>
                            <AiOutlineMail className='icon' />
                        </InputGroup.Addon>
                        <Input
                            placeholder='Enter Your Email'
                            type='email'
                            value={formData.email}
                            onChange={(value) => handleChange('email', value)}
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
                            value={formData.phone}
                            onChange={(value) => handleChange('phone', value)}
                        />
                    </InputGroup>
                    {errors.phone && <p className='error-message'>{errors.phone}</p>}

                    {/* Date of Birth Field */}
                    <InputGroup inside className='input-field'>
                        <InputGroup.Addon>
                            <BsCalendarDate className='icon' />
                        </InputGroup.Addon>
                        <Input
                            placeholder='Enter Your Date of Birth (DD/MM/YYYY)'
                            type='date'
                            value={formData.dob}
                            onChange={(value) => handleChange('dob', value)}
                        />
                    </InputGroup>
                    {errors.dob && <p className='error-message'>{errors.dob}</p>}

                    {/* Gender Field */}
                    <SelectPicker
                        data={genderOptions}
                        placeholder="Select Gender"
                        value={formData.gender}
                        onChange={(value) => handleChange('gender', value)}
                        style={{ width: '100%' }}
                        className='input-field'
                    />
                    {errors.gender && <p className='error-message'>{errors.gender}</p>}

                    {/* Address Field */}
                    <InputGroup inside className='input-field'>
                        <InputGroup.Addon>
                            <AiOutlineHome className='icon' />
                        </InputGroup.Addon>
                        <Input
                            placeholder='Enter Your Address'
                            type='text'
                            value={formData.address}
                            onChange={(value) => handleChange('address', value)}
                        />
                    </InputGroup>
                    {errors.address && <p className='error-message'>{errors.address}</p>}

                    {/* Occupation Field */}
                    <SelectPicker
                        data={occupationOptions}
                        placeholder="Select Occupation"
                        value={formData.occupation}
                        onChange={(value) => handleChange('occupation', value)}
                        style={{ width: '100%' }}
                        className='input-field'
                    />
                    {errors.occupation && <p className='error-message'>{errors.occupation}</p>}

                    {/* Submit Button */}
                    <div className='submit-button-container'>
                        <button type='submit' className='submit-button1'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Supervisorform;
