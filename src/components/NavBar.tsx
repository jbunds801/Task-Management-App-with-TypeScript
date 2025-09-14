import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from "react-bootstrap";

const NavBar: React.FC = () => {

    return (
        <>
            <Navbar className="navbar bg-info text-dark">
                <Container className='width-100 container-fluid '>

                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/tasks">Tasks</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;

