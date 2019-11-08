import React from 'react';
import  './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import Custombutton from '../custom-botton/custom-botton.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {

constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: ''
    }
}

handleSubmit = event => {
    event.preventDefault();

    this.setState({email: '', password: ''})
}
handleChange = event => {
    const {value , name} = event.target;
    this.setState({[name]: value})
}

render () {
    return (
        <div className ="sign-in">

            <h2>Have an account ?</h2>
<form onSubmit={this.handleSubmit}>
    <FormInput name="email" handleChange={this.handleChange} type="email" value={this.state.email} label="E-mail" required />
    <FormInput name="password" label="Password" handleChange={this.handleChange} type="password" value={this.state.password} required />
    
<div className="buttons">
<Custombutton type="submit" value="Signin">SIGN IN</Custombutton>
<Custombutton type="button" onClick={signInWithGoogle} isGoogleSignIn >SIGN IN WITH GOOGLE</Custombutton>
</div>
</form>
        </div>
    )
    }

}

export default SignIn;