import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarx() {
    return(
        <div>
            <Navbar style={{"background" : "#fefae0"}}>
            <Container>
            <Navbar.Brand href="#home"><strong>Hotel x</strong></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav className='mx-5'><strong>Welcome user</strong></Nav>
            </Nav>
            </Container>
            </Navbar>
        </div>
    )
}
export default Navbarx;