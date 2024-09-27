import React from 'react';
import "./_HomeScreen.scss";
import { Container, Col, Row } from 'react-bootstrap';
import Video from '../video/Video.js';
import Catergoriesbar from '../catergoriesbar/Categories.js'

const HomeScreen = () => {
  return (
    <Container className='home'>
      <Catergoriesbar/>
      <Row>
        {
          [...Array(16)].map((_, index) => (
            <Col lg={3} md={4} key={index}>
              <Video />
            </Col>
          ))
        }
      </Row>
    </Container>
  );
}

export default HomeScreen;
