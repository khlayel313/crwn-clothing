import React from 'react';

import './sign-up.styles.scss'

import FormInput from '../form-input/form-input.component'
import Custombutton from '../custom-botton/custom-botton.component'

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

class SignUp extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }
    
    handleSubmit = async event => {
        event.preventDefault();
    
        const {displayName, email, password, confirmPassword} = this.state;

        if(password  !== confirmPassword) {alert("password don't match");return;}

        try {

            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user, {displayName});

            this.setState = ({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })

        }
        catch (error) {
        
                console.log('error creating user', error.message)
              

        }

        


    }
    handleChange = event => {
        const {value , name} = event.target;
        this.setState({[name]: value})
    }
    
    render () {
        return (
            <div className ="sign-up">
    
                <h2 className="title">I do Have not an account ?</h2>
    <form className="sign-up-form" onSubmit={this.handleSubmit}>
        
        <FormInput name="displayName" handleChange={this.handleChange} type="text" value={this.state.displayName} label="Display Name" required />   
        <FormInput name="email" handleChange={this.handleChange} type="email" value={this.state.email} label="E-mail" required />
        <FormInput name="password" label="Password" handleChange={this.handleChange} type="password" value={this.state.password} required />
        <FormInput name="confirmPassword" label="Confirm Password" handleChange={this.handleChange} type="password" value={this.state.confirmPassword} required />
        
    <div className="buttons">
    <Custombutton type="submit">SIGN UP</Custombutton>
   
    </div>
    </form>
            </div>
        )
        }
    
    }
    
    export default SignUp;