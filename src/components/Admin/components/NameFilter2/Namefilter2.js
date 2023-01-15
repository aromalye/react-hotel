
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import "./filter.css"
import ListGroup from 'react-bootstrap/ListGroup';
import {UserData} from '../../../../Data/User';
import Table from 'react-bootstrap/Table';
import { set } from 'react-hook-form';



function Filter() {
    const [username, setUsername] = useState("");
    const [lastname, setLastname] = useState("");
    const [filtered, setFiltered] = useState("");
    const query = 0

    const submit = (e) => {
        e.preventDefault();
        // console.log(username, lastname,UserData, "dddd")
        if(lastname) {
            console.log(lastname)
            const x = UserData.filter((user) => user.last_name.toLowerCase().includes(lastname))
            setFiltered(x)
            console.log(filtered)
        }
        else{
            console.log("done")
        }
    }
    
    return(
        <div>
            <form className='search' onSubmit={(e) => submit(e)}>
                <Form.Control aria-label="Small" placeholder='username' value={username} onChange={e => setUsername(e.target.value)} />
                <Form.Control aria-label="Small" placeholder='lastname' value={lastname} onChange={e => setLastname(e.target.value)} />
                <button type='submit' className='btn-sm btn btn-outline-primary'>Search</button>
                {/* <ListGroup>
                    {UserData.filter((user) => user.first_name.toLowerCase().includes(query)).map((user) => (
                        <ListGroup.Item key={user.id}>{user.first_name}</ListGroup.Item>
                ))}
                </ListGroup> */}
            </form>

            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>email</th>
                <th>action</th>
                </tr>
            </thead>
            <tbody>
                {/* {filtered.map((item) => ( */}
                <tr>
                    {/* <td>{item.id}</td> */}
                    {/* <td>{item.first_name}</td> */}
                    {/* <td>{item.last_name}</td> */}
                    {/* <td>{item.email}</td> */}
                    <td><button className='btn-sm btn btn-outline-success mx-3'>edit</button>
                    <button className='btn-sm btn btn-outline-danger'>delete</button></td>
                </tr>
                {/* ))}  */}
            </tbody>
            </Table>
        </div>
    )
}
export default Filter;