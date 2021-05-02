import { React, useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import "./SignUp.css";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  //set state variables for forgot password
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    //Call to firebase for authentication to reset password
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

  //return Forgot password HTML page
  return (
    <div className="signUpBox">
      <Card
        className="signUpCard"
        style={{ height: "300px", marginTop: "-30px" }}
      >
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
                placeholder="Please enter your St. Mary's Email Address."
                ref={emailRef}
                required
              />
            </Form.Group>
            <Button disabled={loading} className="w-100-1" type="submit">
              Reset Password
            </Button>
          </Form>
          <div
            className="w-100 text-center mt-2"
            style={{ textAlign: "center" }}
          >
            <Link to="/login">Log In</Link>
          </div>
          <div
            className="w-100 text-center mt-2"
            style={{ textAlign: "center", paddingTop: "10px" }}
          >
            Need an account?
            <Link to="/signup"> Sign up</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
