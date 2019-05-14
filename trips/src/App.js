    // import React from 'react';
    import React, { Component } from 'react';
    import "bootstrap/dist/css/bootstrap.min.css";
    
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
      // (forsquare)
      // componentDidMount=()=> {
      //   const url = `https://api.foursquare.com/v2/venues/search?client_id=A20M3ROYMIL105XIDSNL2NF3ATCOAQYLD4OUYOBAWHPR3HZP&client_secret=NIGWQSZJGKI3VZUOI3DJL4DJB3AUNS2H5BBKUZYEN5BPMKE0&v=20200323&limit=500&ll=40.7484,-73.9857&query=resturant`
      //   fetch(url).then(response =>{
      //     response.json().then(data => {
    
      //       const photoUrl = `https://api.foursquare.com/v2/venues/${data.response.venues[27].id}/photos?client_id=A20M3ROYMIL105XIDSNL2NF3ATCOAQYLD4OUYOBAWHPR3HZP&client_secret=NIGWQSZJGKI3VZUOI3DJL4DJB3AUNS2H5BBKUZYEN5BPMKE0&v=20200323&`;
      //         fetch(photoUrl).then(response =>{
      //           response.json().then(data => {
      //             console.log("b",data);
      //           let picture = `${data.response.photos.items[0].prefix}300x500${data.response.photos.items[0].suffix}`
      //             console.log(picture);
                  
      //           })
                
      //         }
      //         )
            
            
      //       console.log("t",data.response.venues[0].id)
            
      //     })
      //   }
      //   )}

      // -------------------
        // (zomato) 
      // componentDidMount=()=> {
      //   const url = `https://developers.zomato.com/api/v2.1/search/?entity_id/=305/&entity_type/=city/&q/=Denver`
      //   fetch(url).then(response =>{

      //       console.log(response)
      //       // this.setState({placesDisplay : data.venues})
      //     })
      //   }
        
    
    
      render() {
    
    // const venues = this.state.placesDisplay.map(venue=>{
    //   return <App venues ={venue} />
    // } )
    
        return (
          <div className="App">
    
    {/* {venues} */}
        <Nav />
        {/* <Experience /> */}
        <ControlledCarousel/>
        <Restaurant/>
          </div>
        );
      }
    }
    
    export default App;