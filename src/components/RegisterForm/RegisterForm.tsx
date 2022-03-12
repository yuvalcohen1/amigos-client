import React, { useCallback, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RegisterBodyModel } from "../../models/RegisterBody.model";
import { RegisterValuesModel } from "../../models/RegisterValues.model";
import { useAppDispatch } from "../../redux/app/hooks";
import { register } from "../../redux/thunks/connectedUser-thunks";
import "./RegisterForm.css";

type Props = {};

const RegisterForm = (props: Props) => {
  const [validated, setValidated] = useState(false);
  const [registerValues, setRegisterValues] = useState<RegisterValuesModel>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      console.log("invalid");
      event.stopPropagation();
    } else {
      const { firstName, lastName, email, password } = registerValues;

      const registerBody: RegisterBodyModel = {
        firstName,
        lastName,
        email,
        password,
      };

      dispatch(register(registerBody));

      navigate("/feed");
    }

    setValidated(true);
  };

  const handleChange = useCallback(
    (e: any) => {
      setRegisterValues({ ...registerValues, [e.target.name]: e.target.value });
    },
    [registerValues]
  );

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name="firstName"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            name="lastName"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="8">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder="Email"
              required
              name="email"
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please type your email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Confirm Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Confirm Password"
              name="confirmPassword"
              required
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please confirm your password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
      </Row>

      <Button type="submit">Sign Up</Button>
    </Form>
  );
};

export default RegisterForm;
