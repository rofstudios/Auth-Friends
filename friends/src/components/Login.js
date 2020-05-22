import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth';

//initial Form Values
let initialState = {
    username: '',
    password: ''
}

function Login() {
    let [credentials, setCredentials ] = useState(initialState)
    let {push} = useHistory();

    let handleChanges = e => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value});
    }
    // console.log(credentials)

    let login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', credentials)
        .then(res => {
            // console.log(res.data)
            localStorage.setItem('token', res.data.payload);
            push('/protected')

        })
        // setCredentials(initialState)
    }

    return (
        <div>
            <form onSubmit={login} style={{display: 'flex', flexDirection: 'column', width: '15%', margin:'auto', marginTop: '20px', height: '10vh', justifyContent: 'space-between'}}>
                <input
                type='text'
                name='username'
                value={credentials.username}
                onChange={handleChanges}
                />
                <input
                type='text'
                name='password'
                value={credentials.password}
                onChange={handleChanges}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;