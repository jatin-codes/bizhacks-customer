import React, { Component } from 'react';
import bblogo from '../logo.png';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="top-header-div">
                    <img src={this.props.img} alt="logo" className="logo-any" />
                </div>
                <div className="header-div">
                    <img src={bblogo} alt="bestbuy logo" className="logo-bb" />
                    <h1>BESTBUY PARTNERS</h1>
                </div>
            </div>
        )
    }
}