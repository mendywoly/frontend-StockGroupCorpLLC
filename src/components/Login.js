import React, { Component } from 'react';

class Login extends Component {
    state={
        password: "",
        username: ""
    }

    handleChange= (event) => {
        this.setState({[event.target.name]:event.target.value})
    }



    handleSumbit = (event) => {
        event.preventDefault();
        this.loginSession().then(() => this.setState({password: "", username: ""}))
    }

    loginSession(){
        const url = "http://localhost:4000/sessions";
        let config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify(this.state)
        }

        return fetch(url, config).then(r => r.json()).then(data => {
            localStorage.setItem('token', data.token)
        })
    }

    render() {
        return (
            <div>
                <form action="" onSubmit = {this.handleSumbit}>
                <input value= {this.state.username} type="text" name="username" id="username" placeholder="username" onChange={this.handleChange}/>
                <input value= {this.state.password} type="password" name="password" id="password" placeholder="password" onChange={this.handleChange}/>
                <button>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;