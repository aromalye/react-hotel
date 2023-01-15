import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./register.css"
import { useState } from 'react';
import axios from 'axios';
import {Controller, useForm } from "react-hook-form";
import { FormControl } from 'react-bootstrap';
import BaseSelect from "react-select";
import FixRequiredSelect from '../../../Forms/FixRequiredSelect';
// import IDSelectForm from '../../../Forms/IDSelectForm';



function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data,setData] = useState({
        username:"",
        hello:"",
        phone:"",
        email:"",
        iDType:"",
        gender:"",
        iDNumber:"",
        password:"",
        confirmPassword:"",
        address:"",
      })
    
      const options = [
        { value: 1, label: "1 - One" },
        { value: 2, label: "2 - Two" },
        { value: 3, label: "3 - Three" }
      ];
      
      const Select = props => (
        <FixRequiredSelect 
          {...props}
          SelectComponent={BaseSelect}
          options={options}
        />
      );

    function submit() {
        // e.preventDefault();
        console.log("data", data)
        try {
            const url = 'https://dummy.restapiexample.com/api/v1/create';
            const config = { 'content-type': 'application/json' };
            const response = axios.post(url, data, config);
            console.log("respose data", response.data);
        } catch (error) {
            console.error(error);
        }
    }

    function  handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata)
        
    }



    return(
        <div>
            <Form className='form' onSubmit={handleSubmit(submit)} >
            <h5 className='text-center mb-5'>Customer Sign up</h5>
            <Row>
            <Col>
            <Form.Group value={data.email} onChange={(e) => handle(e) } className="mb-3" controlId="email">
                <Form.Label >Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true})} />
            </Form.Group>
            {errors.email && <p className="text-danger">* Please check the email</p>}

            <Form.Group value={data.username} onChange={(e) => handle(e) } className="mb-3" controlId="username">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter username" {...register("username", { required: true})} />
            </Form.Group>
            {errors.username && <p className="text-danger">* Please check the username</p>}

            <Form.Group value={data.password} onChange={(e) => handle(e) } className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" {...register("password", { required: true})} />
            </Form.Group>
            {errors.password && <p className="text-danger">* Please check the password</p>}

            <Form.Group value={data.confirmPassword} onChange={(e) => handle(e) } className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder=" Confirm Password" {...register("confirmPassword", { required: true})} />
            </Form.Group>
            {errors.confirmPassword && <p className="text-danger">* Please check the password</p>}

            </Col>

            <Col>

            <Form.Group value={data.phone} onChange={(e) => handle(e) } className="mb-3" controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Phone number" {...register("phone", { required: true})} />
            </Form.Group>
            {errors.phone && <p className="text-danger">* Please check the Phone number</p>}

            <div className="form-group">
                Select
                <Select options={options} required value={data.hello} onChange={(e) => handle(e) }  />
              </div>
              <div className="form-group">
                Select
                <Select options={options} />
            </div>
            
            <Form.Select className='my-3' aria-label="Default select example">
            <Select options={options} required />
            
            </Form.Select>
            {errors.iDType && <p className="text-danger">* Please check the iDType</p>}

            <Form.Group value={data.iDNumber} onChange={(e) => handle(e) } className="mb-3" controlId="iDNumber">
                <Form.Label>ID Number</Form.Label>
                <Form.Control type="text" placeholder=" Enter ID number" {...register("iDNumber", { required: true})} />
            </Form.Group>
            {errors.iDNumber && <p className="text-danger">* Please check the iDNumber</p>}

            <Form.Group  value={data.gender} onChange={(e) => handle(e) } {...register("gender", { required: true})} className='mb-3' >
            {/* <Form.Control {...register("gender", { required: true})} /> */}
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
            </Form.Group>
            {errors.gender && <p className="text-danger">* Please check the gender</p>}

            <Form.Group value={data.address} onChange={(e) => handle(e) } className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={3} {...register("address", { required: true})} />
            </Form.Group>
            {errors.address && <p className="text-danger">* Please check the address</p>}

            </Col>
            </Row>
            <Button size="sm" variant="primary" type="submit">
                Sign up
            </Button>
            
            </Form>
        </div>
    )
}
export default Register;