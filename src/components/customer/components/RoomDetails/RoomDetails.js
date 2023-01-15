import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function RoomDetails() {

    const navigate = useNavigate();

    const routChange = () => {
        let path = "/roomdetail"
        navigate(path)
    }

    return(
        <div className='m-3'>
            <hr></hr>
            <h3 className='text-center m-5'>Room Details</h3>
           <Row xs={1} md={4} className="g-4"  >
            
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                     <Card border="primary" style={{ width: '18rem' }}>
                        {/* <Card.Header>Header</Card.Header> */}
                        <Card.Body>
                            <Card.Title>Room Category</Card.Title>
                            <Card.Text>Room type</Card.Text>
                            <Card.Text>Room Status</Card.Text>
                            <Card.Text>Room price</Card.Text>
                            <Button variant="primary">Book Room</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
export default RoomDetails;