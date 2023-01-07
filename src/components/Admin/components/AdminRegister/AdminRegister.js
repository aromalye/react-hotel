import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../../customer/components/Register/register.css"


function AdminRegister() {

    const [data,setData] = useState({
        username:"",
        phone:"",
        email:"",
        password:"",
        confirmPassword:"",
      })

    function submit(e) {
        e.preventDefault();
        console.log(data)
    }

    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata)
    }


    return(<div>
        <Form className='form' onSubmit={(e)=>submit(e)} >
        <h5 className='text-center mb-5'>Admin Sign up</h5>
        <Row>
        <Col>

        <Form.Group value={data.username} onChange={(e) => handle(e) } className="mb-3" controlId="username">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group value={data.password} onChange={(e) => handle(e) } className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group value={data.password} onChange={(e) => handle(e) } className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder=" Confirm Password" />
        </Form.Group>

        </Col>

        <Col>

        <Form.Group value={data.email} onChange={(e) => handle(e) } className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group value={data.phone} onChange={(e) => handle(e) } className="mb-3" controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Enter Phone number" />
        </Form.Group>
        {/* 
        <Form.Select className='my-3' aria-label="Default select example">
        <option>ID type</option>
        <option value="1">Adhaar </option>
        <option value="2">PAN </option>
        <option value="3">Driving Licence</option>
        </Form.Select> */}

        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>ID Number</Form.Label>
            <Form.Control type="text" placeholder=" Enter ID number" />
        </Form.Group> */}

        {/* <div className='mb-3'>
            <Form.Check
                type="radio"
                label="Male"
                name="gender"
                id="disabled-custom-switch"
            /> 
            <Form.Check
                type="radio"
                label="Female"
                name="gender"
                id="disabled-custom-switch"
            /> 
        </div> */}

        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" rows={3}  />
        </Form.Group> */}

        </Col>
        </Row>
        <Button size="sm" variant="primary" type="submit">
            Sign up
        </Button>
        
        </Form>
    </div>)
}
export default AdminRegister;