    import React, { Component } from 'react';
    import "bootstrap/dist/css/bootstrap.min.css";
    import Nav from './Nav';
    import Experience from './Experience';
    // import './App.css';

  let header = {
      headers :{
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${getToken()}`
      }
    }
    class App extends Component {
      state = {
        placesDisplay : [],
        user : "",
        errorMsg : '',
        isAuthenticated : false,
        hasError : false
      }


  changeHandler = (e) => {
    //Log every key value and save to state from form
    let data = {...this.state}
    data[e.target.name] = e.target.value

    this.setState(data)
  }

      componentDidMount=()=> {
        const url = `https://developers.zomato.com/api/v2.1/search/?entity_id/=305/&entity_type/=city/&q/=Denver`
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