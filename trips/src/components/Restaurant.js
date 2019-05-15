import React, { Component } from 'react'
// import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// import './App.css' ;
import './component.css' ;


export default class Restaurant extends Component {
  render() {
    console.log("prop",this.props.venue.restaurant);
    
    return (

      <container >
      <div class="card">
      <div class="flip-card-inner">

<div class="flip-card-front">
                 <div class="image">
                     <img src={this.props.venue.restaurant.thumb} align="middle" width="355px" height="200"/>
                    {/* {this.props.events.is_free === true ? <h6 className="test">Free</h6> : <h6></h6>}  */}
                 </div>
    
                 {/* <h5 className="nameE">{this.props.events.name.text.length <30 ? `${this.props.events.name.text}`: `${this.props.events.name.text.substring(0,40)}...`}</h5> */}
                 <h6 className="resname">{this.props.venue.restaurant.name}</h6>
                 <h6 className="cuisines">cuisines: {this.props.venue.restaurant.cuisines}</h6>
                 <h6 className="rating">{this.props.venue.restaurant.user_rating.aggregate_rating}</h6>
                 <button className="button">Add</button>
                 
                 
                
            </div>
            </div>
            </div>
            </container>
  
            )
        }
    }



//       <container>
//       <div>
//       <Card className="Card" style={{ width: '300px' }}>
//       <img className="imgres" variant="top" src={this.props.venue.restaurant.thumb} width="300px" height="200"/>
//   {/* <Card.Img variant="top" src="{this.props.venue.restaurant.thumb}" /> */}
//   <Card.Body>
    
//     <Card.Title>{this.props.venue.restaurant.name}</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>
// </div>
// </container>


//       <div className="container">
//       <div>
//         <CardDeck>
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>  <img src={this.props.venue.restaurant.thumb} width="345px" height="200"/></Card.Title>
//       { <Card.Text>
//       {this.props.venue.restaurant.name}
//       
//        description
//       </Card.Text> }
//     </Card.Body>
//     <Card.Footer>
//      <button className="btn btn-outline-info my-2 my-sm-1" type="submit">Add</button>
//     </Card.Footer>
//   </Card>
// </CardDeck>
//       </div>
//       </div>
//   