import React, { Component } from 'react';

class SignUp extends Component {
    state = { 
        name: '',
        email: '',
        password: ''
     }

     guestSignUp = (e) => {
         e.preventDefault();
         this.props.guestSignUp(this.state);
         this.setState({
            name: '',
            email: '',
            password: ''
         })
     }

    render() { 
        return ( 
            <div className="container form-container">
                <form id="signup">
                    <p>New here? Create an Account.</p>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Name"
                            value={this.state.name}
                            onChange={(e) => {this.setState({name: e.target.value})}}
                            required/>
                    </div>
                    <div className="form-group">
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(e) => {this.setState({email: e.target.value})}}
                            required/>
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Password"
                            value={this.state.password}
                            onChange={(e) => {this.setState({password: e.target.value})}}
                            required/>
                    </div>
                    <button 
                        className="btn btn-primary float-right"
                        onClick={this.guestSignUp}>Sign Up!</button>
                </form>
            </div>
         );
    }
}
 
export default SignUp;