import React, { Component } from 'react'
import './component.css' ;
// import './App.js'
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
          {/* <button onClick={this.submit} className="searchLocation"> Search </button>
        <input onChange={this.handleChange} className="Location" placeholder="Enter Location"></input>
         */}
          {/* <input name="searchValue" onChange={this.changeHandler} value={this.state.searchValue} type="text"/>
        <input type="submit" onClick={()=>{this.handleSearch(this.state.searchValue)}} value="search"/>
         */}
    
          </nav>
      </div>
    )
  }
}
