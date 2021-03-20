import { React, useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import "./SignUp.css";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }

  return (
    <div className="signUpBox">
      <Card className="signUpCard">
        <Card.Body className="signUpBody">
          <h2 className="signUpHeader">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}

          <Form className="signUpForm" onSubmit={handleSubmit}>
            <Form.Group className="InputField" id="email">
              <Form.Label className="emailField">Email</Form.Label>
              <Form.Control
                className="textInput"
                type="email"
                ref={emailRef}
                required
              />
            </Form.Group>
            <Button disabled={loading} className="w-100-1" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to="/login">Log In</Link>
          </div>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign up</Link>
        </div>
      </Card>
    </div>
  );
}
