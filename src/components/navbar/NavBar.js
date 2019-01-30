import React, { Component } from 'react';
import {HOME, ADMINLOGIN, MOREBOOKS} from './../constants/constants';
import BookItLogo from './../../imgs/BookItLogo.png';

class NavBar extends Component {
    state = { 

     }

    //  guestLogOut = () => {

    //  }

    render() { 
        return ( 
            <nav className="navbar fixed-top navbar-light bg-dark">
                <div className="logo-container nav-brand d-inline-flex justify-content-center">
                    <img src={BookItLogo}  alt=""/>
                    <p id="logo-text" className="d-flex align-content-end flex-wrap">ookIt!</p>    
                </div>
                <div className="links-container d-inline-flex">
                    {this.props.goodGuestSignUp === true &&
                     <button 
                        className="btn btn-success btn-sm"
                        onClick={() => this.props.guestLogOut()}>Log Out</button>
                    }
                    {/* <form className="form-inline">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">@</span>
                                <input type="text" className="form-control" placeholder="username"/>
                            </div>
                        </div>
                    </form> */}

                    
                    <p onClick={() => this.props.changePath(HOME)}>Home</p>
                    <p onClick={() => this.props.changePath(MOREBOOKS)}>More Books</p>
                    <p onClick={() => this.props.changePath(ADMINLOGIN)}>Admin Login</p>
                </div>
            </nav>
         );
    }
}
 
export default NavBar;