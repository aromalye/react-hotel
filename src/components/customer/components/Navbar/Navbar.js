import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

function Navbarx() {

    const navigate = useNavigate();

    const routChange = () => {
        let path = "/"
        navigate(path)
    }


    return(
        <div>
            <Navbar style={{"background" : "#fefae0"}}>
            <Container>
            <Navbar.Brand><strong>Hotel x</strong></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link onClick={routChange} >Home</Nav.Link>
                <Nav.Link href="#home">register</Nav.Link>
                <Nav.Link href="#features">logout</Nav.Link>
                <Nav className='mx-5'><strong>Welcome user</strong></Nav>
            </Nav>
            </Container>
            </Navbar>
        </div>
    )
}
export default Navbarx;