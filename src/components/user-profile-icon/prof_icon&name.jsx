import React from 'react'
import user from '../../static-images/user.png'
import testuser from '../../static-images/eren.png'
import './profile.scss'
export default function userProfile() {
    return (
        <div className="profile">
            <div className="user-info">
                <div className="profile-pic">
                    <img src={testuser} alt={user} />
                </div>
                <p>Eren Jeager</p>
            </div>
        </div>
    )
}
