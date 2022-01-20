import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ModalComponent from "./Modal";

import { useContext, useEffect, useState } from "react";
import { GeneralProvider } from "../../GeneralProvider";

function ProductsComponents() {
  const { category } = useContext(GeneralProvider);
  const [product_modal, setproduct_modal] = useState({});
  const [products, setproducts] = useState([]);
  const [show, setShow] = useState(false);
  const [order, setorder] = useState("asc");

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setproduct_modal(product);
    setShow(true);
  };

  useEffect(() => {
    const url =
      category === ""
        ? `?sort=${order}`
        : `/category/${category}?sort=${order}`;
    fetch(`${process.env.REACT_APP_API}/products${url}`)
      .then((res) => res.json())
      .then((json) => setproducts(json));
  }, [category, order]);

  return (
    <>
      <Row>
        <Form.Select
          aria-label="order"
          onChange={(e) => setorder(e.target.value)}
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </Form.Select>
      </Row>
      <Row>
        {products.map((product, index) => (
          <Col lg={4} xl={4} sm={6} xs={6} md={4} key={index}>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ height: 180 }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>

                <Button variant="primary">
                  $229 <FontAwesomeIcon icon={faShoppingCart} />
                </Button>
                <Button
                  variant="outline-dark"
                  onClick={() => handleShow(product)}
                >
                  Detalles
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ModalComponent
        show={show}
        handleClose={handleClose}
        animation={false}
        product={product_modal}
      />
    </>
  );
}

export default ProductsComponents;
