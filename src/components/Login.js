import React, { Component } from 'react';
import Navbar from './Navbar';
import {Redirect} from 'react-router-dom';
class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            point: 5000,
            id: ''
        };
    }
    submitLogin(e) {}

    handleClick() {
        this.setState({renderResponse: true})
    }

    render() {
        const {renderResponse, point, name} = this.state;
        if (renderResponse){
            return <Redirect to={{
                pathname: "/bestbuy",
                state: {
                    point, name
                }
            }} />
        }
        return (
            <div className="inner-container">
        <div className="header">
          Login
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this
            .handleClick
            .bind(this)}>Login</button>
        </div>
      </div>
    );
            // <div>
            //     <div style={pStyle}>
            //         <form>
            //             <div>
            //                 <label>
            //                     Name:
            //     <input type="name" name="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
            //                 </label>
            //             </div>
            //             <div>
            //                 <label>
            //                     Password:
            //     <input type="password" name="password" value={this.state.id} />
            //                 </label>
            //             </div>
            //             <input type="submit" value="Save" />
            //         </form>
            //     </div>
            // </div>

        // )
    }

}
const pStyle = {
    fontSize: '30px',
    // textAlign: 'right'
    float: 'right',
    margin: ''
};

export default Login;