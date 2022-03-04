import tennisball from "./tennis-svgrepo-com.svg";
import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <div>            
            <div className='main-header'>
                <img src={tennisball} className="App-logo" alt="logo" />
                <h1 className="main-title">PadelKings</h1>
                <div className="title-header-group">
                    <h3 className="title-header">Home</h3>
                    <h3 className="title-header">Register</h3>
                </div>
            </div>
            <div className="band">

            </div>
            </div>
        );
    }
}
 
export default NavBar;