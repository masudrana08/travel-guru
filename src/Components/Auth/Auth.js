import { FormGroup } from '@material-ui/core';
import React from 'react';
import "./Auth.css"
import Header from '../Header/Header'
import logoBlack from '../../images/Logo-black.png'
import fb from '../../images/icon/fb.png'
import google from '../../images/icon/google.png'
const Auth = () => {
    return (
        <div>
            <Header img={logoBlack}></Header>
            
            <form className="form-group auth-form-group">
                
                <FormGroup>
                <h2 style={{textAlign:"left"}}>Create an account</h2>
                    <input type="text" placeholder="First name"/>
                    <input type="text" placeholder="Last name"/>
                    <input type="email" placeholder="Username and Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Confirm Password"/>
                    <input type="submit" value="Signup"/>
                </FormGroup>
                
                    <span>Already have an account? </span><span style={{color:"orange"}}>Login</span> 
            </form>
           <div style={{width:"300px", margin:"auto"}}>
            <p style={{textAlign:"center"}}>---------- Or -----------</p>
                    <div className="auth-provider-section">
                        <img style={{width:"30px", height:"30px", marginRight:"10px"}} src={fb} alt=""/>
                        <p>Continue with Facebook</p>
                    </div>
                    <div className="auth-provider-section">
                        <img style={{width:"30px", height:"30px", marginRight:"10px"}} src={google} alt=""/>
                        <p>Continue with Google</p>
                    </div>
                </div>
        </div>
    );
};

export default Auth;