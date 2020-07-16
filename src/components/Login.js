import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap';

var PastebinAPI = require('pastebin-js');
var pastebin =  new PastebinAPI({
    'api_dev_key' : '4d0e7ac85c09b0c56f4d4327896de86e',
    'api_user_name' : 'divyesh_paste',
    'api_user_password' : 'Welcome@paste123'
   });
// https://pastebin.com/api/api_login.php

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            user:'',
            password:''
        }
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmitForm(e){
        e.preventDefault();
        debugger;
        var param= {
            api_dev_key:"4d0e7ac85c09b0c56f4d4327896de86e",
            api_user_name:this.state.user,
            api_user_password:this.state.password,
        }
        var headers = {'Content-Type': 'application/json'}
        const config = {
            method: 'POST',
            headers:headers,
            url: 'https://pastebin.com/api/api_login.php'
        }
        pastebin.getUserInfo(`https://pastebin.com/api/api_login.php`,param,{ mode: 'no-cors'})
        .then(function(data){
            console.log(data);

        })
        .fail(function(err){
            console.log(err);
        })

    }

    handleChange(e){
        debugger;
        this.setState({[e.target.name]:e.target.value });
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmitForm}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" name="user" 
                        value={this.state.user} onChange={(e)=>this.handleChange(e,"user")} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" 
                        value={this.state.password} onChange={(e)=>this.handleChange(e,"pssword")} />
                    </Form.Group>

                    <Button variant="primary" type="submit">Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Login;
