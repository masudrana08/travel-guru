import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import logo from '../../images/Logo.png'
import './Header.css'

const Header = (props) => {
    const [showArea,setShowArea,loggedIn]=useContext(MyContext)
    return (
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", color:`${props.color}`, height:'50px'   }}>
           <div>
                <Link to="/"> 
                    <img style={{height:"40px"}} src={props.img || logo} alt=""/>
                </Link>
           </div>
            {/* <input className="input-style" style={{height:"25px"}} type="text" placeholder="search your destination"/> */}
            
            <div className="header-right" style={{display:"flex", alignItems:"center"}}>
                <Link style={{textDecoration:"none", color:`${props.color}`}} to="/news">
                    <p>News</p>
                </Link>

                <Link style={{textDecoration:"none", color:`${props.color}`}} to="/destination">
                    <p>Destination</p>
                </Link>

                <Link style={{textDecoration:"none", color:`${props.color}`}} to="/blog">
                    <p>Blog</p>
                </Link>

                <Link style={{textDecoration:"none", color:`${props.color}`}} to="/contact">
                    <p>Contact</p>
                </Link>
                
                
                
                
                {
                    loggedIn?  <h4 ><span style={{color:"orange"}}>||</span> Hello, User</h4>
                    : <>
                        <Link style={{textDecoration:"none", color:"white"}} to="/auth">
                            <Button size="small" style={{background:"orange", color:"white"}}>Login</Button>
                        </Link>
                    </>
                }     
            </div>
        </div>
    );
};

export default Header;