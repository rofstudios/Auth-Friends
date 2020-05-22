import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

let initialState = {
    // id: Date.now(),
    name: '',
    age: '',
    email: ''
}

let FriendForm = () => {
    let [friend, setFriend] = useState(initialState);

    let handleChanges = e => {
        setFriend({ ...friend, [e.target.name]: e.target.value});
    }

    let onSubmit = e => {
        e.preventDefault();
        let newFriend = {
            name: friend.name,
            age: friend.age,
            email: friend.email
        }
        axiosWithAuth()
        .post('/api/friends', newFriend)
    }

    return (
        <div>
            <form onSubmit={onSubmit} style={{display: 'flex', flexDirection: 'column', width: '15%', margin:'auto', marginTop: '20px', height: '10vh', justifyContent: 'space-between'}}>
                <input
                type='text'
                name='name'
                value={friend.name}
                onChange={handleChanges}
                />
                <input
                type='text'
                name='age'
                value={friend.age}
                onChange={handleChanges}
                />
                <input
                type='text'
                name='email'
                value={friend.email}
                onChange={handleChanges}
                />

                <button>Add</button>
            </form>
    </div>
    )
}

export default FriendForm;