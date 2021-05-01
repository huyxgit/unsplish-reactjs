import React from "react";
import "./SearchBar.css";

import {
  Navbar,
  Nav,
  Form,
  Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class SearchBar extends React.Component {
  state = { term: "toronto island" };

  onInputChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
        <div className="nav">
          <Container className="h-100">
            <Navbar bg="dar" variant="light" fixed="top" className="custom-nav">
              <Navbar.Brand href="/">UNSPLISH</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="https://unsplash.com/@huyz" target="_blank">My Unsplash</Nav.Link>
              </Nav>
              <Form inline onSubmit={this.onFormSubmit}>
                <input
                  type="text"
                  placeholder="e.g: toronto island"
                  className="custom-input"
                  onChange={this.onInputChange}
                  value={this.state.term}
                />
              </Form>
            </Navbar>
          </Container>
        </div>
    );
  }
}

export default SearchBar;
