import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLessons, setSelectedLesson } from '../../slices/lessonSlice';
import API from '../../utils/API';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

import './lessonList.css';

const LessonsList = (props) => {
  const lessons = useSelector((state) => state.lessons.lessons);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const lessonsResponse = await API.get(`/lessons`);
      dispatch(setLessons(lessonsResponse.data));
    }
    fetchData();
  }, [dispatch]);

  const handleClick = (e, lesson) => {
    dispatch(setSelectedLesson(lesson));
    return navigate('/details');
  };

  const LessonsTable = () => {
    return (
      <Table striped hover bordered variant="dark" className="listTable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Tags</th>
            <th>URL</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson) => (
            <tr>
              <td>{lesson.title}</td>
              <td>{lesson.author}</td>
              <td>{lesson.manualTags}</td>
              <td>
                <a href={lesson.url} target="_blank" rel="noreferrer noopener">
                  {lesson.url}
                </a>
              </td>
              <td>
                <Button onClick={(e) => handleClick(e, lesson)}>Details</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  return (
    <Container className="mainContainer">
      <Row>
        <LessonsTable />
      </Row>
    </Container>
  );
};

export default LessonsList;
