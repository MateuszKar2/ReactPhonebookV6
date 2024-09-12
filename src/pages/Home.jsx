import React from 'react';
import UserMenu from 'components/UserMenu/UserMenu';
import Phonebook from 'components/Phonebook/Phonebook';
import styled from 'styled-components';

const HomePageWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
min-height: 100vh;
width: 100%;
background-color: #f9f9f9;
`;

const Home = () => {
  return (
    <HomePageWrapper>
      <UserMenu />
      <Phonebook />
    </HomePageWrapper>
  );
};

export default Home;