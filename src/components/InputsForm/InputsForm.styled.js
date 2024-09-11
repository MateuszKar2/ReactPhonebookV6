
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
max-width: 300px;
margin: 0 auto;

label {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

button {
  padding: 12px 24px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
}
`;


export const RegisterLink = styled(Link)`
color: #007bff;
text-decoration: none;
font-size: 14px;

&:hover {
  text-decoration: underline;
}
`;

export const TextWrapper = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
gap: 5px;
font-size: 14px;
color: #666;
`;