import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './header.css';

const Header = () => {
  return (
    <Container fluid className="headerContainer">
      <Row className="headerRow">
        <Col>
          <h1>Welcome to our Library!</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
