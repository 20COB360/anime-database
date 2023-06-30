import React from 'react'
import { Link } from "react-router-dom"
import user from '../../static-images/user.png'
import testuser from '../../static-images/eren.png'
import './profile.scss'

export default function Profile() {
    return (
        <>
            <div className="profile-wrapper">
                <div className="profile">
                    <div className="user-info">
                        <p>Eren Jeager</p>
                        <div className="profile-pic">
                            <img src={testuser} alt={user} />
                        </div>
                    </div>
                    <div className="profile-dropdown">
                        <a href="/user">View Profile</a>
                        <p><i className="fa fa-sign-out"></i></p>
                    </div>
                </div>
            </div>
        </>
    )
}
