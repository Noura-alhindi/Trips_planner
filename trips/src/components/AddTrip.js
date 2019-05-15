import React from 'react'
import {Input, Button} from 'reactstrap'

const AddTrip = (props) => {
    return (
        <div>
            Name:
        <Input name="name" onChange={props.change} />
        Days:
        <Input name="days" onChange={props.change} />
        <Button onClick={props.add} block>Add Trip</Button>

        </div>
    )
    }

export default AddTrip