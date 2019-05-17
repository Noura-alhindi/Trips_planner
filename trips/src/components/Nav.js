import React , {Component} from 'react';
import {
    BrowserRouter as  Route , Link 
}from 'react-router-dom'
import './component.css' ;
// import { Button ,Input} from 'reactstrap'
// import UserHome from './UserHome'
// import Restaurant from './Restaurant';



class Nav extends Component {
    render(){
        let sign;
    if ( this.props.loggedIn) {
        
        sign = <Link className="sign"  onClick={this.props.logout} to="/">LogOut</Link>
    } else {

        sign = <Link className="sign"  to="Login">sign in / up</Link>
    }

    // onClick = ()=>{
    //     this.props.search()

    // }
    // let search =(
    //         <div className="search">
    //     <input name="searchValue" onChange={this.props.onChange} values={this.props.value} type="text"/>
    //     <input type="submit" onClick={()=>{this.props.handleSearch(this.props.value)}} value="search"/>
    // </div> )
    
return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand" >Trip Planner </h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
                <li className="nav-item">
                    <Link className="nav-link" to="Restaurant">Restaurants</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"  to="userhome">My Plan</Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link"  to="showtrip">Add Trip</Link>
                </li> */}

                </ul>
                {/* <form className="form-inline my-4 my-lg-2">
                <Input className="" type="text" placeholder="Search Location" aria-label="Search" onChange={this.props.onChange} values={this.props.value}/>
                <Button className="btn btn-outline-info my-1 my-sm-1" type="submit" onClick={this.props.onClick}>Search</Button>
                {/* {search} */}
                {/* </form> */} 
                
            </div>
            {sign}
            </nav>
            </div>
        );
        }
    }

        export default Nav;
