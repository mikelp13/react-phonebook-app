import styled from "styled-components";
import { Input } from "../../styles/FormStyled";

export const FilterWrapper = styled.div`
  margin: 0 0 30px ;
  padding: 5px 20px 10px;
  background-color: ${({theme})=> theme.colors.background};
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const FilterInput = styled(Input)`
  margin: 5px 0 0;
`;


