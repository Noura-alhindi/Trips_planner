import React, { Component } from 'react';
import axios from 'axios';
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
// import Experience from './Experience';
import ControlledCarousel from './components/Slide' ;
import Login from './components/Login';
import Search from './components/Search';




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


    handleSearch= (input)=> {
  // let city = 'dubai'
      fetch(`https://developers.zomato.com/api/v2.1/cities?q=${input}}`,{
        headers:{
          "user-key" : "76984ab3dd3557f029fe03c716e88a2e"
        }
      })
      .then(res=> res.json())
      .then(r => {
        console.log(r.location_suggestions[0].id);
        let cityId = r.location_suggestions[0].id
        
      fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&q=restaurant`,{
        headers:{
          "user-key" : "76984ab3dd3557f029fe03c716e88a2e"
        }
      })
      .then(res=> res.json())
      .then(r => {
        let data = {...this.state}
        console.log("***",r.restaurants)
        r.restaurants.forEach((restaurant)=>{
          data.displayVenues.push(restaurant)
        })
  this.setState(data)

      })
      })
    }

    // componentDidMount=()=> {
  
    //   fetch("https://developers.zomato.com/api/v2.1/search?entity_type=city&q=restaurant",{
    //     headers:{
    //       "user-key" : "76984ab3dd3557f029fe03c716e88a2e"
    //     }
    //   })
    //   .then(res=> res.json())
    //   .then(r => {
       
    //     console.log("random",r)
    //     this.setState(r.restaurants)
    //     console.log(r.restaurants);
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
  axios.post('/api/trips',{ name : this.state.name}, header)
    .then( response => {
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


render(){ 

    let venues = this.state.displayVenues.map(venue=>{
      return <Restaurant venue={venue} />
      // let randoms = this.state.displayVenues.map(venue=>{
      //   return <Restaurant venue={venue} />

    } )


   //if not logged in show login page
  const showLogin = (!this.state.isAuthenticated) ? <Login change={this.changeHandler} login={this.loginHandler} /> : null
    // show logout button
  const Logout = (this.state.isAuthenticated) ? <Button onClick={this.logout}>Logout</Button> : null
   //show trips when logged in
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
    <div>
      <Nav />
    <ControlledCarousel/>
    <Search search ={this.handleSearch}/>
    {/* <Route path="/" exact render={(props => (!this.state.isAuthenticated) ? <Login change={this.changeHandler} login={this.loginHandler} {...props} /> : <Redirect to="/UserHome"/> )} /> */}
    <Route path="/" exact component={Home} />
    {/* <Route path='/index' component={Home}/> */}
    <Route path='/userhome' component={UserHome}/> 
    <Route path='/login' render={(props) => <Login {...props} change={this.changeHandler} login={this.loginHandler}/>}/>
        
        {/* { <Container>
          <Alert color="danger" isOpen={this.state.hasError} toggle={this.onDismiss} fade={false}>{this.state.errorMsg}</Alert>
           */}
          {/* Username: {this.state.user.username} */}
          {/* {Logout} */}
          {/* {showLogin} */}

          {/* {TripView} */}
        {/* </Container> } */}

        {venues}
        {/* {randoms} */}

         
       
    </div>
  </Router>  
  );
  }
}
export default App;