import React, { Component } from 'react'
import Nav from './Nav'
import ControlledCarousel from './Slide'
import Restaurant from './Restaurant'
import RestContainer from '../components/restContainer'



class Home extends Component{
    render(){
        return(
            <div>
            <ControlledCarousel />
            {/* <Restaurant /> */}
< RestContainer venue={this.props.venue} />
            </div>
        )
    }
}

export default Home 
