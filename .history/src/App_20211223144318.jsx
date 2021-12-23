import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import photo1 from "./1.jpg";
import photo2 from "./2.jpg";
import photo3 from "./3.jpg";
import photo4 from "./4.jpg";
import photo5 from "./5.jpg";

function App() {
  return (
    <p>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="py-4 display-8 text-dark"
      >
        <Container>
          <Navbar.Brand href="#home" className="w-20 text-bold">IMPROMPTU</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="ONA" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Item</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                Item
                </NavDropdown.Item>
                
              </NavDropdown>
              <NavDropdown title="ON" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Item</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                Item
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing">NOWOŚCI</Nav.Link>
              <Nav.Link href="#pricing">PROMOCJE</Nav.Link>
              <NavDropdown title="OUTLET" id="collasible-nav-dropdown">
                <div className="flex flex-column">
                  <div className="container">
                <NavDropdown.Item href="#action/3.1">Item</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                Item
                </NavDropdown.Item>
                </div>
                <div className="container">
                <NavDropdown.Item href="#action/3.1">Item</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                Item
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                Item
                </NavDropdown.Item>
                </div>
                </div>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">LOGOWANIE</Nav.Link>
              <Nav.Link href="#memes">MÓJ KOSZYK</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel variant="dark" indicators={false} pause="false">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5 className="display-6">IMPROMPTU</h5>
      <p className="text-danger">Christmas collection</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo2}
      alt="Second slide"
    />
    <Carousel.Caption>
    <h5 className="display-6">IMPROMPTU</h5>
      <p className="text-danger">Christmas collection</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo3}
      alt="Third slide"
    />
    <Carousel.Caption>
    <h5 className="display-6">IMPROMPTU</h5>
      <p className="text-danger">Christmas collection</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo4}
      alt="Third slide"
    />
    <Carousel.Caption>
    <h5 className="display-6">IMPROMPTU</h5>
      <p className="text-danger">Christmas collection</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo5}
      alt="Third slide"
    />
    <Carousel.Caption>
    <h5 className="display-6">IMPROMPTU</h5>
      <p className="text-danger">Christmas collection</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<Container className="mt-5">
<div className="mb-5">
  <img className="grid-item mx-2" src={photo1} alt="" />
  <img className="grid-item" src={photo1} alt="" />
  <img className="grid-item" src={photo1} alt="" />
</div>
<div className="mb-5">
<img className="grid-item col-lg-4 col-md-3 col-xs-3" src={photo2} alt="" />
  <img className="grid-item col-lg-4 col-md-3 col-xs-3" src={photo2} alt="" />
  <img className="grid-item col-lg-4 col-md-3 col-xs-3" src={photo2} alt="" />
</div>
<div className="mb-5">
<img className="grid-item col-lg-4 col-md-3 col-xs-3" src={photo3} alt="" />
  <img className="grid-item col-lg-4 col-md-3 col-xs-3" src={photo3} alt="" />
  <img className="grid-item col-lg-4 col-md-3 col-xs-3" src={photo3} alt="" />
</div>
</Container>

<Nav
  activeKey="/home" 
  className="mt-5 pt-5 bg-lightgray"
>
  <Row className="w-75 m-auto">
  <Col>
  <div className="display-7 mb-2">
    Pomoc i kontakt
  </div>
  <Nav.Item>
    <Nav.Link className="text-slim" eventKey="link-1">At vero eos et accusamus</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="text-slim" eventKey="link-2">At vero eos et accusamus</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="text-slim" eventKey="link-2">At vero eos et accusamus</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="text-slim" eventKey="link-2">At vero eos et accusamus</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="text-slim" eventKey="link-2">At vero eos et accusamus</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="text-slim" eventKey="link-2">At vero eos et accusamus</Nav.Link>
  </Nav.Item>
  </Col>
  <Col>
  <div className="display-7 mb-2">
    O Impromtu
  </div>
  <Nav.Item>
    <Nav.Link className="text-slim" eventKey="link-1">At vero eos et accusamus</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="text-slim" eventKey="link-2">At vero eos et accusamus</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Item>
    <Nav.Link className="text-slim" eventKey="link-2">At vero eos et accusamus</Nav.Link>
  </Nav.Item>
  </Nav.Item>
  </Col>
  <Col>
  <div className="display-7 mb-2">
    Nasze zalety
  </div>
  <Nav.Item>
    <Nav.Link className="text-slim" eventKey="link-1">At vero eos et accusamus</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="text-slim" eventKey="link-2">At vero eos et accusamus</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Item>
    <Nav.Link className="text-slim" eventKey="link-2">At vero eos et accusamus</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="text-slim" eventKey="link-2">At vero eos et accusamus</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="text-slim" eventKey="link-2">At vero eos et accusamus</Nav.Link>
  </Nav.Item>
  </Nav.Item>
  </Col>
  <Col>
  <div className="display-7 mb-2">
    Zostań naszym partnerem
  </div>
  <Nav.Item>
    <Nav.Link className="text-slim" eventKey="link-1">At vero eos et accusamus</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="text-slim" eventKey="link-2">At vero eos et accusamus</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Item>
    <Nav.Link className="text-slim" eventKey="link-2">At vero eos et accusamus</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="text-slim" eventKey="link-2">At vero eos et accusamus</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="text-slim" eventKey="link-2">At vero eos et accusamus</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="text-slim" eventKey="link-2">At vero eos et accusamus</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="text-slim" eventKey="link-2">At vero eos et accusamus</Nav.Link>
  </Nav.Item>
  </Nav.Item>
  </Col>
  </Row>
</Nav>


    </p>
  );
}

export default App;
