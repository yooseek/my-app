import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderList = styled.div`
  border: 1px solid black;
  height: 200px;
  background-color: ${(props) => props.backgroundColor};
`;
const StyleHeadLink = styled(Link)`
  color: red;
`;

const Header = () => {
  return (
    <div>
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                홈
              </Link>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      <HeaderList backgroundColor="white">
        <li>
          <StyleHeadLink to="/">홈</StyleHeadLink>
        </li>
        <li>
          <StyleHeadLink to="/login/10">로그인</StyleHeadLink>
        </li>
      </HeaderList>
    </div>
  );
};

export default Header;
