import React from 'react'

export default function AdminHeader() {
  return (
    <div>
       <div className="admin-header">
        {/* <!-- <div className="site-info"> --> */}
        <div className="logo">
            <img src="./Images/Angry-Rias-Gremory-PNG-High-Quality-Image1.png" alt=""/>
            <p>AnimeDatabase</p>
        </div>
        <div className="head">
            <h1>Admin Panel</h1>
            <div className="btns">
                <button className="add-btn">ADD</button>
                <button className="updt-btn">UPDATE</button>
                <button className="del-btn">DELETE</button>
            </div>
        </div>
        {/* <!-- </div> --> */}
        <div className="profile-info">
            <div className="profile-pic"><img src="./Your_Name/Mone Kamishiraishi.jpg" alt=""/></div>
            <div className="admin-name">
                <p>Mone Kamishiraishi</p>
            </div>
            <div className="log-out">
                <i className="fa fa-sign-in"></i>
            </div>
        </div>
    </div>
    </div>
  )
}
