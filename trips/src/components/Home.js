import React, { Component } from 'react'
import Nav from './Nav'
import ControlledCarousel from './Slide'
import Restaurant from './Restaurant'
// import RestaurantsContainer from './RestaurantsContainer';


class Home extends Component{
    render(){
        // let resRandom = ''
        // if(this.props.venue){
        //     console.log("ebere")
        //     console.log(this.props.venue.restaurant)
        //    resRandom = <Restaurant venue={this.props.venue.restaurant} />
        // }
        // console.log(this.props.venue)
        return(
            <div>
            <ControlledCarousel />
            
            <Restaurant/>
            {/* <Restaurant venue={this.props.venue} /> */}
            {/* <RestaurantsContainer venue={this.props.venue}/> */}
            {/* {resRandom} */}
            </div>
        )
    }
}

export default Home 
