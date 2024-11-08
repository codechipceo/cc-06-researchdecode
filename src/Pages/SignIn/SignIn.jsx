import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/use-auth";
import { Input, InputGroup, Button, Container, Grid, Row, Col } from "rsuite";
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import '../../assets/scss/components/signin.scss';

export const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading, errorMessage, isError, handleLogin } = useAuth();

  const handlePasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const loginObj = {
    email,
    password,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(loginObj);
  };

  return (
    <Container className="signin-container">
      <div className="svg-container">
        <svg
          className="signin-icon"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.4281 2.94975C22.3807 0.997126 25.5466 0.997126 27.4992 2.94975L44.9775 20.4281C46.9302 22.3807 46.9302 25.5466 44.9775 27.4992L27.4992 44.9775C25.5466 46.9302 22.3807 46.9302 20.4281 44.9775L2.94975 27.4992C0.997126 25.5466 0.997126 22.3807 2.94975 20.4281L20.4281 2.94975Z"
            stroke="#49BBBD"
            strokeWidth="2"
          />
        </svg>
        <h1 className="signin-title">RESEARCH DECODE</h1>
      </div>

      <h2 className="signin-subtitle">Sign In</h2>

      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <InputGroup inside className="input-field">
          <InputGroup.Addon>
            <AiOutlineMail className="icon"/>
          </InputGroup.Addon>
          <Input
            placeholder="Enter Your Mail id"
            value={email}
            onChange={(value) => setEmail(value)}
            errorMessage={isError ? errorMessage : ""}
          />
        </InputGroup>

        <InputGroup inside className="input-field">
          <InputGroup.Addon>
            <AiOutlineLock className="icon"/>
          </InputGroup.Addon>
          <Input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(value) => setPassword(value)}
          />
          <InputGroup.Button onClick={handlePasswordToggle}>
            {showPassword ? (
              <AiOutlineEye className="icon"/>
            
            ) : (
              <AiOutlineEyeInvisible className="icon"/>
            )}
          </InputGroup.Button>
        </InputGroup>
        <Row className="forgot-password">
          <Col xs={24}>
            <Link to="#">Forgot Password?</Link>
          </Col>
        </Row>
        <Button
          type="submit"
          // appearance="primary"
          className="submit-button"
          loading={isLoading}
          block
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </Button>

       
      </form>
    </Container>
  );
};