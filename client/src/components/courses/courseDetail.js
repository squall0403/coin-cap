import axios from 'axios';
import { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiURL, contentURL } from '../ultis/constants'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';
import Badge from 'react-bootstrap/Badge';
import uuid from 'react-uuid';

const ContentDetail = () => {
  const [contents, setContent] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getContentByCourseId = async () => {
      try {
        const id = params.id.toString();
        const response = await axios.get(`${apiURL}/content/view/course/${id}`)
        setContent(response.data)
        return;
      } catch (error) {
        console.log(error);
        return;
      }
    }
    getContentByCourseId();
  }, [params.id])

  return contents.map((content) => {
    let tags = content.content_tag.split(',')
    return (
      <Fragment key={uuid()}>
        <span>{tags.map((tag) => {
          return (
            <Badge bg="info" key={uuid()}>
              {tag}
            </Badge>
          )
        })}</span>

        <p>{content.content_body}</p>
      </Fragment>
    )
  }
  )
}

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
          <Col>
            <h1>{course.course_name}</h1>
            <p>Category: {course.course_category}</p>
            <p>Level: {course.course_level}</p>
          </Col>
          <Col>
            <p>{course.course_description}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ width: '100%', height: 'auto' }} className='Scorm_iframe'>
              <Ratio aspectRatio="16x9">
                <iframe src={contentURL + course.course_content_url} title={course.course_name}></iframe>
              </Ratio>
            </div>
          </Col>
        </Row>
        <Row>
          <ContentDetail></ContentDetail>
        </Row>
      </Container>
    </Fragment >
  )
}

export default CourseDetail