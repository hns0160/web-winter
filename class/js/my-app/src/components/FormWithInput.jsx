import React from 'react'

class FormWithInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {username:"",email:"",password:""};
        this.reset = this.reset.bind(this);
        this.textUsername = this.textUsername.bind(this)
        this.logData = this.logData.bind(this)
        this.textPassword = this.textPassword.bind(this)
        this.textEmail = this.textEmail.bind(this)
    };

    reset() {
		this.setState(
			{username:"",email:"",password:""}
		);
	}

    textUsername(e){
        this.setState({username:e.target.value})
    }

    textPassword(e){
        this.setState({password:e.target.value})
    }

    textEmail(e){
        this.setState({email:e.target.value})
    }

    logData(e){
        e.preventDefault()
        console.log("Username entered:  ",this.state.username)
        console.log("Password entered:  ",this.state.password)
        console.log("Email entered:  ",this.state.email)
    }

    render() {
        return (
            <form>
                <label htmlFor='username'>Username: </label>
                <input type="text" id="username" value={this.state.username} onChange={this.textUsername} />
                <br/>
                <label htmlFor='password'>Password: </label>
                <input type="text" id="password" value={this.state.password} onChange={this.textPassword} />
                <br/>
                <label htmlFor='email'>Email: </label>
                <input type="text" id="email" value={this.state.email} onChange={this.textEmail} />

                <br/>
                <br/>
                <button onClick={this.logData} >Submit</button>
				<br />
                <br/>
				<button onClick={this.reset}>Reset</button>
            </form>
        )
    }
}

export default FormWithInput