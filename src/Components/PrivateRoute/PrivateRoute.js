import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';

const PrivateRoute = ({children,...rest}) => {
    const loggedIn=localStorage.getItem("loggedIn") 
    const location=useLocation()
    return (
        
        <Route
        {...rest}
        render={
            ()=> loggedIn ? (children)
            : (
                <Redirect to={
                    {pathname:"/auth",
                        state:{from:location}
                    }
                }
                />
            )
            
        }

        />
    );
};

export default PrivateRoute;