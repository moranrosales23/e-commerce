import axios from 'axios';
import { useState } from 'react';
import {Col, Card, Button} from 'react-bootstrap';

function CardTemplate(props) {
  const imageUrl = props.imageUrl

  let [counter, setCounter] = useState({
    data: [{ name: "Leonel Oliveros" },{ name: "Felipe" }]
  }) //let counter = 0

  function handleClick() {
    setCounter(counter + 1)
  }

  function handleDelete() {
    // confirme si desea eliminar
    axios.delete(`https://fakestoreapi.com/products/${props.id}`)
    .then((res) => { console.log("response", res)})


    // renderizar de nuevo la pagina de inicio para verificar que aparezca
  }

  return (
    <Col lg={4}>
      <Card className="hidden" key={props.id}>
        <button onClick={handleDelete}>Eliminar</button>
        <Card.Img
          variant="top"
          src={imageUrl}
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <button onClick={handleClick}>Like</button>
          <Button variant="primary">Go somewhere</Button>
          {counter.data.map((e, i)=> <h1 key={i} >{e.name}</h1>)}
        </Card.Body>
      </Card>
    </Col>
  );

}


export default CardTemplate