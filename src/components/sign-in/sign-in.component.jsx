import React from 'react';

import './sign-in.component.scss';
import FormInput from '../form-input.component/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';

import { signInWithGoogle } from '../../firebase/firebase.utils';

//class component due to needing to hold state of what the user is typing rather than 
//simply returning a div

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

      
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''})
    }

    handleChange = event => {
        const { value, name} = event.target;

        this.setState({ [name]: value})
    }
    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In With Your Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label="email" required />
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="password" required/>
                
                <div className="buttons"> 
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{''}Sign In With Google{''}</CustomButton>
                </div>
                </form>
            </div>
        )
    }
}

export default SignIn;