import { React, useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import "./SignIn.css";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  return (
   
    <>
      <div>
      <Card className="signUpCard">
        <Card.Body className="signUpBody">
          <h2 className="signUpHeader">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
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
            <Form.Group className="InputField" id="password">
              <Form.Label className="passwordField">Password</Form.Label>
              <Form.Control
                className="textInput"
                type="password"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Button disabled={loading} className="w-100-1" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to="/forgotpassword">Forgot Password?</Link>
          </div>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign up</Link>
        </div>
      </Card>
      </div>
    </>
  );
}
