import React,{forwardRef } from "react";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import "./dateroomfilter.css"
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { BsSearch } from "react-icons/fa";



function DateRoomFilter() {

    const [startDate, setDate] = React.useState(new Date)
    const [rangeStart, setRangeStart] = React.useState(new Date)
    const defaultEndDate = new Date()
    defaultEndDate.setDate(defaultEndDate.getDate() + 7)
    const [rangeEnd, setRangeEnd] = React.useState(defaultEndDate)
    const today = new Date()

    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="example-custom-input" onClick={onClick} ref={ref}>
          {value}
        </button>
      ));

    const selectDateHandler = (d) => {
        setDate(d)
      }
    
      const selectStartDate = (d) => {
        setRangeStart(d)
        // console.log(d)
      }
    
      const selectEndDate = d => {
        setRangeEnd(d)
      }

    return(
        <div className="searchcontainer">
            <h3>Over 157,000 hotels and homes across 35 countries</h3>
            <Row>
                <Col sm>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                </Form>
                </Col>
                <Col sm>
                    <div className="datepick">
                    <DatePicker
                        selectsStart
                        selected={rangeStart} 
                        minDate={today}
                        startDate={rangeStart} 
                        endDate={rangeEnd}
                        onChange={selectStartDate} 
                        customInput={<ExampleCustomInput />}/>

                    <DatePicker
                        selectsEnd
                        selected={rangeEnd} 
                        startDate={rangeStart} 
                        endDate={rangeEnd}
                        onChange={selectEndDate} 
                        customInput={<ExampleCustomInput />}/>

                    </div>
                </Col>
                <Col sm>
                    <Button variant="outline-danger">1 Room | 2 Guests</Button>
                </Col>
                {/* <p>{BsSearch} </p> */}
                {/* <Col sm>
                    <Button variant="outline-danger">Search</Button>
                </Col> */}
            </Row>
           
        </div>
    )
}
export default DateRoomFilter;