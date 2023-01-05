import axios from 'axios';
import { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiURL, contentURL } from '../ultis/constants'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';
import uuid from 'react-uuid';
import SideBar from '../ultis/sidebar';
import Space from '../ultis/space';

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
    return (
      <Fragment key={uuid()}>
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
      <Container className='course_detail'>
        <Row>
          <h1>{course.course_name}</h1>
          <p>Category: {course.course_category}</p>
          <p>Level: {course.course_level}</p>
          <hr></hr>
          <p>Description</p>
          <p>{course.course_description}</p>
        </Row>
        <Space></Space>
        <Row>
          <Col>
            <div style={{ width: '100%', height: 'auto' }} className='Scorm_iframe'>
              <Ratio aspectRatio="16x9">
                <embed src={contentURL + course.course_content_url} title={course.course_name}></embed>
              </Ratio>
            </div>
          </Col>
        </Row>
        <Space></Space>
        <Row>
          <ContentDetail></ContentDetail>
        </Row>
      </Container>
      <div className='side_bar_right'>
        <SideBar></SideBar>
      </div>
    </Fragment >
  )
}

export default CourseDetail