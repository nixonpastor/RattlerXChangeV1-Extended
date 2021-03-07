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
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
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
