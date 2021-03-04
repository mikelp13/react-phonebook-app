import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { register } from "../../redux/operations/authOperations";
import { Button, Form, Input } from "../../styles/FormStyled";
import { FormContainer } from "./RegisterPageStyled";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const RegisterPage = () => {
  const [state, setState] = useState({ ...initialState });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(state))
    setState({ ...initialState });
  };

  return (
    <div className="container">
    <FormContainer>
      <h1>Register Here</h1>

      <Form onSubmit={handleSubmit}>
        <p>Create your account. It's free and only takes a minute &#128521;</p>
        <label>
          Name
          <Input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </label>

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

        <Button type="submit">Register Now</Button>
      </Form>
    </FormContainer>
    </div>
  );
};

export default RegisterPage;
