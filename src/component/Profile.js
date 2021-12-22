import React from 'react'
import { useSelector } from 'react-redux'
const Profile = () => {

    const { name, age, gender } = useSelector((state) => {
        return state

    })

    return (
        <div>
            <h2>My Name Is:{name} </h2>
            <h2>My Age Is:{age} </h2>
            <h2>My Gender Is:{gender} </h2>
        </div>
    )
}

export default Profile
