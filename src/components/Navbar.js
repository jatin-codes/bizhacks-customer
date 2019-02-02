import React, { Component } from 'react';
import bblogo from '../logo.png';
import rbclogo from '../rbc.png';
import tdlogo from '../td.png';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                {/* <div className="top-header-div">
                    <img src={rbclogo} alt="rbc rewards" className="logo-any" />
                    <h3>Hi Bob</h3>
                </div> */}
                <div className="top-header-div">
                    <img src={tdlogo} alt="td rewards" className="logo-any" />
                    <h3>Hi Bob</h3>
                </div>
                <div className="header-div">
                    <img src={bblogo} alt="bestbuy logo" className="logo-bb" />
                    <h1>BESTBUY PARTNERS</h1>
                </div>
            </div>
        )
    }
}