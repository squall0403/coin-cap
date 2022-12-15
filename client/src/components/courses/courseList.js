import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { apiURL } from '../ultis/constants'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CourseList = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get(`${apiURL}/course`)
        setCourses(response.data);
        return;
      } catch (error) {
        console.log(error);
      }
    }
    getCourses()
  }, [courses.length])

  const CourseCard = () => {
    return courses.map((course) => {
      return (
        <Col key={course.course_id}>
          <Card style={{ width: '18rem', marginTop: '20px' }} >
            <Card.Img variant="top" src={course.course_image} />
            <Card.Body>
              <Card.Title style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>{course.course_name}</Card.Title>
              <Card.Text>
                <span className='card-flex'>
                  <span className="material-symbols-outlined">
                    book
                  </span>{course.course_category}</span>
                <span className='card-flex'>
                  <span className="material-symbols-outlined">
                    nest_true_radiant
                  </span>{course.course_level}
                </span>
              </Card.Text>
              <Card.Link href={`/course/view/${course.course_id}`}>Go to course</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      )
    })
  }

  return (
    <Container fluid="md">
      <Row>
        <CourseCard />
      </Row>
    </Container>
  )

}

export default CourseList