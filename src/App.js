import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import PartnerMain from './components/PartnerMain';
import BestbuyRewards from './components/BestbuyRewards';
import Rewards from './components/Rewards';
import Login from './components/Login';
import Transaction from './components/Transaction';
import ProductDetail from './components/ProductDetail';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          <Route exact path="/" component= {PartnerMain}/>
          <Route exact path="/rewards" component={Rewards}/>
          <Route exact path="/login" component= {Login}/>
          <Route exact path="/bestbuy" component= {BestbuyRewards}/>
          <Route exact path="/productDetail" component= {ProductDetail}/>
          <Route exact path="/Transaction" component= {Transaction}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
