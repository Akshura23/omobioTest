import React, { Component } from 'react';
import axios from 'axios';
import  { Redirect } from 'react-router-dom';

export default class Login extends Component {
    constructor(){
        super();
        this.state ={
            userName: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const { history } = this.props;
        let formData = new FormData();
        formData.append("userName",this.state.userName);
        formData.append("password",this.state.password);
        //const url = "http://localhost:80/omobioTest/bizlogic/";
        //axios.post(url,formData)
        axios({
            method: 'post',
            url: "http://localhost:80/omobioTest/bizlogic/",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
         })
         //.then(res => console.log(res.data))
        .then(res => res.data==="ok" ? history.push('/userlist'): alert("invalid user name and passowrd") )
        //.then(res => res.data==="ok" ? console.log("1") :console.log("2") )
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <br/>
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto" id="login-form" >
                            <form noValidate onSubmit={this.onSubmit}>
                                    <h3 align="center">Login</h3>
                                    <div className="form-group">
                                        <label htmlFor="userName"> User Name</label>
                                        <input type="text" className="form-control" id="userName" name="userName" placeholder="Enter User Name"
                                                value={this.state.userName} onChange={this.onChange} />
                                                <small ></small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password"> Password</label>
                                        <input type="password" className="form-control" id="password" name="password" placeholder="Enter Password"
                                                value={this.state.password} onChange={this.onChange} />
                                                 <small></small>
                                    </div>
                                    <br></br>
                                    <button className="btn btn-lg btn-primary btn-block"> Login</button>
                               
                            </form>
                        </div>

                    </div>
                
            </div>
        )
    }
}


