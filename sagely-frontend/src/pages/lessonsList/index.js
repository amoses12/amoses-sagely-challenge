import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setLessons,
    setSelectedLesson
} from '../../slices/lessonSlice';
import API from '../../utils/API';
import { Container, Row, Col } from 'react-bootstrap';
import { Balance } from '../../components/balance';

import './lessonList.css';

const LessonsPage = (props) => {
  const lessons = useSelector(
    (state) => state.lesson.lessons
  );
  const selectedLesson = useSelector ((state) => state.lesson.selectedLesson)
const dispatch = useDispatch()

  async function getLessons() {
    const lessonsResponse = await API.get(`/lessons`);

    dispatch(setLessons(lessonsResponse.data));
   
  }

  return (
    <Container className='main-container'>
      <Row className='headerContainer'>
        <Col md={12}>
          <h1 className='lessons-header'>Check out our lessons!</h1>
        </Col>
      </Row>
      <Row>
      </Row>
      <Row>
     
      </Row>
    </Container>
  );
};

export default LessonsPage;
