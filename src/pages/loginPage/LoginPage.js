import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { logIn } from "../../redux/operations/authOperations";
import { Button, Form, Input } from "../../styles/FormStyled";
import { FormContainer } from "./LoginPageStyled";

const initialState = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [state, setState] = useState({ ...initialState });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(state))
    setState({...initialState });
  };

  return (
    <div className="container">
    <FormContainer>
      <h1>Login &#9990;</h1>

      <Form onSubmit={handleSubmit}>
        <label>
          Email
          <Input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <Input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </label>

        <Button type="submit">Login</Button>
      </Form>
    </FormContainer>
    </div>
  );
};

export default LoginPage;
