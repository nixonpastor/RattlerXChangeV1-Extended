import { React, useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import "./SignUp.css";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

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


  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  //const [userEmail, setUserEmail] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  //const [userImage, setProductImage] = useState("");


  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);

      const User = {email: emailRef.current.value, 
                    firstName: firstNameRef.current.value,
                    lastName: lastNameRef.current.value,
                    phoneNumber: phoneNumberRef.current.value};

      /*
      // User.append("email", emailRef.current.value);
      // User.append("firstName", firstNameRef.current.value);
      // User.append("lastName", lastNameRef.current.value);
      // User.append("phoneNumber", phoneNumberRef.current.value);
      */
      axios
        .post("http://localhost:5000/users/addUser", User)
        .then((res) => console.log(res.data));

      //setUserEmail("");
      // setUserFirstName("");
      // setUserLastName("");
      // setUserPhoneNumber("");

      history.push("/");

    } catch {
      window.alert("Failed to create an account")
      setError("Failed to create an account");
    }
    setLoading(false);
  }


  // function onChangeUserEmail(e) {
  //   setUserEmail(e.target.value);
  // }

  // function onChangeUserFirstName(e){
  //   setUserFirstName(e.target.value);
  // }

  // function onChangeUserLastName(e){
  //   setUserLastName(e.target.value);
  // }

  // function onChangeUserPhoneNumber(e){
  //   setUserPhoneNumber(e.target.value);
  // }  


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
                name="firstName"
                type="text"
                placeholder="Please enter your first name."
                ref={firstNameRef}
                required
              />
            </Form.Group>

            <Form.Group className="InputField" id="LName">
              <Form.Label className="lNameField">Last Name</Form.Label>
              <Form.Control
                className="textInput"
                name="lastName"
                type="text"
                placeholder="Please enter your last name."
                ref={lastNameRef}
                required
              />
            </Form.Group>

            <Form.Group className="InputField" id="phNumber">
              <Form.Label className="pNumberField">Phone Number</Form.Label>
              <Form.Control
                className="textInput"
                name="phoneNumber"
                type="text"
                placeholder="Please enter your phone number."
                ref={phoneNumberRef}
                required
              />
            </Form.Group>

            <Form.Group className="InputField" id="email">
              <Form.Label className="emailField">Email</Form.Label>
              <Form.Control
                className="textInput"
                type="email"
                name="email"
                placeholder="Please enter your Stmary's email address ."
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group className="InputField" id="password">
              <Form.Label className="passwordField">Password</Form.Label>
              <Form.Control
                className="textInput"
                type="password"
                placeholder="Please enter your Password. 6 characters Minimum with a UpperCase character."
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Form.Group className="InputField" id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                className="textInput"
                type="password"
                placeholder="Please Re-enter your password."
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
