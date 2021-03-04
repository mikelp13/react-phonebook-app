import styled from "styled-components";

export const Form = styled.form`
  margin: 30px 0; 
  padding: 20px;
  border-radius: 5px;
  background-color:${({theme}) => theme.colors.background};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 5px 0 20px 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  outline-color:${({theme}) => theme.colors.main};

  
  &::placeholder {
    font-size: 14px;
    color: #d8d8d8;
  }
`;

export const Button = styled.button`
  width: 100%;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  background-color: ${({theme}) => theme.colors.main};

    &:hover {
    transition: all 250ms linear;
    background-color:${({theme}) => theme.colors.primary};
  }
`;
