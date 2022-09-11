import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const HomeComponent = () => {
  const { data } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:8000/users/user", {
        headers: {
          Authorization: `Token ${data.token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      });
  }, []);

  console.log("Ss", user);
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "red" }}>Welcome {user ? user.username : " "}</h1>

      <Button
        variant="primary"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          history.push("/login");
          window.location.reload(false);
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default HomeComponent;
