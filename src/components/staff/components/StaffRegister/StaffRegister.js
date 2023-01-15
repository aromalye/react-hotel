import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../../customer/components/Register/register.css"
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



function StaffRegister() {

    const navigate = useNavigate()

    const [data,setData] = useState({
        username:"",
        phone:"",
        email:"",
        iDType:"",
        gender:"",
        iDNumber:"",
        password:"",
        confirmPassword:"",
        address:"",
      })

    // for validation
    const[usernameErr, setNameErr] = useState({})
    const[idtypeErr, setIDTypeErr] = useState({})
    const[genderErr, setGenderErr] = useState({})



    const formValidation = () => {

        const usernameErr={}
        const idtypeErr={}
        const genderErr ={}


        let isValid = true

        if (!data.username){
            usernameErr.short_fname = '* username is a requires field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        if (!data.iDType){
            idtypeErr.short_fname = '* ID Type is a requires field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        if (!data.gender){
            genderErr.short_fname = '* Gender is a requires field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        setNameErr(usernameErr)
        setIDTypeErr(idtypeErr)
        setGenderErr(genderErr)

        return isValid
        

    }


    function submit(e) {
        e.preventDefault();
        const isValid = formValidation()
        if (isValid) {
            console.log(data)
            navigate("/staff/signin")
        }
    }

    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata)
    }
    return(
        <div>
            <Form className='form' onSubmit={(e)=>submit(e)} >
            <h5 className='text-center mb-5'>Staff Sign up</h5>
            <Row>
            <Col>
            <Form.Group value={data.email} onChange={(e) => handle(e) } className="mb-3" controlId="email">
                <Form.Label >Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group value={data.username} onChange={(e) => handle(e) } className="mb-3" controlId="username">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
            {Object.keys(usernameErr).map((key)=>{
            return <div style={{color:'red'}} >{usernameErr[key]}</div> })}
            </Form.Group>

            <Form.Group value={data.phone} onChange={(e) => handle(e) } className="mb-3" controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Phone number" />
            </Form.Group>

            <Form.Group value={data.password} onChange={(e) => handle(e) } className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group value={data.confirmPassword} onChange={(e) => handle(e) } className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder=" Confirm Password" />
            </Form.Group>

            </Col>

            <Col>

            <Form.Group className="mb-3" controlId="iDType">
                <Form.Select  value={data.iDType} onChange={(e) => handle(e) } className='my-3' aria-label="Default select example">
                <option>ID type</option>
                <option value="adhaar" >Adhaar </option>
                <option value="pan" >PAN </option>
                <option value="driving licence">Driving Licence</option>
                </Form.Select>
                {Object.keys(idtypeErr).map((key)=>{
            return <div style={{color:'red'}} >{idtypeErr[key]}</div> })}
            </Form.Group>

            <Form.Group value={data.iDNumber} onChange={(e) => handle(e) } className="mb-3" controlId="iDNumber">
                <Form.Label>ID Number</Form.Label>
                <Form.Control type="text" placeholder=" Enter ID number" />
            </Form.Group>

            <div value={data.gender} onChange={(e) => handle(e) } className='mb-3'>
                <Form.Check
                    type="radio"
                    label="Male"
                    value="male"
                    name="gender"
                    id="gender"
                /> 
                <Form.Check
                    type="radio"
                    label="Female"
                    value="female"
                    name="gender"
                    id="gender"
                /> 
                {Object.keys(genderErr).map((key)=>{
            return <div style={{color:'red'}} >{genderErr[key]}</div> })}
            </div>

            <Form.Group value={data.address} onChange={(e) => handle(e) } className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={3}  />
            </Form.Group>

            <p>Already have an Account? <Link to="/staff/signin"> Sign in</Link></p>


            </Col>
            </Row>


            <Button size="sm" variant="primary" type="submit">
                Sign up
            </Button>
            
            </Form>
        </div>
    )
}
export default StaffRegister;