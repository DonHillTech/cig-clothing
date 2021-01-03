import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import './login.styles.scss';

class Login extends React.Component {
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
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render () {
        return (
            <div className='login'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" label="Email" type="email" value={this.state.email} onChange={this.handleChange} required />
                    <FormInput  label="Password" name="password" type="password" value={this.state.password} onChange={this.handleChange} required />
                    <div className='buttons'>
                      <CustomButton type='submit' value='Submit Form' >SIGN IN</CustomButton>
                      <CustomButton onClick={signInWithGoogle} isGoogleSiginIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>


                </form>
            </div>

        )
    }
}

export default Login;