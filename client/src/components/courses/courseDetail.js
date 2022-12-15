import axios from 'axios';
import { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiURL, contentURL } from '../ultis/constants'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';

const CourseDetail = () => {
  const [course, setCourse] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getCourseById = async () => {
      try {
        const id = params.id.toString();
        const response = await axios.get(`${apiURL}/course/view/${id}`)
        setCourse(response.data)
        return;
      } catch (error) {
        console.log(error);
        return;
      }
    }
    getCourseById();
  }, [params.id])
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>{course.course_name}</Col>
          <Col>{course.course_category}</Col>
          <Col>{course.course_level}</Col>
          <Col>{course.course_description}</Col>
        </Row>
        <div style={{ width: 660, height: 'auto' }}>
          <Ratio aspectRatio="16x9">
            <iframe width="560" height="315" src={contentURL + course.course_content_url} title={course.course_name}></iframe>
          </Ratio>
        </div>
      </Container>
    </Fragment>
  )
}

export default CourseDetail