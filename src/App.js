import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import PartnerMain from './components/PartnerMain';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component= {PartnerMain}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
