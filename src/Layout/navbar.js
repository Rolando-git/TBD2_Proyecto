import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"

const NavBarExample = () => {
    return (
        <>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/">Proyecto 1</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as = {Link} to="/">Home</Nav.Link>

                            <NavDropdown title="Solicitante" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/CrearU" >Crear</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/BuscarU" >Buscar</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Empresa" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/CrearE" >Crear</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/BuscarE" >Buscar</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section>
                <Outlet></Outlet>
            </section>
        </>
    )
}

export default NavBarExample