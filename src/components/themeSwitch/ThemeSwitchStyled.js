import styled from "styled-components";

export const Label = styled.label`

@media (max-width: 767px) {
    position: absolute;
    top: 30px;
    left: 30px;
  }

  position: relative;
  display: inline-block;
  min-width: 50px;
  height: 24px;

  input {
    opacity: 1;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 400ms;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 400ms;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: ${(props) => props.theme.colors.primary};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px ${(props) => props.theme.colors.primary};
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }
`;
