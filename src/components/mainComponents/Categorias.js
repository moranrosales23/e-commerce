import { useContext, useEffect, useState } from "react";
import { ListGroup, Badge } from "react-bootstrap";
import { GeneralProvider } from "../../GeneralProvider";
import "./Categorias.css";
function CategoriaComponent() {
  const [categories, setCategories] = useState([]);
  const { setcategory } = useContext(GeneralProvider);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/products/categories`)
      .then((response) => response.json())
      .then((categories) => setCategories(categories));
  }, []);

  return (
    <ListGroup as="ol" numbered className="component-hidden">
      <h2>Categorías</h2>
      {categories.map((item, index) => (
        <ListGroup.Item
          key={index}
          action
          className="d-flex justify-content-between align-items-start"
          onClick={() => setcategory(item)}
        >
          {item}{" "}
          <Badge pill bg="secondary">
            100
          </Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default CategoriaComponent;
