import React from 'react'
import {ListGroup, ListGroupItem, ListGroupItemText} from 'reactstrap'

const ShowTrip = (props) => {
    return (
    <ListGroup>
        { props.trips.map(trip => 
        <ListGroupItem key={trip._id} id={trip._id}>
            <ListGroupItemText>
            <h5> Trips Name </h5>
            {trip.name}
            </ListGroupItemText>
            <h5> Trips Days </h5>
            {trip.days}
        </ListGroupItem>
        )}
        

    </ListGroup>
    )
}

export default ShowTrip