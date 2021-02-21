import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import './login.styles.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})

        } catch(error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render () {
        return (
            <div className='login'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" label="Email" type="email" value={this.state.email} onChange={this.handleChange} required />
                    <FormInput  label="Password" name="password" type="password" value={this.state.password} onChange={this.handleChange} required />
                    <div className='buttons'>
                      <CustomButton type='submit' value='Submit Form' >SIGN IN</CustomButton>
                      <CustomButton type="button" onClick={signInWithGoogle} isGoogleSiginIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>

        )
    }
}

export default Login;