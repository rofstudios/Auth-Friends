import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios';
import FriendForm from './FriendForm';

let Friends = () => {
    let [friends, setFriends] = useState([])
    // console.log(friends)
    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                // console.log(res.data)
                setFriends(res.data)
            })
    }, [])


    return (
        <>
            <h3>Add New Friend</h3>
            <FriendForm />
            <h3>Hello Friends</h3>
            <div>
                {friends.map(friend => {
                    return (
                    <h2 key={friend.id}>{friend.name}</h2>
                    )
                })}
            </div>
        </>
    )
}

export default Friends;