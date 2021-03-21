import { React, useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import "./SignUp.css";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <>
      <Card className="signUpCard">
        <Card.Body className="signUpBody">
          <h2 className="signUpHeader">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form className="signUpForm" onSubmit={handleSubmit}>
            <Form.Group className="InputField" id="FName">
              <Form.Label className="fNameField">First Name</Form.Label>
              <Form.Control
                className="textInput"
                type="text"
                ref={firstNameRef}
                required
              />
            </Form.Group>

            <Form.Group className="InputField" id="LName">
              <Form.Label className="lNameField">Last Name</Form.Label>
              <Form.Control
                className="textInput"
                type="text"
                ref={lastNameRef}
                required
              />
            </Form.Group>

            <Form.Group className="InputField" id="phNumber">
              <Form.Label className="pNumberField">Phone Number</Form.Label>
              <Form.Control
                className="textInput"
                type="text"
                ref={phoneNumberRef}
                required
              />
            </Form.Group>

            <Form.Group className="InputField" id="email">
              <Form.Label className="emailField">Email</Form.Label>
              <Form.Control
                className="textInput"
                type="email"
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group className="InputField" id="password">
              <Form.Label className="passwordField">Password</Form.Label>
              <Form.Control
                className="textInput"
                type="password"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Form.Group className="InputField" id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                className="textInput"
                type="password"
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
            <Button disabled={loading} className="w-100-1" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
        <div className="AlreadyAcc">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </Card>
    </>
  );
}
