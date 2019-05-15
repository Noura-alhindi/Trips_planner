import React, { Component } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Row, Button, Col, Alert} from 'reactstrap';
import { getToken, setToken, logout} from './services/auth';
import './App.css';
import ShowTrip from './components/ShowTrip';
import AddTrip from './components/AddTrip'
import {
  BrowserRouter as Router, Route, Link, withRouter, Redirect
} from 'react-router-dom'

import Home from './components/Home'
import UserHome from './components/UserHome'
import Nav from './components/Nav';
import Restaurant from './components/Restaurant';
import ControlledCarousel from './components/Slide' ;
import Login from './components/Login';
import { decode } from 'punycode';




let header = {
    headers :{
      "Content-Type" : "application/json",
      "Authorization" : `Bearer ${getToken()}`
    }
  }
  
class App extends Component {
    state = {
      trips : [],
      user : "",
      errorMsg : '',
      isAuthenticated : false,
      hasError : false,
      displayVenues : []
      
    }


    // componentDidMount=()=> {
  
    //   fetch("https://developers.zomato.com/api/v2.1/search?entity_type=city&q=restaurant",{
    //     headers:{
    //       "user-key" : "76984ab3dd3557f029fe03c716e88a2e"
    //     }
    //   })
    //   .then(res=> res.json())
    //   .then(r => {
    //     // console.log(r.restaurants[1].restaurant.name)
    //     // console.log(r.restaurants[1].restaurant.featured_image)
    //     // console.log(r.restaurants[1].restaurant.thumb)
    //     // console.log(r.restaurants[1].restaurant.cuisines)
    //     // console.log(r.restaurants[1].restaurant.user_rating.aggregate_rating)
    //     // this.setState({placesDisplay : r.venues})
    //     // console.log(r.venues)
    //     console.log(r)
    //   })
    // }



changeHandler = (e) => {
  //Log every key value and save to state from form
  let data = {...this.state}
  data[e.target.name] = e.target.value

  this.setState(data)
}

getTrips = () =>{
  //get data from JWT locked route
  // Passed header variable with token in headers
  axios.get('/api/trips', header)
  .then(response => {
    console.log(response.data)
    if(response.data.trips.length > 0){
      
  let data = {...this.state}
  data.trips = response.data.trips
      this.setState(data)
    }
  })
  .catch()
}

submitHandler = (e) => {   
  e.preventDefault()
  axios.post('/api/trips',{ name : this.state.name, days: this.state.days}, header)
    .then( response => {
      console.log("worked");
      
        let data = {...this.state}
        data.trips.push(response.data)
        this.setState(data)
    })
    .catch()
}

loginHandler = (e) => {
  axios.post('/api/auth/login',{ email: this.state.email, password: this.state.password})
  .then( response => {
    console.log(response.data)
    if(response.data.token){
      setToken(response.data.token)

      let data = {...this.state}
      data.user = response.data.user
      data.isAuthenticated = true
      data.hasError = false

      this.setState(data)
      this.getTrips()
    }
    
  })
  .catch(err =>{
    let data = {...this.state}
      data.hasError = true
      this.setState(data)
  })
}

logout = () =>{
  logout()
  let data = {...this.state}
  //reset everything on logout
  data.isAuthenticated = false
  data.user = ""
  data.email = ""
  data.password = ""
  data.trips = []
  
  this.setState(data)
}
registerHandler = (e) => {
  axios.post('/api/auth/',{})
  .then( response => {
  
  })
  .catch()
}
  
displayTrips = ()=>{
  return this.state.trips.map(trip => 
<li key={trip._id} id={trip._id}>{trip.name}</li>
    )
}
componentDidMount(){
  if(getToken()){
    let decoded = jwt_decode(getToken()) //decode token
    let data = {...this.state}
    data.user = decoded
    data.isAuthenticated = true
    this.setState(data)
  }
  else{
    return (<Redirect to='/login' />)
  }

  axios.get('/api/trips')
  .then(response => {
    console.log("i am a response",response.data)
    if(response.data.trips.length > 0){
      
  let data = {...this.state}
  data.trips = response.data.trips
      this.setState(data)
    }
  })
  .catch()
}


render(){ 
    // const venues = this.state.placesDisplay.map(venue=>{
    //   return <App venues ={venue} />
    // } )

  const TripView = (this.state.isAuthenticated) ? <Row>
                                                    <Col md={6}>
                                                      <ShowTrip trips={this.state.trips} />
                                                    </Col>

                                                    <Col md={6}>
                                                      <AddTrip add={this.submitHandler} change={this.changeHandler} />
                                                    </Col>
                                                  
                                                  </Row> : null
      
  console.log(this.state)

  return (
  <Router>
      <Nav loggedIn={this.state.isAuthenticated} logout={this.logout}/>

    {/* <Route path="/addtrip"  render={(props => (!this.state.isAuthenticated) ? <Login change={this.changeHandler} login={this.loginHandler} {...props} /> : <Redirect to="/UserHome"/> )} /> */}
    <Route path='/userhome' component={UserHome}/> 
    {/* <Route path='/addtrip' render={(props=> <AddTrip change={this.changeHandler} submit={this.submitHandler} {...props}/>)}/>  */}
    <Route path='/Restaurant' component ={Restaurant}/>
    <Route path='/Login' render={(props => (!this.state.isAuthenticated) ? <Login change={this.changeHandler} login={this.loginHandler} {...props} /> : <Redirect to="/"/> )} />
    <Route exact path="/"  component={Home} />
    {/* <Route path='/login' render={(props) => <Login {...props} change={this.changeHandler} login={this.loginHandler}/>}/> */}
        
        <Container>
          <Alert color="danger" isOpen={this.state.hasError} toggle={this.onDismiss} fade={false}>{this.state.errorMsg}</Alert>
          {/* Username: {this.state.user.username} */}
          
          {TripView} 
        </Container>
      {/* <Restaurant/> */}
  </Router>  
  );
  }
}
export default App;