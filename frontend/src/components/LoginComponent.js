import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

const LoginComponent = () => {
  const { loginThunk } = useContext(AuthContext);
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  const { username, password } = formState;

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <div style={{ textAlign: "center", width: "100%", margin: "0 auto" }}>
      <div style={{ textAlign: "left", width: "30%", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", color: "red" }}>Login</h1>

        <Form>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="text"
              value={username}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              value={password}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              loginThunk(formState.username, formState.password).then(() => {
                history.push("/home");
              });
            }}
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginComponent;
