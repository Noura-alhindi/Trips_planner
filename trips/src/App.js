    // import React from 'react';
    import React, { Component } from 'react';
    import "bootstrap/dist/css/bootstrap.min.css";
    // import {
    //   BrowserRouter as Router,
    //   Route,
    //   Link
    // } from 'react-router-dom';
    
    import Nav from './Nav';
    import Experience from './Experience';
    import './App.css';

    class App extends Component {
      state = {
        placesDisplay : [] 
      }
      
      // handleSearch= (input) => {
      //   const url = `https://api.foursquare.com/v2/venues/search?client_id=A1NQCVMYYPMOOO2YTBLF2EYPYVBM5RG21MJUQUVCUQLZSN1Z&client_secret=K5O4XJZR5TTRV5OB1DRUWZB3TF2H1TXGP2ENPUTLX30FX1EF&v=20200323&limit=500&ll=40.7484,-73.9857&query=resturant&location.city${input}`
      // fetch(url).then(response =>{
      //   response.json().then(data => {
    
      //     console.log(data.venues)
      //     this.setState({placesDisplay : data.venues})
      //   })
      // }
      // )}
      
    
      componentDidMount=()=> {
        const url = `https://developers.zomato.com/api/v2.1/search/?entity_id/=305/&entity_type/=city/&q/=Denver`
        // const url = `https://api.foursquare.com/v2/venues/4b522afaf964a5200b6d27e3?client_id=A1NQCVMYYPMOOO2YTBLF2EYPYVBM5RG21MJUQUVCUQLZSN1Z&client_secret=K5O4XJZR5TTRV5OB1DRUWZB3TF2H1TXGP2ENPUTLX30FX1EF`
        fetch(url).then(response =>{

            console.log(response)
            // this.setState({placesDisplay : data.venues})
          })
        }
        
    
    
      render() {
    
    // const venues = this.state.placesDisplay.map(venue=>{
    //   return <App venues ={venue} />
    // } )
    
        return (
          <div className="App">
    
    {/* {venues} */}
        <Nav />
        <Experience />
          </div>
        );
      }
    }
    
    export default App;