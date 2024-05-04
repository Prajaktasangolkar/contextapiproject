import React from 'react'
import { useUser } from '../context/index'

function Profile() {
    const {user}=useUser()
    if (!user) return <div>please login</div>
     

    return <div>Welcome {user.username} </div>
}

export default Profile