import React, { Component } from 'react';
import bblogo from '../logo.png';
import tdlogo from '../td.png';

export default class Navbar extends Component {
    render() {
        const logo = "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/RBC_Royal_Bank.svg/300px-RBC_Royal_Bank.svg.png";
        return (
            <div>
                <div className="top-header-div">
                    <img src={this.props.img} alt="logo" className="logo-any" />
                    <h4>Hi Bob</h4>
                </div>
                <div className="header-div">
                    <img src={bblogo} alt="bestbuy logo" className="logo-bb" />
                    <h1>BESTBUY PARTNERS</h1>
                </div>
            </div>
        )
    }
}