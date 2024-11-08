import { useState } from "react";
import { Link } from "react-router-dom";
import { InputGroup, Input, Button, Container, Divider, Row, Col, SelectPicker } from "rsuite";
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import useAuth from "../../Hooks/use-auth";
import '../../assets/scss/components/signup.scss';

export const SignUp = () => {
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
    countryCode: "",
    phoneNumber: "",
    city: "",
    state: "",
    country: "",
    street: "",
    postalCode: "",
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
    handleSignUp(signUpObj);
  };

  return (
    <Container className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <div className="logo-container">
          <svg width="48" height="48" className="icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.4281 2.94975C22.3807 0.997126 25.5466 0.997126 27.4992 2.94975L44.9775 20.4281C46.9302 22.3807 46.9302 25.5466 44.9775 27.4992L27.4992 44.9775C25.5466 46.9302 22.3807 46.9302 20.4281 44.9775L2.94975 27.4992C0.997126 25.5466 0.997126 22.3807 2.94975 20.4281L20.4281 2.94975Z" stroke="#49BBBD" strokeWidth="2"/>
          </svg>
          <h5 className="title">RESEARCH DECODE</h5>
        </div>

        {/* First Name and Last Name on the same line */}
        <div className="name-fields">
          <InputGroup inside className="input-field">
            <InputGroup.Addon>
              <AiOutlineUser className="icon" />
            </InputGroup.Addon>
            <Input
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={(value) => handleChange("firstName", value)}
            />
          </InputGroup>

          <InputGroup inside className="input-field">
            <InputGroup.Addon>
              <AiOutlineUser className="icon" />
            </InputGroup.Addon>
            <Input
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={(value) => handleChange("lastName", value)}
            />
          </InputGroup>
        </div>

        <InputGroup inside className="input-field">
          <InputGroup.Addon>
            <AiOutlineMail className="icon" />
          </InputGroup.Addon>
          <Input
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(value) => handleChange("email", value)}
            error={emailError}
          />
        </InputGroup>

        <InputGroup inside className="input-field">
          <InputGroup.Addon>
            <AiOutlineLock className="icon" />
          </InputGroup.Addon>
          <Input
            placeholder="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={(value) => handleChange("password", value)}
            error={isError}
          />
        </InputGroup>

        <InputGroup inside className="input-field">
          <InputGroup.Addon>
            <AiOutlineUser className="icon" />
          </InputGroup.Addon>
          <SelectPicker
            placeholder="Gender"
            name="gender"
            data={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ]}
            style={{ width: "100%" }}
            value={formData.gender}
            onChange={(value) => handleChange("gender", value)}
            error={isError}
          />
        </InputGroup>

        <div className="input-group">
          <InputGroup inside className="input-field">
            <SelectPicker
              placeholder="Country Code"
              name="countryCode"
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

          <InputGroup inside className="input-field">
            <Input
              placeholder="Phone Number"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={(value) => handleChange("phoneNumber", value)}
              error={phoneNumberError}
            />
          </InputGroup>
        </div>

        <InputGroup inside className="input-field">
          <Input
            placeholder="Street"
            name="street"
            value={formData.street}
            onChange={(value) => handleChange("street", value)}
            error={isError}
          />
        </InputGroup>

        <InputGroup inside className="input-field">
          <Input
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={(value) => handleChange("city", value)}
            error={isError}
          />
        </InputGroup>

        <InputGroup inside className="input-field">
          <Input
            placeholder="State/Province"
            name="state"
            value={formData.state}
            onChange={(value) => handleChange("state", value)}
            error={isError}
          />
        </InputGroup>

        <InputGroup inside className="input-field">
          <Input
            placeholder="Postal Code"
            name="postalCode"
            value={formData.postalCode}
            onChange={(value) => handleChange("postalCode", value)}
            error={isError}
          />
        </InputGroup>

        <InputGroup inside className="input-field">
          <Input
            placeholder="Country"
            name="country"
            value={formData.country}
            onChange={(value) => handleChange("country", value)}
            error={isError}
          />
        </InputGroup>

        <Button
          type="submit"
          className="submit-button"
          block
          loading={isLoading}
          disabled={isLoading}
        >
          Sign Up
        </Button>

        <Divider />

        <Row className="redirect-to-signin">
          <Col xs={24}>
            Already have an account? <Link to="/signin">Sign In</Link>
          </Col>
        </Row>
      </form>
    </Container>
  );
};
