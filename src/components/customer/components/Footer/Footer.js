import Nav from 'react-bootstrap/Nav';

import "./footer.css"



function Footer() {
    return(
        <div className='footer'>
            <Nav className="me-auto">
                <Nav.Link >Home</Nav.Link>
                <Nav.Link >About</Nav.Link>
                <Nav.Link >Services</Nav.Link>
                <Nav.Link >Team</Nav.Link>
                <Nav.Link >Contact</Nav.Link>
                <Nav.Link >| hotelx © 2022 - 2023 All rights reserved</Nav.Link>
            </Nav>
        </div>
    )
}
export default Footer;