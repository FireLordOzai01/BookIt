import React, { Component } from 'react';

class AdminLogin extends Component {
    state = { 
        userName: '',
        password: ''
     }

     loginAdmin = (e) => {
         e.preventDefault();
        this.props.adminLogin(this.state);
        this.setState({
            userName: '',
            password: ''
        })
     }

    render() { 
        return ( 
            <div className="AdminLogin-container container">
                <h1>Administrator Login</h1>
                <form id="login">
                    <div className="form-group">
                        <input  type="text" 
                                className="form-control" 
                                placeholder="User Name"
                                value={this.state.userName}
                                autoFocus
                                onChange={(e) => {this.setState({userName: e.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <input  type="password" 
                                className="form-control" 
                                placeholder="Password"
                                value={this.state.password}
                                onChange={(e) => this.setState({password: e.target.value})}/>
                    </div>
                    <button className="btn btn-primary float-right"
                            onClick={this.loginAdmin}>Log In</button>
                </form>
            </div>
         );
    }
}
 
export default AdminLogin;