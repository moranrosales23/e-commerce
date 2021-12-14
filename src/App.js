import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import { Navbar, Container, Nav, Row, Col, InputGroup, FormControl, ListGroup, Carousel, Card, Button } from 'react-bootstrap';
import CarouselView from './components/CarouselView';
import Layout from './components/Layout';

import images from './mock/carouselMock'

// HeaderForm -> Pascal Case
// header_form -> snake Case
// headerForm -> cammel case

function App() {

  // const lists = ["https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg", "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg"]
  return (
    <>
      <Layout>
        <CarouselView images={images} />
      </Layout>

      {/* <Container>
        <Row>
          <Col lg={3}>
            <Row>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Buscar Camisetas"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              </InputGroup>
            </Row>
            <Row>
              <ListGroup as="ul">
                <ListGroup.Item as="li" active>
                  Cras justo odio
                </ListGroup.Item>
                <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item as="li" disabled>
                  Morbi leo risus
                </ListGroup.Item>
                <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
            </Row>
          </Col>
          <Col lg={9}>
            <Row>
              <CarouselView images=[] />
            </Row>
            <Row>
              {lists.map((element) => (
                <CardTemplate imageUrl={element} />
              ))}
              
            </Row>
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

export default App;
