import React, { useState, useCallback } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { isUserLoggedIn } from "./AuthSlice";
import homeImage from "../../assets/home.jpg";
import logoImage from "../../assets/logo.jpg";
import { Redirect } from "react-router";
import { validateEmail, validatePassword } from "../../util/Validations";
import { loginAction, registerAction } from "../../app/actions";

export function AuthPage() {
  const loginStatus = useSelector(isUserLoggedIn);
  const [showLogin, setShowLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("user");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const loginClicked = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(loginAction({ email, password }));
    },
    [dispatch, email, password]
  );

  const registerClicked = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(registerAction({ email, password, name, phone, role, address }));
    },
    [dispatch, email, password, name, phone, role, address]
  );

  const loginFormCard = () => {
    return (
      <Card.Body>
        <Form style={{ width: "100%" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {!isEmailValid ? (
              <p style={{ color: "red", fontSize: "0.8rem" }}>Invalid Email</p>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {!isPasswordValid ? (
              <p style={{ color: "red", fontSize: "0.8rem" }}>
                Invalid Password
              </p>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3">
            <Button
              variant="info"
              type="submit"
              style={{ alignSelf: "center" }}
              onClick={(e) => {
                e.preventDefault();
                setIsEmailValid(validateEmail(email));
                setIsPasswordValid(validatePassword(password));
                if (!validateEmail(email) || !validatePassword(password)) {
                  return;
                }
                loginClicked(e);
              }}
            >
              Login
            </Button>
          </Form.Group>

          <Form.Group className="mb-3">
            <Button
              variant="secondary"
              type="submit"
              style={{ alignSelf: "center" }}
              onClick={(e) => {
                e.preventDefault();
                setEmail("");
                setPassword("");
                setShowLogin(false);
              }}
            >
              Go to Register
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    );
  };

  const registerFormCard = () => {
    return (
      <Card.Body>
        <Form
          style={{ width: "100%" }}
          onSubmit={(e) => {
            e.preventDefault();
            setIsEmailValid(validateEmail(email));
            setIsPasswordValid(validatePassword(password));
            if (!validateEmail(email) || !validatePassword(password)) {
              return;
            }
            registerClicked(e);
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              value={name}
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              required
              type="phone"
              value={phone}
              placeholder="Enter Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type="text"
              value={address}
              placeholder="Enter Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRole">
            <Form.Label>Role</Form.Label>
            <Form.Select
              size="sm"
              onChange={(e) => setRole(e.target.value)}
              value={role}
            >
              <option value="user">User</option>
              <option value="owner">Car Owner</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {!isEmailValid ? (
              <p style={{ color: "red", fontSize: "0.8rem" }}>Invalid Email</p>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!isPasswordValid ? (
              <p style={{ color: "red", fontSize: "0.8rem" }}>
                Invalid Password
              </p>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3">
            <Button
              variant="info"
              type="submit"
              style={{ alignSelf: "center" }}
            >
              Register
            </Button>
          </Form.Group>

          <Form.Group className="mb-3">
            <Button
              variant="secondary"
              style={{ alignSelf: "center" }}
              onClick={(e) => {
                e.preventDefault();
                setShowLogin(true);
              }}
            >
              Go to Login
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    );
  };
  return (
    <>
      {loginStatus ? (
        <Redirect to="/home" />
      ) : (
        <Container
          fluid
          style={{
            backgroundImage: `url(${homeImage})`,
            height: "100vh",
            backgroundSize: "100vw 100vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card
            style={{
              width: "30vw",
              height: showLogin ? "50%" : "90%",
              alignSelf: "center",
              opacity: 0.9,
            }}
          >
            <Card.Img
              variant="top"
              src={logoImage}
              style={{
                width: "5vw",
                height: "10vh",
                alignSelf: "center",
              }}
            />
            {showLogin ? loginFormCard() : registerFormCard()}
          </Card>
        </Container>
      )}
    </>
  );
}
