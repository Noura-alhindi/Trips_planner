import React, { Component } from 'react'
import './component.css' ;

export default class Search extends Component {
  state = {}
  handleChange =e=> {
    this.setState({value:e.target.value})
  }
  submit=()=>{
    this.props.search(this.state.value)
  }
  render() {
    return (
      <div>
           <nav className="search" >
          <button onClick={this.submit} className="searchLocation"> Search </button>
        <input onChange={this.handleChange} className="Location" placeholder="Enter Location"></input>
        
        
    
          </nav>
      </div>
    )
  }
}
