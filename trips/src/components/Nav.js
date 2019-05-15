import React from 'react';
import {
    BrowserRouter as  Route , Link 
}from 'react-router-dom'
import './component.css' ;



function Nav() {
return (
    <Route>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" href="#">Trip planner </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
                <li className="nav-item">
                    <Link className="nav-link" to="Restaurant">Restaurants</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"  to="Experience">My Plan</Link>
                </li>

                </ul>
                <form className="form-inline my-2 my-lg-0">
                <Link className="sign"  to="#">sign in / up</Link>
                {/* <Link className="navbar-brand " to="#">Sign up</Link> */}
                
                {/* <input className="" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-info my-2 my-sm-1" type="submit">Search</button> */}
                </form>
            </div>
            </nav>
            </div>
    </Route>
        );
        }

        export default Nav;
