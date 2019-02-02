import React, {Component} from 'react';
import logo from '../logo.png';

export default class Navbar extends Component {
    render (){
        return (
            <div className="header-div">
                <img src= {logo} alt= "bestbuy logo" className="logo-bb"/>
                <h1>BESTBUY PARTNERS</h1>
            </div>
        )
    }
}