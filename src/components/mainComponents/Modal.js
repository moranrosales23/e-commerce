import {
  Button,
  Row,
  Col,
  Modal,
  Container,
  Image,
  Badge,
  Tab,
  Tabs,
  ListGroup,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

function ModalComponent({ show, handleClose, animation, product }) {
  const iconStart = [];
  if (product.hasOwnProperty("rating")) {
    const rating = Math.floor(product.rating.rate);
    for (let i = 1; i <= 5; i++) {
      iconStart.push(
        <FontAwesomeIcon
          icon={faStar}
          key={i}
          color={i <= rating ? "blue" : "black"}
        />
      );
    }
  }

  return (
    <Modal show={show} onHide={handleClose} animation={animation}>
      <Modal.Header closeButton>
        <Modal.Title> {product.title} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={6}>
              <Image
                style={{ width: "100%" }}
                src={product.image}
                rounded
                className="border border-gray"
              />
            </Col>
            <Col md={6}>
              <div className="p-4">
                <h6> Precio: $ {product.price}</h6>
                <h6>
                  Calificacion: <br />
                  {iconStart.map((icon, index) => icon)}
                </h6>
                <Badge pill bg="warning">
                  {product.category}
                </Badge>
                <br />
                <h6 className="text-primary">
                  <FontAwesomeIcon icon={faHeart} /> Agregar A los deseos{" "}
                </h6>
              </div>
            </Col>

            <Col md={12}>
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="home" title="Home">
                  {product.description}
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  <ListGroup>
                    <ListGroup.Item>
                      Germán Escobar comentó hace dos días
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Esta camiseta está increible,la quiero!
                    </ListGroup.Item>
                  </ListGroup>
                  <InputGroup>
                    <FormControl as="textarea" aria-label="With textarea" />
                  </InputGroup>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
