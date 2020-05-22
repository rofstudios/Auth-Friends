import React from 'react';
import { Route, Redirect } from 'react-router-dom';

let PrivateRoute = ({ component: Component, ...rest }) => {
    let token = localStorage.getItem('token');
    return (
        <Route
        {...rest}
            render = {() =>{
                if (token) {
                    return <Component />
                } else {
                    return <Redirect to='/' />
                }
            }}
        />
    );
};

export default PrivateRoute;