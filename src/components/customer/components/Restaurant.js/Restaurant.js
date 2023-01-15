import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




function Restaurant() {
    return(
        <div className='m-3' >
            <hr></hr>
            <h3 className='text-center m-5'>Food Items</h3>
           <Row xs={1} md={4} className="g-4"  >
            
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                     <Card border="danger" style={{ width: '18rem' }}>
                        {/* <Card.Header>Header</Card.Header> */}
                        <Card.Body>
                            <Card.Title>Food Name</Card.Title>
                            <Card.Text>food description</Card.Text>
                            <Card.Text>food price</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
export default Restaurant;