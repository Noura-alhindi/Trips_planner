import React , {Component} from 'react';
import {
    BrowserRouter as  Route , Link 
}from 'react-router-dom'
import './component.css' ;
import UserHome from './UserHome'
import Restaurant from './Restaurant';



class Nav extends Component {
    render(){
        let sign;
      if ( this.props.loggedIn) {
        
        sign = <Link className="sign"  onClick={this.props.logout} to="/">Logout</Link>
    } else {

        sign = <Link className="sign"  to="Login">sign in / up</Link>
    }

    
return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" href="#">Trip planner </Link>
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
                    <Link className="nav-link"  to="addtrip">Add Trip</Link>
                </li> */}

                </ul>
                <form className="form-inline my-2 my-lg-0">
               {sign}
                {/* <Link className="navbar-brand " to="#">Sign up</Link> */}
                
                </form>
            </div>
            </nav>
            </div>
        );
        }
    }

        export default Nav;
