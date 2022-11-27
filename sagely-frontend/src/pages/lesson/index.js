import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './lesson.css';
import LessonCard from '../../components/lessonCard';
import { useSelector } from 'react-redux';

const LessonDetails = (props) => {
  const selectedLesson = useSelector((state) => state.lessons.selectedLesson);
  const navigate = useNavigate();

  function handleNavigateHome(lesson) {
    return navigate('/');
  }

  return (
    <Container className="main-container">
      <Row>
        <Col md={2}>
          <Button
            variant="outline-primary"
            onClick={() => handleNavigateHome()}
          >
            Back To List
          </Button>{' '}
        </Col>
      </Row>
      <Row>
        <LessonCard />
      </Row>
      <Row>
        <h4>Description</h4>
        <p>{selectedLesson.abstractNote}</p>
      </Row>
    </Container>
  );
};

export default LessonDetails;
