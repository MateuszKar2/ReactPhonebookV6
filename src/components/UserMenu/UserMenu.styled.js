import styled from 'styled-components';


export const HeaderWrapper = styled.div`
background-color: #007bff;
color: #fff;
padding: 0 30px;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
font-size: 15px;

button {
    background-color: #007bff; /* Zmieniamy kolor przycisku */
    color: #fff; /* Zmieniamy kolor tekstu przycisku */
    border: none;
    border-radius: 4px;
    padding: 8px 16px; /* Zwiększamy padding dla większego przycisku */
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.2s ease-in-out; /* Dodajemy płynne przejście */
  }

  button:hover {
    background-color: #0056b3; /* Zmieniamy kolor przycisku przy najechaniu */
  }
`;