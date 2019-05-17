import React from 'react'
import {Input, Button, InputGroup , Card} from 'reactstrap'
import './trip.css'

const AddTrip = (props) => {
    return (
        <div className="Addtrip">
    {/* <Card body outline color="info" width="100%"> */}
    <InputGroup size="sm">
        <h5> Trip Name:</h5>
        <Input name="name" onChange={props.change} />
        <h5>Days:</h5>
        <Input name="days" onChange={props.change} />
        <Button onClick={props.add} outline color="info" width='50px' >Add Trip</Button>
        </InputGroup>
        
    {/* </Card> */}

        </div>
    )
    }

export default AddTrip