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
import photo6 from "./6.jpg";
import photo7 from "./7.jpg";
import photo8 from "./8.jpg";
import photo9 from "./9.jpg";
import photo10 from "./10.jpg";
import photo11 from "./11.jpg";
import photo12 from "./12.jpg";
import photo13 from "./13.jpg";
import photo14 from "./14.jpg";
import photo15 from "./15.jpg";
import photo16 from "./16.jpg";
import photo17 from "./17.jpg";

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
          <Navbar.Brand className="text-bold px-2">IMPROMPTU.</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <NavDropdown title="ONA" id="collasible-nav-dropdown">
                <Row>
                  <Col xl={3} md={4}>
                    <NavDropdown.Item href="#action/3.1" className="text-bold">
                      Kategoria
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                  </Col>

                  <Col xl={3} md={4}>
                    <NavDropdown.Item href="#action/3.1" className="text-bold">
                      Kategoria
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.2">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                  </Col>

                  <Col xl={3} md={4}>
                    <NavDropdown.Item href="#action/3.1" className="text-bold">
                      Kategoria
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.2">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                  </Col>

                  <Col xl={3} md={4}>
                    <NavDropdown.Item href="#action/3.1" className="text-bold">
                      Kategoria
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.2">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                  </Col>
                </Row>
              </NavDropdown>
              <NavDropdown title="ON" id="collasible-nav-dropdown">
                <Row>
                  <Col>
                    <NavDropdown.Item href="#action/3.1" className="text-bold">
                      Kategoria
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.2">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                  </Col>

                  <Col>
                    <NavDropdown.Item href="#action/3.1" className="text-bold">
                      Kategoria
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.2">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                  </Col>

                  <Col>
                    <NavDropdown.Item href="#action/3.1" className="text-bold">
                      Kategoria
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.2">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                  </Col>

                  <Col>
                    <NavDropdown.Item href="#action/3.1" className="text-bold">
                      Kategoria
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.2">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                  </Col>
                </Row>
              </NavDropdown>
              <Nav.Link href="#pricing">NOWOŚCI</Nav.Link>
              <Nav.Link href="#pricing" className="text-danger">
                PROMOCJE
              </Nav.Link>
              <NavDropdown title="OUTLET" id="collasible-nav-dropdown">
                <Row>
                  <Col>
                    <NavDropdown.Item href="#action/3.1" className="text-bold">
                      Kategoria
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.2">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                  </Col>

                  <Col>
                    <NavDropdown.Item href="#action/3.1" className="text-bold">
                      Kategoria
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.2">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                  </Col>

                  <Col>
                    <NavDropdown.Item href="#action/3.1" className="text-bold">
                      Kategoria
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.2">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">przedmiot</NavDropdown.Item>
                  </Col>
                </Row>
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
          <img className="d-block w-100" src={photo1} alt="First slide" />
          <Carousel.Caption>
            <h5 className="display-6">IMPROMPTU</h5>
            <p className="text-danger">Christmas collection</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={photo2} alt="Second slide" />
          <Carousel.Caption>
            <h5 className="display-6">IMPROMPTU</h5>
            <p className="text-danger">Christmas collection</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={photo3} alt="Third slide" />
          <Carousel.Caption>
            <h5 className="display-6">IMPROMPTU</h5>
            <p className="text-danger">Christmas collection</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={photo4} alt="Third slide" />
          <Carousel.Caption>
            <h5 className="display-6">IMPROMPTU</h5>
            <p className="text-danger">Christmas collection</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={photo5} alt="Third slide" />
          <Carousel.Caption>
            <h5 className="display-6">IMPROMPTU</h5>
            <p className="text-danger">Christmas collection</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="mx-5 my-5 display-5">Nowości</div>

      <Container className="my-5">
        <Row>
          <Col lg={4} className="overflow-hidden p-0">
            <img className="square-photo" src={photo6} alt="" />
          </Col>
          <Col lg={4} className="overflow-hidden p-0">
            <img className="square-photo" src={photo7} alt="" />
          </Col>
          <Col lg={4} className="overflow-hidden p-0">
            <img className="square-photo" src={photo8} alt="" />
          </Col>
        </Row>
        <Row>
          <Col lg={4} className="overflow-hidden p-0">
            <img className="square-photo" src={photo9} alt="" />
          </Col>
          <Col lg={4} className="overflow-hidden p-0">
            <img className="square-photo" src={photo10} alt="" />
          </Col>
          <Col lg={4} className="overflow-hidden p-0">
            <img className="square-photo" src={photo11} alt="" />
          </Col>
        </Row>
        <Row>
          <Col lg={4} className="overflow-hidden p-0">
            <img className="square-photo" src={photo12} alt="" />
          </Col>
          <Col lg={4} className="overflow-hidden p-0">
            <img className="square-photo" src={photo13} alt="" />
          </Col>
          <Col lg={4} className="overflow-hidden p-0">
            <img className="square-photo" src={photo14} alt="" />
          </Col>
        </Row>
      </Container>

      <div className="mx-5 my-5 display-5">Popularne produkty</div>


      <Container className="my-5">

      <Row>
      <Col lg={4} className="overflow-hidden p-0">
            <img className="square-photo no-hover border-5" src={photo15} alt="" />
          </Col>
          <Col lg={4} className="overflow-hidden p-0">
            <img className="square-photo no-hover border-5" src={photo16} alt="" />
          </Col>
          <Col lg={4} className="overflow-hidden p-0">
            <img className="square-photo no-hover border-5" src={photo17} alt="" />
          </Col>

      </Row>

      </Container>

      <Nav activeKey="/home" className="mt-5 pt-5 border">
        <Row className="w-75 m-auto">
          <Col>
            <div className="display-7 mb-2">Pomoc i kontakt</div>
            <Nav.Item>
              <Nav.Link className="text-slim" eventKey="link-1">
                At vero eos et accusamus
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-slim" eventKey="link-2">
                At vero eos et accusamus
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-slim" eventKey="link-2">
                At vero eos et accusamus
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-slim" eventKey="link-2">
                At vero eos et accusamus
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-slim" eventKey="link-2">
                At vero eos et accusamus
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-slim" eventKey="link-2">
                At vero eos et accusamus
              </Nav.Link>
            </Nav.Item>
          </Col>
          <Col>
            <div className="display-7 mb-2">O Impromtu</div>
            <Nav.Item>
              <Nav.Link className="text-slim" eventKey="link-1">
                At vero eos et accusamus
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-slim" eventKey="link-2">
                At vero eos et accusamus
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-slim" eventKey="link-2">
                  At vero eos et accusamus
                </Nav.Link>
              </Nav.Item>
            </Nav.Item>
          </Col>
          <Col>
            <div className="display-7 mb-2">Nasze zalety</div>
            <Nav.Item>
              <Nav.Link className="text-slim" eventKey="link-1">
                At vero eos et accusamus
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-slim" eventKey="link-2">
                At vero eos et accusamus
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-slim" eventKey="link-2">
                  At vero eos et accusamus
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-slim" eventKey="link-2">
                  At vero eos et accusamus
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-slim" eventKey="link-2">
                  At vero eos et accusamus
                </Nav.Link>
              </Nav.Item>
            </Nav.Item>
          </Col>
          <Col>
            <div className="display-7 mb-2">Zostań naszym partnerem</div>
            <Nav.Item>
              <Nav.Link className="text-slim" eventKey="link-1">
                At vero eos et accusamus
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-slim" eventKey="link-2">
                At vero eos et accusamus
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-slim" eventKey="link-2">
                  At vero eos et accusamus
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-slim" eventKey="link-2">
                  At vero eos et accusamus
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-slim" eventKey="link-2">
                  At vero eos et accusamus
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-slim" eventKey="link-2">
                  At vero eos et accusamus
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-slim" eventKey="link-2">
                  At vero eos et accusamus
                </Nav.Link>
              </Nav.Item>
            </Nav.Item>
          </Col>
        </Row>
      </Nav>
    </p>
  );
}

export default App;
