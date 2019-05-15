import React from 'react'
import {ListGroup, ListGroupItem, ListGroupItemText} from 'reactstrap'

const ShowTrip = (props) => {
    return (
    <ListGroup>
        { props.trips.map(trip => 
        <ListGroupItem key={trip._id} id={trip._id}>
            <ListGroupItemText>
            {trip.name}
            </ListGroupItemText>
        </ListGroupItem>
        )}
        

    </ListGroup>
    )
}

export default ShowTrip