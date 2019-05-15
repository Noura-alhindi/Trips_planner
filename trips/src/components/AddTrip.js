import React from 'react'
import {Input, Button} from 'reactstrap'

const AddTrip = (props) => {
    return (
        <div>
        <Input name="Tripename" onChange={props.change} />
        <Button onClick={props.add} block>Add Trip</Button>
        </div>
    )
    }

export default AddTrip