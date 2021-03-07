import { React, useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "./SignUp.css";

export default function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  return (
    <>
      <Card className="signUpCard">
        <Card.Body className="signUpBody">
          <h2 className="signUpHeader">Sign Up</h2>
          <Form className="signUpForm">
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
            <Button className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          Already have an account? Log In
        </div>
      </Card>
    </>
  );
}
