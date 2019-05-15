    // import React from 'react';
    import React, { Component } from 'react';
    import "bootstrap/dist/css/bootstrap.min.css";
    // import Image2 from './Image2' ;
    
    // import {
    //   BrowserRouter as Router,
    //   Route,
    //   Link
    // } from 'react-router-dom';
    
    import Nav from './Nav';
    import Restaurant from './Restaurant';
    // import Experience from './Experience';
    import ControlledCarousel from './Slide' ;
    import './App.css';

    class App extends Component {
      state = {
        placesDisplay : [] 
      }
     


  // fetch("https://developers.zomato.com/api/v2.1/restaurant?res_id=%20%2016774318"
      componentDidMount=()=> {
      
      fetch("https://developers.zomato.com/api/v2.1/search?entity_type=city&q=restaurant",{
        headers:{
          "user-key" : "76984ab3dd3557f029fe03c716e88a2e"
        }
      })
      .then(res=> res.json())
      .then(r => {
        // console.log(r.restaurants[1].restaurant.name)
        // console.log(r.restaurants[1].restaurant.featured_image)
        // console.log(r.restaurants[1].restaurant.thumb)
        // console.log(r.restaurants[1].restaurant.cuisines)
        // console.log(r.restaurants[1].restaurant.user_rating.aggregate_rating)
        // this.setState({placesDisplay : r.venues})
        // console.log(r.venues)
        console.log(r)
      })
              }
     


      render() {
    
    // const venues = this.state.placesDisplay.map(venue=>{
    //   return <Restaurant venues ={venue} />
    // } )
    
        return (
          <div className="App">
    
     {/* {venues} */}

        <Nav />
        <ControlledCarousel/>
        {/* <Image2/> */}
        <Restaurant/>
       
          </div>
        );
      }
    }
    
    export default App;