import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { GeneralProvider } from "../GeneralProvider";

function HeaderFunction() {
  const theme = useContext(GeneralProvider);

  function changeTheme() {
    const newtheme = theme.theme === "dark" ? "light" : "dark";
    theme.settheme({ theme: newtheme });
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg={theme.theme} variant={theme.theme}>
      <Container>
        <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            <Nav.Link href="#deets">
              {" "}
              <FontAwesomeIcon icon={faShoppingCart} /> Canasta
            </Nav.Link>
            <Button
              variant={theme.theme}
              className="border border-light"
              onClick={changeTheme}
            >
              {theme.theme === "dark" ? "light" : "dark"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default HeaderFunction;
