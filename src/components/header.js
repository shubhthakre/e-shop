import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Header = (props) => {
  const { search, setSearch } = props;
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Veggy</Navbar.Brand>
          <Nav className="me-auto">
            <Form className="d-flex" style={{ marginLeft: "37em" }}>
              <FormControl
                style={{ borderColor: "#16A085" }}
                type="search"
                value={search}
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={(e) => {
                  setSearch(e.target.value.toLowerCase());
                }}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
