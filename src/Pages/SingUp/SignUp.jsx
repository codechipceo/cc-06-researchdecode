import { useState } from "react";
import { Link } from "react-router-dom";
import {
  InputGroup,
  Input,
  Button,
  Container,
  Divider,
  Row,
  Col,
  SelectPicker,
  Grid,
  Radio,
  RadioGroup,
  DatePicker,
} from "rsuite";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import useAuth from "../../Hooks/use-auth";

export const SignUp = () => {
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
    countryCode: "",
    phoneNumber: "",
    collegeName: '',
    department: '',
    graduationStatus: '',
    dob:'',
  });

  const { isLoading, errorMessage, isError, handleSignUp } = useAuth();

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validation
    if (name === "email") {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setEmailError(!emailValid);
    }
    if (name === "phoneNumber") {
      const phoneValid = /^[0-9]*$/.test(value);
      setPhoneNumberError(!phoneValid);
    }
  };

  const signUpObj = {
    email: formData.email,
    password: formData.password,
    firstName: formData.firstName,
    lastName: formData.lastName,
    gender: formData.gender,
    countryCode: formData.countryCode,
    phoneNumber: formData.phoneNumber,
    address: {
      city: formData.city,
      state: formData.state,
      country: formData.country,
      street: formData.street,
      postalCode: formData.postalCode,
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignUp(formData);
  };

  return (
    <Container className='sign-up-container'>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <div className='logo-container'>
          <svg
            width='48'
            height='48'
            className='icon'
            viewBox='0 0 48 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M20.4281 2.94975C22.3807 0.997126 25.5466 0.997126 27.4992 2.94975L44.9775 20.4281C46.9302 22.3807 46.9302 25.5466 44.9775 27.4992L27.4992 44.9775C25.5466 46.9302 22.3807 46.9302 20.4281 44.9775L2.94975 27.4992C0.997126 25.5466 0.997126 22.3807 2.94975 20.4281L20.4281 2.94975Z'
              stroke='#49BBBD'
              strokeWidth='2'
            />
          </svg>
          <h5 className='title'>RESEARCH DECODE</h5>
        </div>

        <Grid fluid>
          {/* First Name and Last Name on the same line */}
          <Col xs={24} md={12}>
            <InputGroup inside className='input-field'>
              <InputGroup.Addon>
                <AiOutlineUser className='icon' />
              </InputGroup.Addon>
              <Input
                placeholder='First Name'
                name='firstName'
                value={formData.firstName}
                onChange={(value) => handleChange("firstName", value)}
              />
            </InputGroup>
          </Col>
          <Col xs={24} md={12}>
            <InputGroup inside className='input-field'>
              <InputGroup.Addon>
                <AiOutlineUser className='icon' />
              </InputGroup.Addon>
              <Input
                placeholder='Last Name'
                name='lastName'
                value={formData.lastName}
                onChange={(value) => handleChange("lastName", value)}
              />
            </InputGroup>
          </Col>
          {/* Email Field */}
          <Row>
            <Col xs={24}>
              <InputGroup inside className='input-field'>
                <InputGroup.Addon>
                  <AiOutlineMail className='icon' />
                </InputGroup.Addon>
                <Input
                  placeholder='Email'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={(value) => handleChange("email", value)}
                  error={emailError}
                />
              </InputGroup>
            </Col>
          </Row>

          {/* Password Field */}
          <Row>
            <Col xs={24}>
              <InputGroup inside className='input-field'>
                <InputGroup.Addon>
                  <AiOutlineLock className='icon' />
                </InputGroup.Addon>
                <Input
                  placeholder='Password'
                  name='password'
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(value) => handleChange("password", value)}
                  error={isError}
                />
                <InputGroup.Button
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </InputGroup.Button>
              </InputGroup>
            </Col>
          </Row>

          {/* Country Code and Phone Number */}
          {/* <Col xs={6}>
            <InputGroup className="input-field">
              <SelectPicker
                placeholder="+91"
                name="countryCode"
                className="country-code"
                data={[
                  { label: "+91", value: "+91" },
                  { label: "+1", value: "+1" },
                  { label: "+44", value: "+44" },
                ]}
                style={{ width: "100%" }}
                value={formData.countryCode}
                onChange={(value) => handleChange("countryCode", value)}
                error={isError}
              />
              </InputGroup>
            </Col> */}
          <InputGroup inside className='input-field'>
            <Input
              placeholder='Phone Number'
              name='phoneNumber'
              className='phone-number'
              type='tel'
              value={formData.phoneNumber}
              onChange={(value) => handleChange("phoneNumber", value)}
              error={phoneNumberError}
            />
          </InputGroup>

          <InputGroup inside className='input-field'>
            <Input
              placeholder='College Name'
              name='collegeName'
              value={formData.collegeName}
              onChange={(value) => handleChange("collegeName", value)}
              error={isError}
            />
          </InputGroup>

          <InputGroup inside className='input-field'>
            <Input
              placeholder='Department'
              name='department'
              value={formData.department}
              onChange={(value) => handleChange("department", value)}
              error={isError}
            />
          </InputGroup>

          <DatePicker
            name='dob'
            value={formData.dob}
            onChange={(value) => handleChange("dob", value)}
            placeholder='Date Of Birth'
          />
          <RadioGroup
            name='graduationStatus'
            inline
            value={formData.graduationStatus}
            onChange={(value) => handleChange("graduationStatus", value)}
          >
            <Radio value='UG'>UG Student</Radio>
            <Radio value='PG'>PG Student</Radio>
            <Radio value='PHD'>PHD Student</Radio>
            <Radio value='Other'>Other</Radio>
          </RadioGroup>

          <Row>
            <Col xs={24}>
              <Button
                type='submit'
                className='submit-button'
                block
                loading={isLoading}
                disabled={isLoading}
              >
                Sign Up
              </Button>
            </Col>
          </Row>
        </Grid>

        <Divider />

        <Row className='redirect-to-signin'>
          <Col xs={24}>
            Already have an account? <Link to='/signin'>Sign In</Link>
          </Col>
        </Row>
      </form>
      <ToastContainer />
    </Container>
  );
};
