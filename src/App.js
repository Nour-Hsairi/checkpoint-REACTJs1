import React from "react";
import "./App.css";
import { Navbar, Nav, Form, FormControl, Button, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Connect</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Anything..." className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
      <div className="box">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Example@email.com" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="Number,Street..." />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Button variant="primary" size="lg" block>
        <img src="https://iconape.com/wp-content/files/yd/117914/svg/Facebook_f_logo__2019_.svg" 
        alt="facebook" />Sign up with Facebook
  </Button>
  <Button variant="secondary" size="lg" block>
  <img src="https://www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-Squircle-Dark.png" 
        alt="linkedin" />
    Sign up with Linkedin
  </Button>
      </div>
    </div>
  );
}

export default App;
