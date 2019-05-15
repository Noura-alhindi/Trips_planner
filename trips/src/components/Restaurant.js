import React, { Component } from 'react'
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
// import './App.css' ;
import './component.css' ;


export default class Restaurant extends Component {
  render() {
    return (
      <div className="container">
      <div>
        <CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title></Card.Title>
      { <Card.Text>
       {/* <h1>{this.props.venues.restaurants.restaurant.name}</h1> */}
       description
      </Card.Text> }
    </Card.Body>
    <Card.Footer>
     <button className="btn btn-outline-info my-2 my-sm-1" type="submit">Add</button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Restaurant Name</Card.Title>
      <Card.Text>
      description
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <button className="btn btn-outline-info my-2 my-sm-1" type="submit">Add</button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
      description
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <button className="btn btn-outline-info  my-2 my-sm-1" type="submit">Add</button>
    </Card.Footer>
  </Card>
</CardDeck>
      </div>
      </div>
    )
  }
}
