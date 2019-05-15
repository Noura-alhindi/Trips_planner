import React, { Component } from 'react'
import Nav from './Nav'
import ControlledCarousel from './Slide'
import Restaurant from './Restaurant'


class Home extends Component{
    render(){
        return(
            <div>
            <ControlledCarousel />
            <Restaurant />
            </div>
        )
    }
}

export default Home 
